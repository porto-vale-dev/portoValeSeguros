"use client";

import type { ReactNode } from "react";

import { useSimulatorContext } from "../hooks/useSimulatorContext";

import { STEP_COMPONENTS } from "./steps";

type SimulatorShellProps = {
  /**
   * FAQ renderizado no servidor e exibido abaixo do formulário da primeira
   * etapa. Chega pronto como prop para continuar no HTML inicial.
   */
  faq?: ReactNode;
};

/**
 * Etapa atual do simulador e, na primeira etapa, o FAQ logo abaixo.
 *
 * Não contém cálculo nem regra de validação — apenas escolhe o que mostrar
 * a partir do controlador. O `Enter` para avançar vem do próprio `<form>` de
 * cada etapa (ver `StepLayout`).
 */
export function SimulatorShell({ faq }: SimulatorShellProps) {
  const { step } = useSimulatorContext();

  const CurrentStep = STEP_COMPONENTS[step];

  return (
    <>
      <CurrentStep />
      {step === "dados" ? faq : null}
    </>
  );
}
