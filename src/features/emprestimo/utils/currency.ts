/** Formatação monetária em pt-BR — fonte única de exibição de valores. */

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const compactFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const thousandsFormatter = new Intl.NumberFormat("pt-BR", {
  maximumFractionDigits: 1,
});

/** `R$ 1.234,56` */
export function formatCurrency(value: number): string {
  return currencyFormatter.format(value);
}

/** `R$ 1.235` — usado onde os centavos não agregam (valor do slider). */
export function formatCurrencyCompact(value: number): string {
  return compactFormatter.format(value);
}

/** `R$ 5 mil` — extremos da faixa do slider. */
export function formatCurrencyThousands(value: number): string {
  return `R$ ${thousandsFormatter.format(value / 1000)} mil`;
}

/** Arredonda para centavos, no formato numérico enviado ao n8n. */
export function roundToCents(value: number): number {
  return Math.round(value * 100) / 100;
}
