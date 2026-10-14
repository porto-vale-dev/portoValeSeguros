"use client";

import * as SelectPrimitive from "@radix-ui/react-select";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { useFieldControl } from "./field";

/** Raiz do Design System na página (ver `styles/tokens.css`). */
const DS_ROOT_SELECTOR = ".pv-root";

export type SelectOption = {
  /** Opção fora da faixa permitida: visível, porém não escolhível. */
  disabled?: boolean;
  label: string;
  /**
   * Texto do gatilho quando o rótulo da lista é descritivo demais para caber
   * em uma linha ("SSP" no lugar de "SSP — Secretaria de Segurança Pública").
   */
  shortLabel?: string;
  value: string;
};

export type SelectProps = {
  "aria-label"?: string;
  /**
   * Liga o controle ao `Field` que o envolve. Desligue quando o select vive
   * dentro de outro componente (o mês/ano do calendário, por exemplo): sem
   * isso, ele herdaria o `id` do campo externo e o duplicaria.
   */
  bindToField?: boolean;
  className?: string;
  disabled?: boolean;
  name?: string;
  onChange: (value: string) => void;
  options: readonly SelectOption[];
  /** Texto exibido enquanto nada foi escolhido. */
  placeholder?: string;
  value: string;
};

/**
 * Select do Design System sobre o primitivo do Radix.
 *
 * A lista nativa do sistema operacional não aceita estilo; aqui o menu é
 * renderizado pela biblioteca, com os tokens do projeto e o comportamento
 * acessível (teclado, leitor de tela, foco) vindo dela.
 */
export function Select({
  "aria-label": ariaLabel,
  bindToField = true,
  className,
  disabled = false,
  name,
  onChange,
  options,
  placeholder = "Selecione",
  value,
}: SelectProps) {
  const fieldControl = useFieldControl();
  const fieldProps = bindToField ? fieldControl : {};
  const selected = options.find((option) => option.value === value);

  // A lista abre num portal. Por padrão ele vai para o `<body>`, fora da raiz
  // do Design System — e longe das fontes e da tipografia base, que ficam na
  // raiz porque o `<html>` e o `<body>` pertencem ao layout do site.
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null,
  );

  useEffect(() => {
    setPortalContainer(
      triggerRef.current?.closest<HTMLElement>(DS_ROOT_SELECTOR) ?? null,
    );
  }, []);

  return (
    <SelectPrimitive.Root
      disabled={disabled}
      name={name}
      onValueChange={onChange}
      // Sempre controlado: passar `undefined` quando vazio faria o componente
      // alternar de não controlado para controlado e o React reclamaria.
      // O Radix já exibe o `placeholder` quando o valor é "".
      value={value}
    >
      <SelectPrimitive.Trigger
        aria-label={ariaLabel}
        className={cn("pv-control", "pv-select-trigger", className)}
        ref={triggerRef}
        {...fieldProps}
      >
        {/*
          O Radix ignora estes filhos enquanto nada foi escolhido e exibe o
          `placeholder` — por isso a versão curta pode ser passada sempre.
        */}
        <SelectPrimitive.Value placeholder={placeholder}>
          <span className="pv-select-value">
            {selected ? (selected.shortLabel ?? selected.label) : null}
          </span>
        </SelectPrimitive.Value>
        <SelectPrimitive.Icon className="pv-select-icon">
          <ChevronIcon />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal container={portalContainer}>
        <SelectPrimitive.Content
          className="pv-select-content"
          position="popper"
          sideOffset={6}
        >
          <SelectPrimitive.ScrollUpButton className="pv-select-scroll">
            ▲
          </SelectPrimitive.ScrollUpButton>

          <SelectPrimitive.Viewport className="pv-select-viewport">
            {options.map((option) => (
              <SelectPrimitive.Item
                className="pv-select-item"
                disabled={option.disabled}
                key={option.value}
                value={option.value}
              >
                <SelectPrimitive.ItemText>
                  {option.label}
                </SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="pv-select-indicator">
                  ✓
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>

          <SelectPrimitive.ScrollDownButton className="pv-select-scroll">
            ▼
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}

function ChevronIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="8"
      stroke="currentColor"
      strokeWidth="1.6"
      viewBox="0 0 12 8"
      width="12"
    >
      <path d="M1 1l5 5 5-5" />
    </svg>
  );
}
