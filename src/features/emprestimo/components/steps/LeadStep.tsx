"use client";

import {
  Callout,
  FieldRow,
  HeadingCombo,
  RichText,
  StatStrip,
} from "@/features/emprestimo/ui";

import { CREDIT_RESTRICTION_OPTIONS } from "../../constants/simulator.constants";
import { simulatorContent } from "../../content/simulator-content";
import { useSimulatorContext } from "../../hooks/useSimulatorContext";
import {
  maskCpf,
  maskEmail,
  maskName,
  maskPhone,
  maskPlate,
  maskYear,
} from "../../utils/masks";
import { StepLayout } from "../StepLayout";
import { CheckboxField, SelectField, TextField } from "../fields";

/**
 * Etapa 1 — proposta de valor (mesmos textos da capa do ProjetoBV) e os
 * dados do lead. Todos os campos são obrigatórios.
 */
export function LeadStep() {
  const { form } = useSimulatorContext();
  const content = simulatorContent.dados;

  return (
    <StepLayout
      actionLabel={content.action}
      heading={
        <HeadingCombo level={1}>
          <RichText segments={content.title} />
        </HeadingCombo>
      }
      sub={content.sub}
    >
      <Callout icon="ⓘ" tone="blue">
        <strong>{content.callout.strong}</strong>
        {content.callout.text}
      </Callout>

      <StatStrip items={content.stats} />

      <div className="step-fields">
        <TextField
          autoComplete="name"
          label={content.fields.fullName}
          mask={maskName}
          name="fullName"
          placeholder={content.fields.fullNamePlaceholder}
        />

        <TextField
          autoComplete="email"
          inputMode="email"
          label={content.fields.email}
          mask={maskEmail}
          name="email"
          placeholder={content.fields.emailPlaceholder}
          type="email"
        />

        <TextField
          autoComplete="tel"
          inputMode="tel"
          label={content.fields.phone}
          mask={maskPhone}
          name="phone"
          placeholder={content.fields.phonePlaceholder}
          type="tel"
        />

        <SelectField
          label={content.fields.creditRestriction}
          name="creditRestriction"
          options={CREDIT_RESTRICTION_OPTIONS}
          placeholder={content.fields.creditRestrictionPlaceholder}
        />

        <FieldRow>
          <TextField
            autoComplete="off"
            inputMode="numeric"
            label={content.fields.vehicleYear}
            mask={maskYear}
            name="vehicleYear"
            placeholder={content.fields.vehicleYearPlaceholder}
          />
          <TextField
            autoCapitalize="characters"
            autoComplete="off"
            label={content.fields.vehiclePlate}
            mask={maskPlate}
            name="vehiclePlate"
            placeholder={content.fields.vehiclePlatePlaceholder}
            plate
            spellCheck={false}
          />
        </FieldRow>

        <TextField
          autoComplete="off"
          inputMode="numeric"
          label={content.fields.cpf}
          mask={maskCpf}
          name="cpf"
          placeholder={content.fields.cpfPlaceholder}
        />

        <CheckboxField name="acceptPrivacy">
          {content.privacy.before}
          <a
            className="consent-link"
            href={content.privacy.url}
            rel="noopener noreferrer"
            target="_blank"
          >
            {content.privacy.link}
          </a>
          {content.privacy.after}
        </CheckboxField>
      </div>

      {/* Isca contra robôs: invisível e fora da ordem de tabulação. */}
      <div aria-hidden="true" className="hp-field">
        <label>
          Website
          <input autoComplete="off" tabIndex={-1} {...form.register("website")} />
        </label>
      </div>
    </StepLayout>
  );
}
