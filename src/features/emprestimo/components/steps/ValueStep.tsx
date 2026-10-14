"use client";

import { Controller } from "react-hook-form";

import { Divider, Slider } from "@/features/emprestimo/ui";

import {
  CREDIT_MAX,
  CREDIT_MIN,
  CREDIT_STEP,
} from "../../constants/simulator.constants";
import { simulatorContent } from "../../content/simulator-content";
import { useSimulatorContext } from "../../hooks/useSimulatorContext";
import { formatCurrency, formatCurrencyCompact } from "../../utils/currency";
import { StepLayout } from "../StepLayout";

/**
 * Etapa 2 — valor de interesse e parcela estimada.
 *
 * Versão enxuta da oferta do ProjetoBV: sem data da primeira parcela e sem
 * os cartões de prazo. A parcela exibida é a do maior prazo, recalculada a
 * cada movimento do slider.
 */
export function ValueStep() {
  const { errors, estimate, form, submission } = useSimulatorContext();
  const content = simulatorContent.valor;
  const sending = submission.status === "loading";

  return (
    <StepLayout
      actionLabel={sending ? content.sending : content.action}
      actionLoading={sending}
      error={submission.status === "error" ? submission.message : undefined}
      eyebrow={content.eyebrow}
      sub={content.sub}
      title={content.title}
    >
      <div className="offer-card">
        <Controller
          control={form.control}
          name="creditAmount"
          render={({ field }) => (
            <Slider
              disabled={sending}
              displayValue={formatCurrencyCompact(field.value)}
              error={errors.creditAmount?.message}
              label={content.sliderLabel}
              max={CREDIT_MAX}
              maxLabel={content.sliderMax}
              min={CREDIT_MIN}
              minLabel={content.sliderMin}
              onChange={field.onChange}
              step={CREDIT_STEP}
              value={field.value}
            />
          )}
        />

        <Divider />

        <div className="offer-price">
          <div className="offer-price-label">{content.installmentLabel}</div>
          <div className="offer-price-value">
            {formatCurrency(estimate.installment)}
          </div>
          <div className="offer-price-caption">{content.perMonth}</div>
        </div>
      </div>

      <p className="pv-caption">{content.caption}</p>
    </StepLayout>
  );
}
