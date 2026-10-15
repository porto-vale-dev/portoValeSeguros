"use client";

import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { useFieldControl } from "./field";

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  /** Placa de veículo: caixa alta, negrito e espaçamento largo. */
  plate?: boolean;
};

/**
 * Campo de texto do Design System. Ligado automaticamente ao `Field` pai.
 *
 * No React 18 a `ref` só chega ao `<input>` via `forwardRef` — sem ela o
 * `register` do React Hook Form não consegue focar o campo com erro.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, plate, ...props },
  ref,
) {
  const fieldProps = useFieldControl();

  return (
    <input
      className={cn("pv-control", plate && "pv-control-plate", className)}
      ref={ref}
      {...fieldProps}
      {...props}
    />
  );
});
