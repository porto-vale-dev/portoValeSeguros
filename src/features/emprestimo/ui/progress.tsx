import { cn } from "@/lib/utils";

type ProgressProps = {
  className?: string;
  /** Rotulo acessível da barra. */
  label: string;
  /** Progresso de 0 a 100. */
  value: number;
};

/** Barra de progresso fina, encaixada abaixo da topbar. */
export function Progress({ className, label, value }: ProgressProps) {
  const clamped = Math.min(100, Math.max(0, Math.round(value)));

  return (
    <div
      aria-label={label}
      aria-valuemax={100}
      aria-valuemin={0}
      aria-valuenow={clamped}
      className={cn("app-progress-track", className)}
      role="progressbar"
    >
      <div className="app-progress-fill" style={{ width: `${clamped}%` }} />
    </div>
  );
}
