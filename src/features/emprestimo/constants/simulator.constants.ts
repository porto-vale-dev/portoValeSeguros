import type { StepDefinition } from "../types/simulator.types";

/**
 * Configuração central do fluxo. A navegação e o progresso derivam destas
 * listas.
 */

/** Identificador da LP, enviado ao n8n e em todos os eventos de tracking. */
export const LP_SLUG = "simulador-emprestimo";

export const SIMULATION_STEPS: readonly StepDefinition[] = [
  { id: "dados", label: "Seus dados" },
  { id: "valor", label: "Valor do empréstimo" },
] as const;

export const TOTAL_STEPS = SIMULATION_STEPS.length;

/** Rota da LP no site. */
export const LP_PATH = "/emprestimo";

/** Rota exibida depois do envio. */
export const THANK_YOU_PATH = "/emprestimo/obrigado";

/* -------------------------------------------------------------------------
 * Parâmetros da oferta
 * ---------------------------------------------------------------------- */

export const CREDIT_MIN = 5000;
export const CREDIT_MAX = 300000;
export const CREDIT_STEP = 1000;
export const CREDIT_DEFAULT = 30000;

/**
 * Prazo usado na parcela estimada. É o maior prazo oferecido, então a
 * parcela exibida é a menor possível ("a partir de").
 */
export const REFERENCE_TERM_MONTHS = 72;

/**
 * Taxa mensal ilustrativa (2,01% a.m.), herdada do ProjetoBV.
 * Precisa de validação do responsável financeiro antes de produção.
 */
export const MONTHLY_RATE = 0.0201;

/* -------------------------------------------------------------------------
 * Opções de formulário
 * ---------------------------------------------------------------------- */

export const CREDIT_RESTRICTION_OPTIONS = [
  { value: "sim", label: "Sim" },
  { value: "nao", label: "Não" },
] as const;

/** Ano mais antigo aceito para o veículo — barra apenas digitação inválida. */
export const VEHICLE_YEAR_MIN = 1950;

/* -------------------------------------------------------------------------
 * Integração
 * ---------------------------------------------------------------------- */

/** Tempo máximo de espera pela resposta do n8n. */
export const LEAD_REQUEST_TIMEOUT_MS = 15000;
