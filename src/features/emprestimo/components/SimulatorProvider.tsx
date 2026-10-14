"use client";

import type { ReactNode } from "react";

import { useSimulator } from "../hooks/useSimulator";
import { SimulatorContext } from "../hooks/useSimulatorContext";

type SimulatorProviderProps = {
  children: ReactNode;
};

/**
 * Fronteira de cliente do simulador.
 *
 * O `page.tsx` permanece Server Component: apenas esta árvore precisa de
 * estado e interatividade.
 */
export function SimulatorProvider({ children }: SimulatorProviderProps) {
  const controller = useSimulator();

  return (
    <SimulatorContext.Provider value={controller}>
      {children}
    </SimulatorContext.Provider>
  );
}
