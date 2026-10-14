"use client";

import { Progress } from "@/features/emprestimo/ui";

import { simulatorContent } from "../content/simulator-content";
import { useSimulatorContext } from "../hooks/useSimulatorContext";

/** Barra de progresso do fluxo, ligada à etapa atual. */
export function SimulatorProgress() {
  const { progress } = useSimulatorContext();

  return <Progress label={simulatorContent.progressLabel} value={progress} />;
}
