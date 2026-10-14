"use client";

import { useEffect } from "react";

import { trackEvent } from "@/features/emprestimo/tracking";

import { LP_SLUG } from "../constants/simulator.constants";
import { consumeLeadSent } from "../utils/lead-session";

/**
 * Registra a conversão na página de obrigado.
 *
 * Só dispara quando a página foi aberta logo após um envio bem-sucedido:
 * recarregar ou acessar a URL direto não conta um novo lead.
 */
export function LeadCompletedTracker() {
  useEffect(() => {
    if (consumeLeadSent()) {
      trackEvent({ name: "lead_completed", lpSlug: LP_SLUG });
    }
  }, []);

  return null;
}
