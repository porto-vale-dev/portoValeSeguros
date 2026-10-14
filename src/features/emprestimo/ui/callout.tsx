import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

const calloutVariants = cva("pv-callout", {
  variants: {
    tone: {
      blue: "pv-callout-blue",
      cyan: "pv-callout-cyan",
      green: "pv-callout-green",
      danger: "pv-callout-danger",
    },
  },
  defaultVariants: {
    tone: "blue",
  },
});

export type CalloutProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof calloutVariants> & {
    /** Icone decorativo opcional. */
    icon?: ReactNode;
  };

/**
 * Bloco de apoio contextual. Para falha de integração use `tone="danger"`
 * com `role="alert"` no ponto de uso.
 */
export function Callout({
  children,
  className,
  icon,
  tone,
  ...props
}: CalloutProps) {
  return (
    <div className={cn(calloutVariants({ tone }), className)} {...props}>
      {icon ? (
        <span aria-hidden="true" className="pv-callout-icon">
          {icon}
        </span>
      ) : null}
      <span>{children}</span>
    </div>
  );
}
