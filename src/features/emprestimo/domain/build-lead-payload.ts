import { LP_SLUG } from "../constants/simulator.constants";
import type { SimulatorFormValues } from "../schemas";
import type {
  Attribution,
  InstallmentEstimate,
  LeadPayload,
  SimulatorStep,
} from "../types/simulator.types";
import { roundToCents } from "../utils/currency";
import { digitsOnly, toE164Phone } from "../utils/masks";

type BuildLeadPayloadInput = {
  attribution: Attribution;
  device: "mobile" | "desktop";
  /** Presente apenas no envio da etapa `valor`. */
  estimate: InstallmentEstimate | null;
  page: string;
  referrer: string;
  sessionId: string;
  step: SimulatorStep;
  values: SimulatorFormValues;
};

/**
 * Normalização do payload enviado ao n8n.
 *
 * Função pura: recebe o estado do formulário e devolve o contrato do
 * webhook, já limpo — CPF só com dígitos, telefone em E.164 e e-mail em
 * caixa baixa. O n8n não precisa repetir essa limpeza.
 */
export function buildLeadPayload({
  attribution,
  device,
  estimate,
  page,
  referrer,
  sessionId,
  step,
  values,
}: BuildLeadPayloadInput): LeadPayload {
  return {
    etapa: step,
    sessaoId: sessionId,
    lpSlug: LP_SLUG,
    enviadoEm: new Date().toISOString(),

    lead: {
      nome: values.fullName.trim(),
      email: values.email.trim().toLowerCase(),
      telefone: toE164Phone(values.phone),
      cpf: digitsOnly(values.cpf),
      possuiRestricaoSpcSerasa: values.creditRestriction === "sim",
      veiculoAno: Number(values.vehicleYear),
      veiculoPlaca: values.vehiclePlate,
      aceitePrivacidade: values.acceptPrivacy,
    },

    simulacao: estimate
      ? {
          valorInteresse: estimate.creditAmount,
          parcelaEstimada: roundToCents(estimate.installment),
          prazoMeses: estimate.termMonths,
          taxaMensal: estimate.monthlyRate,
        }
      : null,

    origem: {
      ...attribution,
      pagina: page,
      referrer,
      dispositivo: device,
    },

    website: values.website,
  };
}
