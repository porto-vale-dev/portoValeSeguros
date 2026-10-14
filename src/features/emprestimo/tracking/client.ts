import type { TrackingEvent } from "./types";

/**
 * Publica um evento da jornada.
 *
 * O evento vai para o `dataLayer` do GTM que o site já carrega no layout
 * raiz; de lá o GTM o distribui para GA4, Google Ads e Pixel da Meta. Nenhum
 * pixel é disparado direto daqui, para a conversão não ser contada duas
 * vezes. O `dataLayer` funciona como fila: eventos publicados antes do GTM
 * carregar são processados quando ele chega.
 */
export function trackEvent({ lpSlug, name, properties }: TrackingEvent): void {
  if (typeof window === "undefined") {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push({ event: name, lp_slug: lpSlug, ...properties });
}
