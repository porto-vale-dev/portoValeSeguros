"use client";

import type { ReactNode } from "react";
import { Controller } from "react-hook-form";

import { Field, Select, type SelectOption } from "@/features/emprestimo/ui";

import { useSimulatorContext } from "../../hooks/useSimulatorContext";
import type { StringFieldName } from "../../types/form-fields";

type SelectFieldProps = {
  hint?: ReactNode;
  label: ReactNode;
  name: StringFieldName;
  options: readonly SelectOption[];
  placeholder?: string;
};

/**
 * Campo de seleção ligado ao formulário do simulador.
 *
 * Usa `Controller` porque o menu do Radix não é um `<select>` nativo: o valor
 * trafega pelo estado do React Hook Form, não pelo DOM.
 */
export function SelectField({
  hint,
  label,
  name,
  options,
  placeholder,
}: SelectFieldProps) {
  const { errors, form } = useSimulatorContext();

  return (
    <Field error={errors[name]?.message} hint={hint} label={label}>
      <Controller
        control={form.control}
        name={name}
        render={({ field }) => (
          <Select
            name={field.name}
            onChange={field.onChange}
            options={options}
            placeholder={placeholder}
            value={field.value}
          />
        )}
      />
    </Field>
  );
}
