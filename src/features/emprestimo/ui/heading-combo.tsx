import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type HeadingComboProps = {
  children: ReactNode;
  className?: string;
  /** Nível semântico do título. */
  level?: 1 | 2 | 3;
  /** Versao para fundos escuros. */
  inverse?: boolean;
};

/**
 * Titulo de destaque com o padrão Sora + Lora italico.
 * O trecho em enfase deve vir como `<em>` (ver `RichText`).
 */
export function HeadingCombo({
  children,
  className,
  inverse,
  level = 2,
}: HeadingComboProps) {
  const Title = `h${level}` as "h1" | "h2" | "h3";

  return (
    <Title
      className={cn(
        "pv-heading-combo",
        inverse && "pv-heading-combo-white",
        className,
      )}
    >
      {children}
    </Title>
  );
}
