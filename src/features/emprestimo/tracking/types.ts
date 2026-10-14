/**
 * Eventos semânticos da jornada. Nomes novos devem descrever o passo do
 * usuário, nunca o componente que disparou o evento.
 */
export type TrackingEventName =
  | "form_started"
  | "step_completed"
  | "lead_submitted"
  | "lead_submit_error"
  | "lead_completed";

export type TrackingValue = boolean | number | string | null;

export type TrackingEvent = {
  name: TrackingEventName;
  lpSlug: string;
  /**
   * Metadados do evento. Dados de lead são sensíveis: nunca inclua CPF, nome,
   * telefone, e-mail ou veículo aqui.
   */
  properties?: Record<string, TrackingValue>;
};
