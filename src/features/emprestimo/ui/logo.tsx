import Image from "next/image";

import { cn } from "@/lib/utils";

/** Proporção dos arquivos recortados (705 x 160). */
const ASPECT_RATIO = 705 / 160;

type LogoProps = {
  /**
   * Fundo em que o logo será exibido.
   * `claro` usa a tipografia em preto; `escuro`, em branco.
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
 * Logo Porto Vale Seguros.
 *
 * São os logos do site (`public/img/PortoSeguros_*.png`) recortados sem a
 * margem transparente, para alinhar com o texto. O símbolo é sempre ciano;
 * só a tipografia muda de cor conforme o fundo. Nenhum componente deve
 * referenciar esses arquivos diretamente.
 */
export function Logo({
  background = "claro",
  className,
  height = 24,
  label = "Porto Vale Seguros",
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
          ? "/img/emprestimo/logo-porto-vale-seguros-branco.png"
          : "/img/emprestimo/logo-porto-vale-seguros.png"
      }
      width={Math.round(height * ASPECT_RATIO)}
    />
  );
}
