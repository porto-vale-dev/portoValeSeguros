"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as LabelPrimitive from "@radix-ui/react-label";
import { useId, type ReactNode } from "react";

import { cn } from "@/lib/utils";

export type CheckboxProps = {
  checked: boolean;
  className?: string;
  disabled?: boolean;
  id?: string;
  invalid?: boolean;
  name?: string;
  onCheckedChange: (checked: boolean) => void;
};

/**
 * Caixa de seleção do Design System sobre o primitivo do Radix.
 * O estado marcado e o foco vêm da biblioteca.
 */
export function Checkbox({
  checked,
  className,
  disabled = false,
  id,
  invalid = false,
  name,
  onCheckedChange,
}: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      aria-invalid={invalid || undefined}
      checked={checked}
      className={cn("pv-checkbox", className)}
      disabled={disabled}
      id={id}
      name={name}
      onCheckedChange={(state) => onCheckedChange(state === true)}
    >
      <CheckboxPrimitive.Indicator className="pv-checkbox-indicator">
        <CheckIcon />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export type CheckLineProps = Omit<CheckboxProps, "id"> & {
  children: ReactNode;
  /** Mensagem de erro exibida abaixo da linha. */
  error?: string;
  lineClassName?: string;
};

/**
 * Linha de consentimento: caixa de seleção + texto clicável.
 *
 * O texto usa o `Label` do Radix, que associa o clique ao controle mesmo
 * sendo ele um `button` com `role="checkbox"`.
 */
export function CheckLine({
  children,
  error,
  lineClassName,
  ...checkboxProps
}: CheckLineProps) {
  const generatedId = useId();
  const controlId = `${generatedId}-check`;
  const errorId = `${generatedId}-error`;

  return (
    <div className="pv-checkline-group">
      <div className={cn("pv-checkline", lineClassName)}>
        <Checkbox
          aria-describedby={error ? errorId : undefined}
          id={controlId}
          invalid={Boolean(error)}
          {...checkboxProps}
        />
        <LabelPrimitive.Root className="pv-checkline-text" htmlFor={controlId}>
          {children}
        </LabelPrimitive.Root>
      </div>
      {error ? (
        <span className="pv-field-error" id={errorId} role="alert">
          {error}
        </span>
      ) : null}
    </div>
  );
}

function CheckIcon() {
  return (
    <svg fill="none" height="12" viewBox="0 0 12 12" width="12">
      <path
        d="M1.5 6.5 4.5 9.5 10.5 2.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
