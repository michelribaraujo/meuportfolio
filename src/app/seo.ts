/**
 * Titulo, descricao e canonical de cada rota do site.
 *
 * Por que existe: o site e uma SPA e serve um unico index.html para todas
 * as rotas. Sem isto, todas as paginas entregam ao Google e ao GA4 o mesmo
 * <title> e a mesma meta description, e os cases passam a competir entre si
 * como se fossem a mesma pagina. Os textos abaixo sao os mesmos que
 * descrevem cada case na home, para o site nao falar duas linguas.
 *
 * Ao adicionar uma rota nova (case ou prompt): entrada aqui, entrada em
 * routes.ts e linha no public/sitemap.xml. Os tres andam juntos.
 */

export const SITE_URL = "https://mikhaelangelo.com.br";

const ASSINATURA = "Case de Michel Araujo, Product Designer Sênior.";

export type RouteMeta = {
  title: string;
  description: string;
};

export const HOME_META: RouteMeta = {
  title: "Michel Araujo · Product Designer Sênior",
  description:
    "Portfólio de Michel Araujo, Product Designer Sênior. Perfil híbrido (UX, PM e Sistemas) transformando complexidade em resultados para Netflix, Globo e CIEE.",
};

export const ROUTE_META: Record<string, RouteMeta> = {
  "/": HOME_META,
  "/prompts": {
    title: "Prompts · Michel Araujo",
    description:
      "Prompts de IA que nasceram resolvendo um problema real de trabalho. Feitos e testados por Michel Araujo, Product Designer Sênior.",
  },
  "/prompts/mentor-de-carreiras": {
    title: "Prompt do Mentor de Carreira · IA para LinkedIn, currículo e portfólio",
    description:
      "O prompt completo do agente de IA que assume LinkedIn, currículo e portfólio, entrevista você uma pergunta por vez e monta os seus cases. Grátis, com o modelo de memória junto.",
  },
  "/case/zapflix": {
    title: "O Cavalo de Troia Digital · Zapflix, Netflix Brasil",
    description: `Um chatbot com falso positivo nas métricas se torna canal de aquisição massiva de um público invisível ao mercado. ${ASSINATURA}`,
  },
  "/case/confidencial": {
    title: "Discovery como Escudo de Governança · Michel Araujo",
    description: `Como transformei o processo de Discovery em instrumento de governança, forçando visibilidade executiva sobre riscos críticos antes de um lançamento irresponsável. ${ASSINATURA}`,
  },
  "/case/jobiee": {
    title: "190 telas, uma IA, um designer · Jobiee, CIEE",
    description: `Todo o design de uma plataforma de estágios com IA conversacional, do primeiro fluxo ao design system, feito por um designer só. ${ASSINATURA}`,
  },
  "/case/convex-mindset": {
    title: "Convex Mindset · Metodologia para Chatbots",
    description: `Uma metodologia proprietária de análise comportamental para chatbots com 4 categorias de intenção. ${ASSINATURA}`,
  },
  "/case/design-thinking": {
    title: "Workshop de Design Thinking · Take Blip",
    description: `Workshop de empatia e ideação com stakeholders para alinhar time e cliente em torno de um produto de chatbot. ${ASSINATURA}`,
  },
  "/case/discovery-flow": {
    title: "Workshop de Discovery Flow · Take Blip",
    description: `Workshop imersivo de discovery com múltiplas áreas para mapear dores e alinhar próximos passos. ${ASSINATURA}`,
  },
};

const NOT_FOUND: RouteMeta = {
  title: "Página não encontrada · Michel Araujo",
  description:
    "Esta página não existe no portfólio de Michel Araujo. Volte para a home para ver os cases.",
};

/**
 * Remove a barra final e baixa a caixa.
 *
 * A barra final existe para que /case/zapflix e /case/zapflix/ sejam a mesma
 * rota. A caixa existe porque o react-router casa rota sem diferenciar
 * maiuscula de minuscula: /case/Confidencial renderiza o case normalmente,
 * mas o lookup exato aqui nao achava a chave e devolvia o titulo de 404 para
 * uma pagina que existe. Isso vazava para o Google e para o GA4.
 */
function normalize(pathname: string): string {
  const semBarra =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  return semBarra.toLowerCase();
}

export function metaForPath(pathname: string): RouteMeta & { canonical: string } {
  const path = normalize(pathname);
  const meta = ROUTE_META[path] ?? NOT_FOUND;
  // Rota desconhecida nao merece canonical proprio: aponta para a home.
  const canonical = ROUTE_META[path] ? `${SITE_URL}${path === "/" ? "/" : path}` : `${SITE_URL}/`;
  return { ...meta, canonical };
}
