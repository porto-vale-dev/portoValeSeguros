import { Logo } from "@/features/emprestimo/ui";

import { simulatorContent } from "../content/simulator-content";

/**
 * Painel institucional exibido apenas no desktop (>= 1024px).
 * É estático: o mesmo conteúdo em todas as etapas.
 */
export function SimulatorSidePanel() {
  const content = simulatorContent.sidePanel;

  return (
    <aside className="app-side-panel">
      <div className="app-side-panel-inner">
        <div className="app-side-logo">
          <Logo
            background="escuro"
            height={34}
            label={simulatorContent.brand.name}
          />
        </div>
        <h2 className="app-side-title">{content.title}</h2>
        <p className="app-side-text">{content.text}</p>

        <ul className="app-side-stats">
          {content.stats.map((stat) => (
            <li key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
