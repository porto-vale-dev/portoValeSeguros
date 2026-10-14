import { cn } from "@/lib/utils";

type SpinnerProps = {
  className?: string;
  /** Rotulo para leitores de tela quando o spinner aparece sozinho. */
  label?: string;
};

/** Indicador de carregamento. Herda a cor do contexto (`currentColor`). */
export function Spinner({ className, label }: SpinnerProps) {
  return (
    <>
      <span aria-hidden="true" className={cn("pv-spinner", className)} />
      {label ? <span className="sr-only">{label}</span> : null}
    </>
  );
}
