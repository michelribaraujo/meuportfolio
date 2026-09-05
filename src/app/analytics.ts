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

/** Dominio unico que pode alimentar a propriedade do GA4. */
const DOMINIO_DE_PRODUCAO = "mikhaelangelo.com.br";

/**
 * So mede em producao.
 *
 * Por que existe: a tag do Google fica no index.html, e o index.html tambem e
 * servido pelo `npm run dev`. Sem esta trava, toda sessao de desenvolvimento
 * em localhost manda page_view para a mesma propriedade, com o titulo que a
 * pagina tiver naquele momento. E a explicacao mais provavel para os titulos
 * "teste" e "Portfolio de Michel" que aparecem no relatorio e nao existem em
 * nenhuma rota do site.
 *
 * A trava e por hostname, nao por IP: IP muda de rede para rede e de dia para
 * dia, e um filtro por IP no painel do GA nao cobre outra maquina nem o
 * celular. Hostname cobre todos os casos de uma vez.
 */
export const MEDINDO =
  typeof window !== "undefined" &&
  (window.location.hostname === DOMINIO_DE_PRODUCAO ||
    window.location.hostname === `www.${DOMINIO_DE_PRODUCAO}`);

export function trackEvent(nome: string, params: EventoParams = {}) {
  if (!MEDINDO) return;
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", nome, params);
}
