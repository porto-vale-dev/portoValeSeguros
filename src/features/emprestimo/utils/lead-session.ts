import { readSession, removeSession, writeSession } from "./browser-storage";

const LEAD_SENT_KEY = "pv-simulador-lead-enviado";

/** Identificador da jornada, compartilhado pelos envios das duas etapas. */
export function createSessionId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/** Marca que o envio final aconteceu, para a página de obrigado. */
export function markLeadSent(): void {
  writeSession(LEAD_SENT_KEY, "1");
}

/**
 * Lê e apaga a marca de envio.
 *
 * A conversão só é contada uma vez: recarregar a página de obrigado ou
 * acessá-la direto pela URL não dispara um novo `Lead`.
 */
export function consumeLeadSent(): boolean {
  const sent = readSession(LEAD_SENT_KEY) === "1";

  if (sent) {
    removeSession(LEAD_SENT_KEY);
  }

  return sent;
}
