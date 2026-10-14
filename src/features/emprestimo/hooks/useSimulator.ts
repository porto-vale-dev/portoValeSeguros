"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  useForm,
  useWatch,
  type FieldErrors,
  type UseFormReturn,
} from "react-hook-form";

import { trackEvent } from "@/features/emprestimo/tracking";

import { LP_SLUG, THANK_YOU_PATH } from "../constants/simulator.constants";
import { buildLeadPayload } from "../domain/build-lead-payload";
import { estimateInstallment } from "../domain/calculate-installment";
import {
  getNextStep,
  getPreviousStep,
  getProgressPercentage,
  isFirstStep,
} from "../domain/flow";
import {
  SIMULATOR_DEFAULT_VALUES,
  STEP_SCHEMAS,
  type SimulatorFormValues,
} from "../schemas";
import { sendLead } from "../services/lead.service";
import { isFormFieldName } from "../types/form-fields";
import type {
  InstallmentEstimate,
  SimulatorStep,
  SubmissionState,
} from "../types/simulator.types";
import { getAttribution, getDeviceType } from "../utils/attribution";
import { createSessionId, markLeadSent } from "../utils/lead-session";

export type SimulatorController = {
  form: UseFormReturn<SimulatorFormValues>;
  /** Erros da etapa atual, por campo. */
  errors: FieldErrors<SimulatorFormValues>;

  // Fluxo
  step: SimulatorStep;
  progress: number;
  canGoBack: boolean;
  goNext: () => Promise<void>;
  goBack: () => void;

  // Oferta
  estimate: InstallmentEstimate;

  // Envio
  submission: SubmissionState;
};

/**
 * Controlador do simulador.
 *
 * Concentra a máquina de estado do fluxo, a validação por etapa e os envios
 * ao n8n. Não contém lógica visual: os componentes consomem este controlador
 * e apenas renderizam.
 *
 * Captura em duas fases:
 * 1. Ao concluir `dados`, o lead é enviado sem esperar resposta — a tela
 *    avança na hora e o lead já fica gravado se o cliente abandonar o slider.
 * 2. Ao concluir `valor`, tudo é reenviado com a simulação; esse envio é
 *    aguardado e, com sucesso, leva à página de obrigado.
 */
