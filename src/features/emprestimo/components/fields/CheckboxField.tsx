"use client";

import type { ReactNode } from "react";
import { Controller } from "react-hook-form";

import { CheckLine } from "@/features/emprestimo/ui";

import { useSimulatorContext } from "../../hooks/useSimulatorContext";
import type { BooleanFieldName } from "../../types/form-fields";

type CheckboxFieldProps = {
  children: ReactNode;
  name: BooleanFieldName;
};

/** Linha de marcação ligada a um campo booleano do formulário. */
export function CheckboxField({ children, name }: CheckboxFieldProps) {
  const { errors, form } = useSimulatorContext();

  return (
    <Controller
      control={form.control}
      name={name}
      render={({ field }) => (
        <CheckLine
          checked={field.value}
          error={errors[name]?.message}
          name={field.name}
          onCheckedChange={field.onChange}
        >
          {children}
        </CheckLine>
      )}
    />
  );
}
