import Image from "next/image";

import { cn } from "@/lib/utils";

/** Proporção do arquivo original (2048 x 462). */
const ASPECT_RATIO = 2048 / 462;

type LogoProps = {
  /**
   * Fundo em que o logo será exibido.
   * `claro` usa a tipografia em navy; `escuro`, em branco.
   */
  background?: "claro" | "escuro";
  className?: string;
  /** Altura em pixels. A largura acompanha a proporção do arquivo. */
  height?: number;
  /** Nome acessível. Use `""` quando houver texto equivalente ao lado. */
  label?: string;
  /** Carrega sem lazy loading — o logo do topo aparece de imediato. */
  priority?: boolean;
};

/**
 * Logo Porto Vale — o mesmo do ProjetoBV.
 *
 * O símbolo é sempre ciano; só a tipografia muda de cor conforme o fundo,
 * por isso existem dois arquivos em `public/img/emprestimo`. Nenhum
 * componente deve referenciar esses arquivos diretamente.
 */
export function Logo({
  background = "claro",
  className,
  height = 24,
  label = "Porto Vale Crédito",
  priority = false,
}: LogoProps) {
  return (
    <Image
      alt={label}
      className={cn("pv-logo", className)}
      height={height}
      priority={priority}
      src={
        background === "escuro"
          ? "/img/emprestimo/porto-vale.svg"
          : "/img/emprestimo/porto-vale-escuro.svg"
      }
      width={Math.round(height * ASPECT_RATIO)}
    />
  );
}
