import { VEHICLE_YEAR_MIN } from "../constants/simulator.constants";
import { digitsOnly, toNationalPhoneDigits } from "../utils/masks";

/**
 * Regras puras de validação de documento, contato e veículo.
 *
 * Ficam fora dos schemas para poderem ser testadas e reutilizadas: os schemas
 * Zod apenas as chamam.
 */

/** Valida CPF por dígito verificador (mesma regra do ProjetoBV). */
export function isValidCpf(value: string): boolean {
  const digits = digitsOnly(value);

  if (digits.length !== 11) {
    return false;
  }

  // Sequências repetidas passam no cálculo dos dígitos, mas não são CPFs.
  if (/^(\d)\1{10}$/.test(digits)) {
    return false;
  }

  const checkDigit = (length: number): number => {
    let sum = 0;

    for (let index = 0; index < length; index += 1) {
      sum += Number(digits[index]) * (length + 1 - index);
    }

    const remainder = (sum * 10) % 11;

    return remainder === 10 ? 0 : remainder;
  };

  return (
    checkDigit(9) === Number(digits[9]) && checkDigit(10) === Number(digits[10])
  );
}

/**
 * Celular brasileiro: DDD sem zero e número de nove dígitos começando em 9.
 *
 * O contato com o cliente é feito pelo WhatsApp, por isso telefone fixo não
 * é aceito.
 */
export function isValidMobilePhone(value: string): boolean {
  return /^[1-9]{2}9\d{8}$/.test(toNationalPhoneDigits(value));
}

/** Ano de fabricação plausível: de `VEHICLE_YEAR_MIN` até o próximo ano. */
export function isValidVehicleYear(
  value: string,
  reference: Date = new Date(),
): boolean {
  if (!/^\d{4}$/.test(value)) {
    return false;
  }

  const year = Number(value);

  // Modelos do ano seguinte já circulam a partir do segundo semestre.
  return year >= VEHICLE_YEAR_MIN && year <= reference.getFullYear() + 1;
}

/**
 * Placa brasileira, já normalizada por `maskPlate`: o padrão antigo
 * (`ABC1234`) ou o Mercosul (`ABC1D23`). Os dois diferem só no quinto
 * caractere, letra no Mercosul.
 */
export function isValidPlate(value: string): boolean {
  return /^[A-Z]{3}\d[A-Z0-9]\d{2}$/.test(value);
}
