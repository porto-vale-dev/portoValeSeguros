"use client";

import type { FormEvent, ReactNode } from "react";

import { Button, Callout } from "@/features/emprestimo/ui";
import { cn } from "@/lib/utils";

import { simulatorContent } from "../content/simulator-content";
import { useSimulatorContext } from "../hooks/useSimulatorContext";

type StepLayoutProps = {
  actionLabel: string;
  actionLoading?: boolean;
  /** Centraliza título e subtítulo. */
  centered?: boolean;
  children?: ReactNode;
  /** Erro geral da etapa, como falha de envio. */
  error?: string;
  /** Eyebrow numerado, ex.: `02 · SIMULAÇÃO`. */
  eyebrow?: string;
  /** Cabeçalho próprio, quando a etapa não usa `.step-title`. */
  heading?: ReactNode;
  sub?: string;
  title?: string;
};

/**
 * Moldura comum às etapas: cabeçalho, corpo e navegação.
 *
 * A etapa é um `<form>` com `noValidate`: a validação é a dos schemas Zod, e
 * o `submit` nativo (botão ou `Enter` num campo) cai no mesmo `goNext` do
 * controlador. A navegação vem do contexto — nenhuma etapa reimplementa
 * "voltar" ou "continuar".
 */
export function StepLayout({
  actionLabel,
  actionLoading = false,
  centered = false,
  children,
  error,
  eyebrow,
  heading,
  sub,
  title,
}: StepLayoutProps) {
  const { canGoBack, goBack, goNext } = useSimulatorContext();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void goNext();
  }

  return (
    <form
      className={cn("step", centered && "step-centered")}
      noValidate
      onSubmit={handleSubmit}
    >
      {eyebrow ? <span className="step-eyebrow">{eyebrow}</span> : null}

      {heading ?? (title ? <h1 className="step-title">{title}</h1> : null)}

      {sub ? <p className="step-sub">{sub}</p> : null}

      {children}

      {error ? (
        <Callout role="alert" tone="danger">
          {error}
        </Callout>
      ) : null}

      <div className="step-nav">
        {canGoBack ? (
          <Button
            aria-label={simulatorContent.navigation.backLabel}
            className="back-btn"
            disabled={actionLoading}
            onClick={goBack}
            variant="secondary"
          >
            {simulatorContent.navigation.back}
          </Button>
        ) : null}

        <Button loading={actionLoading} size="lg" type="submit">
          {actionLabel}
        </Button>
      </div>
    </form>
  );
}
