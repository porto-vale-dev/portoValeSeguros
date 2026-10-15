"use client";

import type { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";

import { Field, Input } from "@/features/emprestimo/ui";

import { useSimulatorContext } from "../../hooks/useSimulatorContext";
import type { StringFieldName } from "../../types/form-fields";
import { MASK_MAX_LENGTH } from "../../utils/masks";

type TextFieldProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "name" | "defaultValue"
> & {
  hint?: ReactNode;
  label: ReactNode;
  /** Formatador aplicado a cada digitação (CPF, telefone, ano...). */
  mask?: (value: string) => string;
  name: StringFieldName;
  /** Variante de placa do `Input`. */
  plate?: boolean;
};

/**
 * Campo de texto ligado ao formulário do simulador.
 *
 * Concentra a ligação com o React Hook Form, a máscara e a exibição do erro,
 * para que as etapas fiquem declarativas e não repitam esse encanamento.
 */
export function TextField({
  hint,
  label,
  mask,
  name,
  plate,
  ...inputProps
}: TextFieldProps) {
  const { errors, form } = useSimulatorContext();
  const registration = form.register(name);

  /* O teto vem da máscara; `maxLength` explícito ainda tem preferência. */
  const maxLength =
    inputProps.maxLength ?? (mask ? MASK_MAX_LENGTH.get(mask) : undefined);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (mask) {
      event.target.value = mask(event.target.value);
    }

    void registration.onChange(event);
  }

  return (
    <Field error={errors[name]?.message} hint={hint} label={label}>
      <Input
        {...registration}
        {...inputProps}
        maxLength={maxLength}
        onChange={handleChange}
        plate={plate}
      />
    </Field>
  );
}
