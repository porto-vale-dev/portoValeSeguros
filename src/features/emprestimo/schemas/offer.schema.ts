import { z } from "zod";

import { CREDIT_MAX, CREDIT_MIN } from "../constants/simulator.constants";
import { formatCurrencyCompact } from "../utils/currency";

/** Etapa `valor` — valor de interesse escolhido no slider. */
export const offerShape = {
  creditAmount: z
    .number({
      invalid_type_error: "Informe o valor do crédito.",
      required_error: "Informe o valor do crédito.",
    })
    .min(CREDIT_MIN, `O valor mínimo é ${formatCurrencyCompact(CREDIT_MIN)}.`)
    .max(CREDIT_MAX, `O valor máximo é ${formatCurrencyCompact(CREDIT_MAX)}.`),
};

export const offerSchema = z.object(offerShape);
