/**
 * `dataLayer` criado pelo GTM do layout raiz do site. O código sempre o
 * inicializa antes de usar, porque o GTM pode ainda não ter carregado.
 */
export {};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}
