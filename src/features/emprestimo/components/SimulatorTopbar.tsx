import { Logo } from "@/features/emprestimo/ui";

import { simulatorContent } from "../content/simulator-content";

/** Barra superior com a marca. */
export function SimulatorTopbar() {
  return (
    <header className="app-topbar">
      <div className="app-logo">
        <Logo height={28} label={simulatorContent.brand.name} priority />
      </div>
    </header>
  );
}
