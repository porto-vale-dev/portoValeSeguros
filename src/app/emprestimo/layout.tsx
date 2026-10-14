import type { Metadata } from "next";
import { Lora, Sora } from "next/font/google";
import type { ReactNode } from "react";

import { simulatorContent } from "@/features/emprestimo";
import { cn } from "@/lib/utils";

// Estilos da LP, na ordem da cascata do Design System:
// tokens -> base -> componentes -> feature. Carregados só nesta rota.
import "@/features/emprestimo/styles/tokens.css";
import "@/features/emprestimo/styles/base.css";
import "@/features/emprestimo/styles/components.css";
import "@/features/emprestimo/styles/simulator.css";

// Fontes do Design System da LP. Entram como variáveis CSS na raiz da LP e
// são consumidas por `--font-display` e `--font-serif` (`styles/tokens.css`).
const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: simulatorContent.meta.title,
  description: simulatorContent.meta.description,
};

/**
 * Layout da LP de empréstimo com garantia de veículo.
 *
 * O `<html>`, o `<body>` e o GTM vêm do layout raiz do site. Aqui só entra
 * o contêiner `.pv-root`, que delimita o Design System da LP: fontes, tokens
 * e reset não vazam para as demais páginas. O cabeçalho e o rodapé do site
 * ficam de fora de propósito — a LP mantém o layout próprio, focado na
 * conversão.
 */
export default function EmprestimoLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className={cn("pv-root", sora.variable, lora.variable)}>
      {children}
    </div>
  );
}
