/**
 * Captura, persiste e recupera parâmetros UTM da URL.
 *
 * Fluxo:
 *  1. captureUtms() — chamado no mount do formulário. Lê os UTMs da URL e
 *     grava no sessionStorage (não sobrescreve se já existir, preservando
 *     a fonte original da sessão).
 *  2. getUtms()    — chamado no submit. Lê o sessionStorage e retorna o
 *     objeto UTM para ser incluído no payload do Firestore/HubSpot.
 */

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

type UtmKey = (typeof UTM_KEYS)[number];
export type UtmParams = Partial<Record<UtmKey, string>>;

const SESSION_KEY = "mr_utms";

export function captureUtms(): void {
  if (typeof window === "undefined") return;

  // Não sobrescreve UTMs já capturados nesta sessão
  if (sessionStorage.getItem(SESSION_KEY)) return;

  const params = new URLSearchParams(window.location.search);
  const utms: UtmParams = {};

  for (const key of UTM_KEYS) {
    const val = params.get(key);
    if (val) utms[key] = val;
  }

  if (Object.keys(utms).length > 0) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(utms));
  }
}

export function getUtms(): UtmParams {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_KEY) ?? "{}") as UtmParams;
  } catch {
    return {};
  }
}
