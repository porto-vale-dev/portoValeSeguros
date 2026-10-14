import { z, type ZodType } from "zod";

import { CREDIT_DEFAULT } from "../constants/simulator.constants";
import type { SimulatorStep } from "../types/simulator.types";

import { leadSchema, leadShape } from "./lead.schema";
import { offerSchema, offerShape } from "./offer.schema";

/**
 * Composição de todos os campos do formulário.
 *
 * Serve para DERIVAR O TIPO `SimulatorFormValues`. A validação acontece por
 * etapa (`STEP_SCHEMAS`): cada schema descreve apenas os campos da sua
 * etapa, então os demais não geram erro.
 */
export const simulatorFormSchema = z.object({
  ...leadShape,
  ...offerShape,
});

export type SimulatorFormValues = z.infer<typeof simulatorFormSchema>;

/** Schema aplicado ao avançar cada etapa. */
export const STEP_SCHEMAS: Readonly<Record<SimulatorStep, ZodType<unknown>>> = {
  dados: leadSchema,
  valor: offerSchema,
};

/** Valores iniciais do formulário. */
export const SIMULATOR_DEFAULT_VALUES: SimulatorFormValues = {
  fullName: "",
  email: "",
  phone: "",
  creditRestriction: "",
  vehicleYear: "",
  vehicleModel: "",
  cpf: "",
  acceptPrivacy: false,
  website: "",

  creditAmount: CREDIT_DEFAULT,
};

export { leadSchema, offerSchema };
