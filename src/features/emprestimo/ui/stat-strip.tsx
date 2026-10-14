import { cn } from "@/lib/utils";

export type StatItem = {
  label: string;
  value: string;
};

type StatStripProps = {
  className?: string;
  items: readonly StatItem[];
};

/**
 * Faixa horizontal de indicadores, dividida por bordas internas.
 * Vira coluna abaixo de 481px.
 *
 * A ordem `dt` (rótulo) antes de `dd` (valor) atende a especificacao e e
 * também a ordem visual.
 */
export function StatStrip({ className, items }: StatStripProps) {
  return (
    <dl className={cn("pv-stat-strip", className)}>
      {items.map((item) => (
        <div className="pv-stat-strip-item" key={item.label}>
          <dt className="pv-stat-strip-label">{item.label}</dt>
          <dd className="pv-stat-strip-value">{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
