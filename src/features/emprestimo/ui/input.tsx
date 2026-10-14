"use client";

import { forwardRef, type InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { useFieldControl } from "./field";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

/**
 * Campo de texto do Design System. Ligado automaticamente ao `Field` pai.
 *
 * No React 18 a `ref` só chega ao `<input>` via `forwardRef` — sem ela o
 * `register` do React Hook Form não consegue focar o campo com erro.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { className, ...props },
  ref,
) {
  const fieldProps = useFieldControl();

  return (
    <input
      className={cn("pv-control", className)}
      ref={ref}
      {...fieldProps}
      {...props}
    />
  );
});
