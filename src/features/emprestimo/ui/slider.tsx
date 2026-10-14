"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

export type SliderProps = {
  className?: string;
  disabled?: boolean;
  /** Valor formatado exibido em destaque acima do controle. */
  displayValue: string;
  /** Mensagem de erro de validação. */
  error?: string;
  /** Rótulo do controle. */
  label: string;
  max: number;
  /** Extremos da faixa, exibidos abaixo do controle. */
  maxLabel: string;
  min: number;
  minLabel: string;
  onChange: (value: number) => void;
  step: number;
  value: number;
};

/**
 * Controle de faixa do Design System sobre o primitivo do Radix.
 *
 * Substitui o `input[type=range]`, cuja trilha e cujo marcador exigem
 * pseudo-elementos diferentes por navegador. O bloco completo — rótulo,
 * valor em destaque, controle e extremos — fica encapsulado aqui.
 */
export function Slider({
  className,
  disabled = false,
  displayValue,
  error,
  label,
  max,
  maxLabel,
  min,
  minLabel,
  onChange,
  step,
  value,
}: SliderProps) {
  return (
    <div>
      <div className="pv-slider-label">{label}</div>
      <div className="pv-slider-value">{displayValue}</div>

      <SliderPrimitive.Root
        aria-label={label}
        className={cn("pv-slider", className)}
        disabled={disabled}
        max={max}
        min={min}
        onValueChange={([next]) => onChange(next)}
        step={step}
        value={[value]}
      >
        <SliderPrimitive.Track className="pv-slider-track">
          <SliderPrimitive.Range className="pv-slider-range-fill" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb className="pv-slider-thumb" />
      </SliderPrimitive.Root>

      <div className="pv-slider-range">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>

      {error ? (
        <span className="pv-field-error" role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}
