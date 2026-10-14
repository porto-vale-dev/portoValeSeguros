"use client";

import { createContext, useContext, useId, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type FieldContextValue = {
  controlId: string;
  describedBy?: string;
  invalid: boolean;
};

const FieldContext = createContext<FieldContextValue | null>(null);

/**
 * Atributos que um controle deve receber para ficar ligado ao rótulo, a dica
 * e a mensagem de erro do campo que o envolve. Componentes de controle
 * (`Input`, `Select`, ...) consomem isso automaticamente.
 */
export function useFieldControl() {
  const field = useContext(FieldContext);

  if (!field) {
    return {};
  }

  return {
    id: field.controlId,
    "aria-invalid": field.invalid || undefined,
    "aria-describedby": field.describedBy,
  } as const;
}

type FieldProps = {
  children: ReactNode;
  className?: string;
  /** Mensagem de erro de validação. Ativa o estado inválido do controle. */
  error?: string;
  /** Oculta o rótulo visualmente, mantendo-o para leitores de tela. */
  hideLabel?: boolean;
  /** Texto de apoio permanente. */
  hint?: ReactNode;
  /** Cor da dica: `success` para resultado de consulta encontrado. */
  hintTone?: "success";
  label: ReactNode;
  /** Marca o campo como opcional no rótulo. */
  optional?: boolean;
};

/**
 * Estrutura padrão de campo de formulário: rótulo, controle, dica e erro.
 *
 * O `id` do controle, o `aria-describedby` e o `aria-invalid` são gerados aqui
 * para que nenhuma etapa precise repetir essa ligação manualmente.
 */
export function Field({
  children,
  className,
  error,
  hideLabel = false,
  hint,
  hintTone,
  label,
  optional = false,
}: FieldProps) {
  const generatedId = useId();
  const controlId = `${generatedId}-control`;
  const hintId = `${generatedId}-hint`;
  const errorId = `${generatedId}-error`;

  const describedBy =
    [hint ? hintId : null, error ? errorId : null].filter(Boolean).join(" ") ||
    undefined;

  return (
    <FieldContext.Provider
      value={{ controlId, describedBy, invalid: Boolean(error) }}
    >
      <div className={cn("pv-field", className)}>
        <label
          className={cn("pv-field-label", hideLabel && "sr-only")}
          htmlFor={controlId}
        >
          {label}
          {optional ? (
            <span className="pv-field-optional"> (opcional)</span>
          ) : null}
        </label>

        {children}

        {hint ? (
          <span
            className={cn(
              "pv-field-hint",
              hintTone === "success" && "pv-field-hint-success",
            )}
            id={hintId}
          >
            {hint}
          </span>
        ) : null}

        {error ? (
          <span className="pv-field-error" id={errorId} role="alert">
            {error}
          </span>
        ) : null}
      </div>
    </FieldContext.Provider>
  );
}

type FieldNoteProps = {
  hint: ReactNode;
  label: ReactNode;
};

/**
 * Rotulo com texto de apoio, sem controle associado.
 *
 * Usado para introduzir um trecho do formulário. Não usa `<label>` de
 * proposito: não existe controle para rotular.
 */
export function FieldNote({ hint, label }: FieldNoteProps) {
  return (
    <div className="pv-field">
      <span className="pv-field-label">{label}</span>
      <span className="pv-field-hint">{hint}</span>
    </div>
  );
}

type FieldErrorProps = {
  message?: string;
};

/**
 * Mensagem de erro solta, para controles que não usam `Field`
 * (grupos de escolha, por exemplo).
 */
export function FieldError({ message }: FieldErrorProps) {
  if (!message) {
    return null;
  }

  return (
    <span className="pv-field-error" role="alert">
      {message}
    </span>
  );
}

type FieldRowProps = {
  children: ReactNode;
  className?: string;
  /** Colunas a partir de 481px. */
  columns?: 2 | 3;
};

/** Agrupa campos em colunas no desktop e em coluna única no mobile. */
export function FieldRow({ children, className, columns = 2 }: FieldRowProps) {
  return (
    <div
      className={cn(
        "pv-field-row",
        columns === 3 && "pv-field-row-3",
        className,
      )}
    >
      {children}
    </div>
  );
}
