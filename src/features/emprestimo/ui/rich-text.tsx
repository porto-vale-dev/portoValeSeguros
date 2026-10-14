import type { ReactNode } from "react";

/**
 * Segmento de texto com enfase opcional.
 *
 * Permite que o conteúdo centralizado (`simulator-content.ts`) descreva um
 * título com trecho em destaque sem recorrer a HTML embutido: a enfase vira
 * um `<em>`, que o Design System renderiza em Lora italico.
 */
export type TextSegment = {
  /** Trecho em destaque. */
  em?: boolean;
  text: string;
};

type RichTextProps = {
  segments: readonly TextSegment[];
};

export function RichText({ segments }: RichTextProps): ReactNode {
  return segments.map((segment, index) =>
    segment.em ? (
      // O índice serve de chave porque os segmentos são conteúdo estático.
      <em key={index}>{segment.text}</em>
    ) : (
      <span key={index}>{segment.text}</span>
    ),
  );
}

/** Junta os segmentos em texto puro, para `title`, `aria-label` ou metadata. */
export function segmentsToText(segments: readonly TextSegment[]): string {
  return segments.map((segment) => segment.text).join("");
}
