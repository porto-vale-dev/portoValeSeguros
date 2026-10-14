import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type AccordionProps = {
  children: ReactNode;
  className?: string;
};

/** Agrupa itens de sanfona. */
export function Accordion({ children, className }: AccordionProps) {
  return <div className={cn("pv-accordion", className)}>{children}</div>;
}

type AccordionItemProps = {
  children: ReactNode;
  className?: string;
  /**
   * Itens com o mesmo `group` abrem um de cada vez: o navegador fecha o
   * anterior ao abrir o próximo.
   */
  group?: string;
  title: ReactNode;
};

/**
 * Item de sanfona do Design System.
 *
 * Usa `<details>`/`<summary>` nativos: teclado, foco e leitor de tela vêm do
 * navegador, sem JavaScript e sem dependência nova. O conteúdo fechado
 * continua no HTML, o que mantém as respostas visíveis para buscadores.
 *
 * A linha pergunta + seta fica num `span` próprio, e não no `summary`: CSS
 * injetado por extensões (ex.: `summary { display: list-item }`) não
 * consegue quebrar a seta para a linha de baixo.
 */
export function AccordionItem({
  children,
  className,
  group,
  title,
}: AccordionItemProps) {
  return (
    <details className={cn("pv-accordion-item", className)} name={group}>
      <summary className="pv-accordion-trigger">
        <span className="pv-accordion-row">
          <span className="pv-accordion-title">{title}</span>
          <ChevronIcon />
        </span>
      </summary>
      <div className="pv-accordion-content">{children}</div>
    </details>
  );
}

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      className="pv-accordion-icon"
      fill="none"
      height="8"
      stroke="currentColor"
      strokeWidth="1.6"
      viewBox="0 0 12 8"
      width="12"
    >
      <path d="M1 1l5 5 5-5" />
    </svg>
  );
}
