import type { Attribution } from "../types/simulator.types";

import { readSession, writeSession } from "./browser-storage";

const STORAGE_KEY = "pv-simulador-origem";

const PARAMS: Readonly<Record<keyof Attribution, string>> = {
  utmSource: "utm_source",
  utmMedium: "utm_medium",
  utmCampaign: "utm_campaign",
  utmContent: "utm_content",
  utmTerm: "utm_term",
  gclid: "gclid",
  fbclid: "fbclid",
};

const EMPTY_ATTRIBUTION: Attribution = {
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  utmContent: "",
  utmTerm: "",
  gclid: "",
  fbclid: "",
};

function fromSearch(search: string): Attribution | null {
  const params = new URLSearchParams(search);
  const entries = Object.entries(PARAMS).map(([key, param]) => [
    key,
    (params.get(param) ?? "").trim().slice(0, 200),
  ]);

  return entries.some(([, value]) => value)
    ? { ...EMPTY_ATTRIBUTION, ...Object.fromEntries(entries) }
    : null;
}

/**
 * Origem do acesso (UTMs, gclid e fbclid).
 *
 * Vale a primeira URL da sessão que trouxe parâmetros: ela é guardada para
 * que um recarregamento sem a query string não apague a campanha de origem.
 */
export function getAttribution(): Attribution {
  if (typeof window === "undefined") {
    return EMPTY_ATTRIBUTION;
  }

  const stored = readSession(STORAGE_KEY);

  if (stored) {
    try {
      return { ...EMPTY_ATTRIBUTION, ...(JSON.parse(stored) as Attribution) };
    } catch {
      // Registro corrompido: segue para a leitura da URL.
    }
  }

  const current = fromSearch(window.location.search);

  if (current) {
    writeSession(STORAGE_KEY, JSON.stringify(current));
    return current;
  }

  return EMPTY_ATTRIBUTION;
}

/** Tipo de dispositivo, no vocabulário da coluna `dispositivo` do banco. */
export function getDeviceType(): "mobile" | "desktop" {
  if (typeof navigator === "undefined") {
    return "desktop";
  }

  return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
    ? "mobile"
    : "desktop";
}
