import { z } from "zod";

import { CREDIT_RESTRICTION_OPTIONS } from "../constants/simulator.constants";
import {
  isValidCpf,
  isValidMobilePhone,
  isValidVehicleYear,
} from "../domain/document-validation";

import {
  emailField,
  fullNameField,
  requiredOption,
  requiredText,
} from "./fields";

/** Etapa `dados` — identificação, contato, veículo e consentimento. */
export const leadShape = {
  fullName: fullNameField("Informe seu nome completo."),

  email: emailField("Informe seu e-mail."),

  phone: z
    .string()
    .min(1, "Informe seu celular.")
    .refine(isValidMobilePhone, "Informe um celular com DDD."),

  creditRestriction: requiredOption(
    "Selecione uma opção.",
    CREDIT_RESTRICTION_OPTIONS.map((option) => option.value),
  ),

  vehicleYear: z
    .string()
    .min(1, "Informe o ano.")
    .refine((value) => isValidVehicleYear(value), "Informe um ano válido."),

  vehicleModel: requiredText("Informe o modelo do veículo."),

  cpf: z
    .string()
    .min(1, "Informe seu CPF.")
    .refine(isValidCpf, "Informe um CPF válido."),

  acceptPrivacy: z
    .boolean()
    .refine(
      (accepted) => accepted,
      "Para continuar, aceite a Política de Privacidade.",
    ),

  /**
   * Campo isca contra robôs. Não é validado aqui: o n8n descarta o envio
   * quando ele chega preenchido, sem dar pista ao robô.
   */
  website: z.string(),
};

export const leadSchema = z.object(leadShape);
