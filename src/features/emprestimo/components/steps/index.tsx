"use client";

import type { SimulatorStep } from "../../types/simulator.types";

import { LeadStep } from "./LeadStep";
import { ValueStep } from "./ValueStep";

/**
 * Mapa de etapa para componente.
 *
 * O registro em um objeto tipado por `SimulatorStep` garante, em tempo de
 * compilação, que nenhuma etapa do fluxo fique sem tela.
 */
export const STEP_COMPONENTS: Readonly<
  Record<SimulatorStep, () => React.JSX.Element>
> = {
  dados: LeadStep,
  valor: ValueStep,
};
