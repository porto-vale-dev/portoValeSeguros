import type { Metadata } from "next";
import Link from "next/link";

import { Button, Progress } from "@/features/emprestimo/ui";
import {
  AppFrame,
  LeadCompletedTracker,
  LP_PATH,
  simulatorContent,
} from "@/features/emprestimo";

const content = simulatorContent.obrigado;

export const metadata: Metadata = {
  title: content.meta.title,
  // Página de conversão: não deve aparecer em buscadores.
  robots: { index: false, follow: false },
};

/**
 * Página exibida após o envio da simulação.
 *
 * Existe como rota própria para que GTM, Google Ads e Pixel possam medir a
 * conversão pela URL, além do evento `lead_completed` no `dataLayer`.
 */
export default function ObrigadoEmprestimoPage() {
  return (
    <AppFrame
      centered
      progress={<Progress label={simulatorContent.progressLabel} value={100} />}
    >
      <LeadCompletedTracker />

      <section className="step step-centered">
        <div aria-hidden="true" className="confirm-icon">
          {content.icon}
        </div>

        <h1 className="step-title">{content.title}</h1>
        <p className="step-sub">{content.sub}</p>

        <Button asChild block size="lg" variant="secondary">
          <Link href={LP_PATH}>{content.action}</Link>
        </Button>

        <p className="pv-caption">{content.caption}</p>
      </section>
    </AppFrame>
  );
}
