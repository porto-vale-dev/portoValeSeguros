import {
  MONTHLY_RATE,
  REFERENCE_TERM_MONTHS,
} from "../constants/simulator.constants";
import type { InstallmentEstimate } from "../types/simulator.types";

/**
 * Cálculo da parcela pela Tabela Price.
 *
 * Função pura, sem dependência de React: é a fonte de verdade do valor
 * exibido na oferta.
 *
 *   factor  = (1 + i) ^ n
 *   parcela = principal * (i * factor) / (factor - 1)
 *
 * A taxa e o prazo vêm de `constants/simulator.constants.ts`. O resultado é
 * uma estimativa: a LP avisa que a simulação é ilustrativa e sujeita a
 * análise de crédito.
 */

export type InstallmentInput = {
  /** Valor do crédito solicitado. */
  principal: number;
  /** Quantidade de parcelas. */
  months: number;
  /** Taxa de juros mensal em decimal (0.0189 = 1,89% a.m.). */
  monthlyRate: number;
};

export function calculateInstallment({
  principal,
  months,
  monthlyRate,
}: InstallmentInput): number {
  if (principal <= 0 || months <= 0) {
    return 0;
  }

  // Sem juros a divisão é direta; a fórmula da Price geraria divisão por zero.
  if (monthlyRate <= 0) {
    return principal / months;
  }

  const factor = (1 + monthlyRate) ** months;

  return (principal * (monthlyRate * factor)) / (factor - 1);
}

/**
 * Parcela estimada exibida na LP: o maior prazo oferecido, que resulta na
 * menor parcela ("a partir de").
 */
export function estimateInstallment(creditAmount: number): InstallmentEstimate {
  return {
    creditAmount,
    installment: calculateInstallment({
      principal: creditAmount,
      months: REFERENCE_TERM_MONTHS,
      monthlyRate: MONTHLY_RATE,
    }),
    termMonths: REFERENCE_TERM_MONTHS,
    monthlyRate: MONTHLY_RATE,
  };
}
