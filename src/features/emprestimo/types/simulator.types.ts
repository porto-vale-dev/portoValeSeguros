/**
 * Tipos do simulador de empréstimo com garantia de veículo.
 *
 * As etapas são identificadas por nome, nunca por índice solto.
 */

/** Etapas do fluxo, na ordem em que aparecem. */
export type SimulatorStep = "dados" | "valor";

export type StepDefinition = {
  id: SimulatorStep;
  /** Título curto da etapa, usado em eventos e rótulos acessíveis. */
  label: string;
};

/** Estado do envio do lead. */
export type SubmissionState = {
  status: "idle" | "loading" | "error";
  message?: string;
};

/** Parcela estimada a partir do valor de interesse. */
export type InstallmentEstimate = {
  creditAmount: number;
  installment: number;
  termMonths: number;
  monthlyRate: number;
};

/** Origem do acesso, capturada da URL de entrada. */
export type Attribution = {
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmContent: string;
  utmTerm: string;
  gclid: string;
  fbclid: string;
};

/**
 * Contrato enviado ao webhook do n8n.
 *
 * As chaves estão em português porque são consumidas pelo fluxo do n8n, que
 * as mapeia para as colunas do PostgreSQL e para o corpo do C2S.
 *
 * - `etapa: "dados"`: enviado ao concluir a etapa 1, sem esperar resposta.
 *   Garante o lead no banco mesmo que o cliente abandone o slider.
 * - `etapa: "valor"`: enviado ao concluir a etapa 2, com todos os dados de
 *   novo e a simulação. É o envio que cria o lead no C2S.
 *
 * `sessaoId` é o mesmo nas duas etapas e identifica a jornada no n8n.
 */
export type LeadPayload = {
  etapa: SimulatorStep;
  sessaoId: string;
  lpSlug: string;
  enviadoEm: string;
  lead: {
    nome: string;
    email: string;
    /** E.164: `+5512999998888`. */
    telefone: string;
    /** Somente dígitos. */
    cpf: string;
    possuiRestricaoSpcSerasa: boolean;
    veiculoAno: number;
    veiculoModelo: string;
    aceitePrivacidade: boolean;
  };
  /** Presente apenas na etapa `valor`. */
  simulacao: {
    valorInteresse: number;
    parcelaEstimada: number;
    prazoMeses: number;
    taxaMensal: number;
  } | null;
  origem: Attribution & {
    pagina: string;
    referrer: string;
    dispositivo: "mobile" | "desktop";
  };
  /** Campo isca contra robôs: preenchido, o n8n descarta o envio. */
  website: string;
};
