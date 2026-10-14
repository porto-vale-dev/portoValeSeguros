import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const cardVariants = cva("pv-card", {
  variants: {
    variant: {
      default: "",
      dark: "pv-card-dark",
    },
    flush: {
      true: "pv-card-flush",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type CardProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

export function Card({ className, flush, variant, ...props }: CardProps) {
  return (
    <div className={cn(cardVariants({ variant, flush }), className)} {...props} />
  );
}

/** Titulo interno de card. */
export function CardTitle({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pv-card-title", className)} {...props} />;
}

/** Texto de apoio interno de card. */
export function CardBody({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("pv-card-body", className)} {...props} />;
}

/** Separador interno de card. */
export function Divider({ tight = false }: { tight?: boolean }) {
  return <hr className={cn("pv-divider", tight && "pv-divider-tight")} />;
}