export function useSimulator(): SimulatorController {
  const router = useRouter();

  const form = useForm<SimulatorFormValues>({
    defaultValues: SIMULATOR_DEFAULT_VALUES,
    mode: "onSubmit",
  });

  /**
   * A leitura de `formState.errors` precisa acontecer durante o render: é
   * assim que o proxy do React Hook Form registra a assinatura e re-renderiza
   * a árvore quando um erro aparece ou sai.
   */
  const { errors } = form.formState;

  const [step, setStep] = useState<SimulatorStep>("dados");
  const [submission, setSubmission] = useState<SubmissionState>({
    status: "idle",
  });

  /** Mesma jornada nos dois envios; criada no primeiro uso. */
  const sessionIdRef = useRef<string | null>(null);

  /** Garante que `form_started` seja disparado uma única vez. */
  const formStartedRef = useRef(false);

  /* --------------------------------------------------------------------
   * Oferta — recalculada a cada mudança do valor
   * ------------------------------------------------------------------ */
  const creditAmount = useWatch({ control: form.control, name: "creditAmount" });

  const estimate = useMemo(
    () => estimateInstallment(creditAmount),
    [creditAmount],
  );

  /* --------------------------------------------------------------------
   * Início do preenchimento e limpeza de erro ao editar
   * ------------------------------------------------------------------ */
  useEffect(() => {
    // `watch` com callback observa os valores sem provocar re-render.
    const subscription = form.watch((_values, { name }) => {
      if (!formStartedRef.current) {
        formStartedRef.current = true;
        trackEvent({ name: "form_started", lpSlug: LP_SLUG });
      }

      // O erro de um campo sai de cena assim que o cliente o corrige.
      if (name && isFormFieldName(name) && form.formState.errors[name]) {
        form.clearErrors(name);
      }
    });

    return () => subscription.unsubscribe();
  }, [form]);

  /* --------------------------------------------------------------------
   * Validação
   * ------------------------------------------------------------------ */

  /** Valida a etapa atual e aponta o foco para o primeiro campo com erro. */
  const validateStep = useCallback(
    (current: SimulatorStep): boolean => {
      const result = STEP_SCHEMAS[current].safeParse(form.getValues());

      if (result.success) {
        return true;
      }

      let firstField: keyof SimulatorFormValues | null = null;

      // O Zod roda todas as regras de um campo e devolve um erro por regra
      // violada. Só o primeiro de cada campo é exibido — o mais básico
      // ("Informe seu CPF.") antes do específico ("Informe um CPF válido.").
      // O controle é local porque `formState.errors` não reflete o
      // `setError` de forma síncrona.
      const fieldsWithError = new Set<keyof SimulatorFormValues>();

      for (const issue of result.error.issues) {
        const name = issue.path.map(String).join(".");

        if (!isFormFieldName(name) || fieldsWithError.has(name)) {
          continue;
        }

        fieldsWithError.add(name);
        form.setError(name, { type: issue.code, message: issue.message });

        if (!firstField) {
          firstField = name;
        }
      }

      if (firstField) {
        form.setFocus(firstField);
      }

      return false;
    },
    [form],
  );

  /* --------------------------------------------------------------------
   * Envio
   * ------------------------------------------------------------------ */
  const buildPayload = useCallback(
    (current: SimulatorStep) => {
      if (!sessionIdRef.current) {
        sessionIdRef.current = createSessionId();
      }

      return buildLeadPayload({
        attribution: getAttribution(),
        device: getDeviceType(),
        estimate: current === "valor" ? estimate : null,
        page: `${window.location.origin}${window.location.pathname}`,
        referrer: document.referrer,
        sessionId: sessionIdRef.current,
        step: current,
        values: form.getValues(),
      });
    },
    [estimate, form],
  );

  const submit = useCallback(async () => {
    setSubmission({ status: "loading" });

    const result = await sendLead(buildPayload("valor"));

    if (result.status !== "success") {
      setSubmission({
        status: "error",
        message: result.status === "error" ? result.message : undefined,
      });

      trackEvent({ name: "lead_submit_error", lpSlug: LP_SLUG });
      return;
    }

    trackEvent({
      name: "lead_submitted",
      lpSlug: LP_SLUG,
      properties: { credit_amount: estimate.creditAmount },
    });

    markLeadSent();
    // O estado fica em `loading` até a troca de página, para que o botão não
    // aceite um segundo clique durante a navegação.
    router.push(THANK_YOU_PATH);
  }, [buildPayload, estimate.creditAmount, router]);

  /* --------------------------------------------------------------------
   * Navegação
   * ------------------------------------------------------------------ */
  const goToStep = useCallback((next: SimulatorStep) => {
    setStep(next);
    setSubmission({ status: "idle" });

    // Cada etapa começa do topo, como uma tela nova — sem animação para quem
    // pediu menos movimento.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  }, []);

  const goNext = useCallback(async () => {
    if (submission.status === "loading" || !validateStep(step)) {
      return;
    }

    trackEvent({
      name: "step_completed",
      lpSlug: LP_SLUG,
      properties: { step },
    });

    if (step === "valor") {
      await submit();
      return;
    }

    // Captura antecipada: não bloqueia a tela. Uma falha aqui não impede o
    // cliente de seguir — o envio da etapa `valor` traz todos os dados de
    // novo.
    void sendLead(buildPayload("dados"));

    goToStep(getNextStep(step));
  }, [buildPayload, goToStep, step, submission.status, submit, validateStep]);

  const goBack = useCallback(() => {
    if (isFirstStep(step) || submission.status === "loading") {
      return;
    }

    goToStep(getPreviousStep(step));
  }, [goToStep, step, submission.status]);

  return {
    form,
    errors,

    step,
    progress: getProgressPercentage(step),
    canGoBack: !isFirstStep(step),
    goNext,
    goBack,

    estimate,

    submission,
  };
}
