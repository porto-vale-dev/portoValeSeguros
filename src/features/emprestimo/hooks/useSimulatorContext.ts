"use client";

import { createContext, useContext } from "react";

import type { SimulatorController } from "./useSimulator";

/**
 * Contexto do simulador.
 *
 * Evita repassar props por toda a árvore de etapas. O provedor está em
 * `components/SimulatorProvider.tsx`.
 */
export const SimulatorContext = createContext<SimulatorController | null>(null);

export function useSimulatorContext(): SimulatorController {
  const controller = useContext(SimulatorContext);

  if (!controller) {
    throw new Error(
      "useSimulatorContext precisa estar dentro de <SimulatorProvider>.",
    );
  }

  return controller;
}
