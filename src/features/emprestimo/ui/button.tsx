import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import { Spinner } from "./spinner";

/**
 * Unica fonte de verdade de botao do projeto.
 *
 * A aparencia vive em `src/styles/components.css` (`.pv-btn`). Aqui apenas
 * mapeamos props para variantes: não criar novos componentes de botao.
 *
 * O tamanho padrão não aplica classe: o preenchimento vem da própria
 * variante, como no Design System de referência.
 */
const buttonVariants = cva("pv-btn", {
  variants: {
    variant: {
      primary: "pv-btn-primary",
      secondary: "pv-btn-secondary",
      ghost: "pv-btn-ghost",
      dark: "pv-btn-dark",
      success: "pv-btn-success",
      danger: "pv-btn-danger",
      whatsapp: "pv-btn-whatsapp",
      /** Aparencia de link, para ações secundarias dentro do fluxo. */
      link: "pv-link-btn",
    },
    size: {
      sm: "pv-btn-sm",
      md: "",
      lg: "pv-btn-lg",
    },
    block: {
      true: "pv-btn-block",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    /** Renderiza no elemento filho (ex.: um link) preservando o estilo. */
    asChild?: boolean;
    /** Exibe spinner e bloqueia a ação para evitar duplo envio. */
    loading?: boolean;
  };

export function Button({
  asChild = false,
  block,
  children,
  className,
  disabled,
  loading = false,
  size,
  type = "button",
  variant,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size, block }), className);

  if (asChild) {
    return (
      <Slot className={classes} {...props}>
        {children}
      </Slot>
    );
  }

  return (
    <button
      aria-busy={loading || undefined}
      className={classes}
      disabled={disabled || loading}
      type={type}
      {...props}
    >
      {loading ? <Spinner /> : null}
      {children}
    </button>
  );
}
