import {
  SIMULATION_STEPS,
  TOTAL_STEPS,
} from "../constants/simulator.constants";
import type { SimulatorStep } from "../types/simulator.types";

/**
 * Regras puras de navegação do fluxo. Nenhum componente precisa saber o
 * índice de uma etapa: tudo é derivado de `SIMULATION_STEPS`.
 */

const STEP_INDEX = new Map<SimulatorStep, number>(
  SIMULATION_STEPS.map((step, index) => [step.id, index]),
);

export function getStepIndex(step: SimulatorStep): number {
  return STEP_INDEX.get(step) ?? 0;
}

export function isFirstStep(step: SimulatorStep): boolean {
  return getStepIndex(step) === 0;
}

export function isLastStep(step: SimulatorStep): boolean {
  return getStepIndex(step) === TOTAL_STEPS - 1;
}

export function getNextStep(step: SimulatorStep): SimulatorStep {
  return SIMULATION_STEPS[Math.min(getStepIndex(step) + 1, TOTAL_STEPS - 1)].id;
}

export function getPreviousStep(step: SimulatorStep): SimulatorStep {
  return SIMULATION_STEPS[Math.max(getStepIndex(step) - 1, 0)].id;
}

/**
 * Progresso de 0 a 100.
 *
 * A página de obrigado conta como uma posição a mais: as etapas ficam em
 * 1/3 e 2/3, e só a confirmação do envio enche a barra.
 */
export function getProgressPercentage(step: SimulatorStep): number {
  return ((getStepIndex(step) + 1) / (TOTAL_STEPS + 1)) * 100;
}
