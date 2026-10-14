import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { SimulatorSidePanel } from "./SimulatorSidePanel";
import { SimulatorTopbar } from "./SimulatorTopbar";

type AppFrameProps = {
  /** Centraliza o conteúdo nos dois eixos (página de obrigado). */
  centered?: boolean;
  children: ReactNode;
  /** Barra de progresso, encaixada logo abaixo da topbar. */
  progress: ReactNode;
};

/**
 * Moldura comum às páginas da LP: painel lateral (desktop), topbar,
 * progresso e a coluna de conteúdo.
 *
 * Fica no servidor: o painel e a topbar são estáticos. Só o que vai dentro
 * (`progress` e `children`) decide se precisa de interatividade.
 *
 * O `<main>` é apenas o marco semântico e não faz layout: extensões de
 * navegador e scripts de terceiros costumam injetar CSS para elementos (como
 * o `main { display: block }` do normalize.css). Por isso a distribuição na
 * tela fica no `div.app-main`, que nenhum desses estilos atinge.
 */
export function AppFrame({ centered = false, children, progress }: AppFrameProps) {
  return (
    <div className="app-shell">
      <SimulatorSidePanel />

      <div className="app-content">
        <SimulatorTopbar />
        {progress}

        <div className={cn("app-main", centered && "app-main-centered")}>
          <main className="app-main-body">{children}</main>
        </div>
      </div>
    </div>
  );
}
