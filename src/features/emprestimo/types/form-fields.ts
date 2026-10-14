import {
  SIMULATOR_DEFAULT_VALUES,
  type SimulatorFormValues,
} from "../schemas";

/**
 * Nomes de campo do formulário, derivados do schema.
 *
 * O formulário é plano de propósito: cada caminho de erro devolvido pelo Zod
 * corresponde a um campo de primeiro nível, o que permite converter o
 * caminho em nome tipado com uma checagem em tempo de execução.
 */
const FORM_FIELD_NAMES = new Set<string>(Object.keys(SIMULATOR_DEFAULT_VALUES));

export function isFormFieldName(
  value: string,
): value is keyof SimulatorFormValues {
  return FORM_FIELD_NAMES.has(value);
}

/** Campos de texto do formulário. */
export type StringFieldName = {
  [K in keyof SimulatorFormValues]: SimulatorFormValues[K] extends string
    ? K
    : never;
}[keyof SimulatorFormValues];

/** Campos booleanos do formulário. */
export type BooleanFieldName = {
  [K in keyof SimulatorFormValues]: SimulatorFormValues[K] extends boolean
    ? K
    : never;
}[keyof SimulatorFormValues];
