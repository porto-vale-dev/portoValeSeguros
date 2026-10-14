import { z } from "zod";

/**
 * Validadores de campo reaproveitados pelos schemas das etapas.
 *
 * Os campos de seleção ficam como `string` (e não `enum`) porque o valor
 * inicial do formulário é vazio; a pertinência à lista é checada por
 * refinamento.
 */

/** Texto obrigatório com tamanho mínimo. */
export function requiredText(message: string, min = 2) {
  return z.string().trim().min(min, message);
}

/** Escolha obrigatória dentro de uma lista fechada. */
export function requiredOption(message: string, allowed: readonly string[]) {
  return z
    .string()
    .min(1, message)
    .refine((value) => allowed.includes(value), message);
}

/** Exige nome e sobrenome. */
const FULL_NAME_PATTERN = /^\S+(\s+\S+)+$/;

/** Nome completo: mínimo de 4 caracteres e ao menos duas palavras. */
export function fullNameField(message: string) {
  return z
    .string()
    .trim()
    .min(4, message)
    .regex(FULL_NAME_PATTERN, "Informe nome e sobrenome.");
}

/** E-mail obrigatório e em formato válido. */
export function emailField(message: string) {
  return z
    .string()
    .min(1, message)
    .refine(
      (value) => z.string().email().safeParse(value).success,
      "Informe um e-mail válido.",
    );
}
