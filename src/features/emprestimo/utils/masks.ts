/**
 * Máscaras de entrada — funções puras e compartilhadas.
 *
 * São a única implementação de formatação do projeto: nenhum componente deve
 * recortar strings por conta própria. Herdadas do ProjetoBV; o telefone foi
 * adaptado para exibir o código do país (+55).
 */

/** Mantém apenas dígitos. */
export function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

/** `123.456.789-01` */
export function maskCpf(value: string): string {
  const digits = digitsOnly(value).slice(0, 11);

  return digits
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d{1,2})$/, ".$1-$2");
}

const PHONE_COUNTRY_PREFIX = "+55";

/**
 * Dígitos nacionais do telefone (DDD + número), sem o código do país.
 *
 * O `+55` exibido pela máscara é retirado antes da leitura. Um número colado
 * com o código do país sem o `+` (`5512999998888`) também é reconhecido pelo
 * tamanho: só passa de 11 dígitos quando traz o 55 na frente. Isso preserva
 * o DDD 55 (RS), que tem 11 dígitos sem o código do país.
 */
export function toNationalPhoneDigits(value: string): string {
  const trimmed = value.trimStart();
  const withoutPrefix = trimmed.startsWith(PHONE_COUNTRY_PREFIX)
    ? trimmed.slice(PHONE_COUNTRY_PREFIX.length)
    : trimmed;

  let digits = digitsOnly(withoutPrefix);

  if (digits.length > 11 && digits.startsWith("55")) {
    digits = digits.slice(2);
  }

  return digits.slice(0, 11);
}

/** `+55 (12) 99999-8888` */
export function maskPhone(value: string): string {
  const digits = toNationalPhoneDigits(value);

  if (!digits) {
    return "";
  }

  let masked = `${PHONE_COUNTRY_PREFIX} (${digits.slice(0, 2)}`;

  if (digits.length > 2) {
    masked += `) ${digits.slice(2, 7)}`;
  }

  if (digits.length > 7) {
    masked += `-${digits.slice(7, 11)}`;
  }

  return masked;
}

/** Telefone no formato E.164 (`+5512999998888`), usado no envio. */
export function toE164Phone(value: string): string {
  return `${PHONE_COUNTRY_PREFIX}${toNationalPhoneDigits(value)}`;
}

/** Ano com quatro dígitos. */
export function maskYear(value: string): string {
  return digitsOnly(value).slice(0, 4);
}

/* -------------------------------------------------------------------------
 * Normalização de campos de texto
 *
 * Não são máscaras de formato (como CPF), e sim filtros de entrada: barram
 * na digitação o que aquele campo nunca aceita — dígito em nome, espaço em
 * e-mail. Reduzem erro de preenchimento e fazem o dado chegar limpo ao CRM.
 * ---------------------------------------------------------------------- */

/** Colapsa espaços repetidos e remove o espaço inicial. */
function collapseSpaces(value: string): string {
  return value.replace(/ {2,}/g, " ").replace(/^ +/, "");
}

/** Nome de pessoa: letras acentuadas, espaço, apóstrofo e hífen. */
export function maskName(value: string): string {
  return collapseSpaces(value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ '-]/g, "")).slice(
    0,
    80,
  );
}

/** E-mail: caixa baixa e sem espaços. */
export function maskEmail(value: string): string {
  return value.toLowerCase().replace(/\s/g, "").slice(0, 120);
}

/** Modelo de veículo: letras, dígitos e separadores. */
export function maskVehicleText(value: string): string {
  return collapseSpaces(
    value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ0-9 './-]/g, ""),
  ).slice(0, 40);
}

/**
 * Teto de caracteres de cada máscara, já no formato exibido.
 *
 * A máscara sozinha garante o corte; o `maxLength` do input existe para o
 * navegador conhecer o limite (autofill e leitores de tela). O telefone fica
 * com folga para aceitar a colagem de números com espaços antes da máscara.
 */
export const MASK_MAX_LENGTH: ReadonlyMap<(value: string) => string, number> =
  new Map([
    [maskCpf, 14], // 529.982.247-25
    [maskPhone, 24], // +55 (12) 99999-8888
    [maskYear, 4],
    [maskName, 80],
    [maskEmail, 120],
    [maskVehicleText, 40],
  ]);
