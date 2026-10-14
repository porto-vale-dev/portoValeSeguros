import { env } from "@/features/emprestimo/config/env";
import type { ServiceResult } from "@/features/emprestimo/types/service-result";

import { LEAD_REQUEST_TIMEOUT_MS } from "../constants/simulator.constants";
import { simulatorContent } from "../content/simulator-content";
import type { LeadPayload } from "../types/simulator.types";

/**
 * Envio do lead ao webhook do n8n.
 *
 * É o único ponto da LP que conhece a URL de integração. O n8n valida de
 * novo, grava no PostgreSQL e encaminha ao C2S; aqui o frontend apenas
 * envia o payload normalizado e reflete o resultado.
 */
export async function sendLead(
  payload: LeadPayload,
): Promise<ServiceResult<null>> {
  if (!env.leadWebhookUrl) {
    // Em `npm run dev` sem webhook configurado, o envio é simulado para que
    // o fluxo possa ser percorrido localmente. Em produção, falta de
    // configuração é erro: o lead nunca é dado como enviado sem ter saído.
    if (env.isDevelopment) {
      // Só a etapa: dados do lead nunca vão para o console.
      console.info(
        `[emprestimo] webhook não configurado — envio da etapa "${payload.etapa}" apenas simulado.`,
      );

      return { status: "success", data: null };
    }

    return { status: "error", message: simulatorContent.errors.notConfigured };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), LEAD_REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(env.leadWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    if (!response.ok) {
      return { status: "error", message: simulatorContent.errors.submit };
    }

    return { status: "success", data: null };
  } catch {
    return { status: "error", message: simulatorContent.errors.submit };
  } finally {
    clearTimeout(timeout);
  }
}
