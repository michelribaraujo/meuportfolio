/**
 * Disparo de eventos no GA4.
 *
 * Por que existe: o GA4 so conta sozinho o clique em link que sai do site, e
 * mesmo assim como um evento generico chamado `click`. Clique em `mailto:`
 * ele nao conta de jeito nenhum. Transformar isso em evento nomeado da para
 * fazer por regra no painel do Google, mas a regra fica invisivel para quem
 * le o repositorio e some se o Google mexer na interface. Aqui o evento
 * nasce ao lado do botao que o dispara e morre junto com ele.
 *
 * A funcao e silenciosa de proposito: bloqueador de anuncio ou consentimento
 * negado deixam `window.gtag` sem existir, e medicao nunca pode quebrar a
 * navegacao de quem esta lendo o site.
 */

export type EventoParams = Record<string, string | number | boolean>;

export function trackEvent(nome: string, params: EventoParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", nome, params);
}
