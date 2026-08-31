import { useState } from "react";
import { ArrowRight } from "lucide-react";

import chatMobile from "../../imports/jobiee/chat-mobile.png";
import reuniaoDesktop from "../../imports/jobiee/reuniao-desktop.png";
import fluxograma from "../../imports/jobiee/fluxograma.png";
import dsRegras from "../../imports/jobiee/ds-regras.png";
import bp393 from "../../imports/jobiee/bp-393.png";
import bp768 from "../../imports/jobiee/bp-768.png";
import bp1080 from "../../imports/jobiee/bp-1080.png";
import sitemap from "../../imports/jobiee/sitemap.png";
import redlines from "../../imports/jobiee/redlines.png";

// O mural existe para provar escala. Miniatura pequena de proposito: ninguem
// vai ler as telas, todo mundo vai entender o volume. Trocar por telas reais
// mantendo os nomes de arquivo.
const mural = Object.values(
  import.meta.glob("../../imports/jobiee/mural/*.png", {
    eager: true,
    query: "?url",
    import: "default",
  }),
) as string[];

const ACCENT = "#a855f7";
const ACCENT_SOFT = "#c084fc";

type Section = "desafio" | "fluxos" | "sistema" | "impacto";

/** Moldura de celular. O produto e mobile-first: o chat so existe em 393. */
function PhoneFrame({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="m-0 flex flex-col items-center gap-3">
      <div
        className="rounded-[2rem] p-2 bg-card"
        style={{ border: `1px solid ${ACCENT}40`, maxWidth: 300 }}
      >
        <div className="rounded-[1.6rem] overflow-hidden bg-background">
          <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
        </div>
      </div>
      <figcaption
        className="text-xs text-muted-foreground text-center"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

/** Moldura de navegador, para as telas desktop do produto. */
function BrowserFrame({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="m-0 flex flex-col gap-3">
      <div className="rounded-xl overflow-hidden border border-border bg-card">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-border">
          <span className="flex gap-1.5" aria-hidden="true">
            <i className="w-2 h-2 rounded-full bg-muted-foreground/40 not-italic" />
            <i className="w-2 h-2 rounded-full bg-muted-foreground/40 not-italic" />
            <i className="w-2 h-2 rounded-full bg-muted-foreground/40 not-italic" />
          </span>
          <span
            className="text-[11px] text-muted-foreground"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            jobiee.ciee.com.br
          </span>
        </div>
        <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
      </div>
      <figcaption
        className="text-xs text-muted-foreground"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs tracking-[0.2em] uppercase mb-4 font-medium"
      style={{ fontFamily: "'DM Mono', monospace", color: ACCENT_SOFT }}
    >
      {children}
    </p>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-border bg-card px-5 py-4">
      <p
        className="text-3xl leading-none mb-1"
        style={{ fontFamily: "'Playfair Display', serif", color: ACCENT_SOFT }}
      >
        {value}
      </p>
      <p
        className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function CaseJobiee() {
  const [activeSection, setActiveSection] = useState<Section>("desafio");

  const sections: { id: Section; num: string; label: string }[] = [
    { id: "desafio", num: "01", label: "O Desafio" },
    { id: "fluxos", num: "02", label: "Os Fluxos" },
    { id: "sistema", num: "03", label: "O Sistema" },
    { id: "impacto", num: "04", label: "O Impacto" },
  ];

  return (
    <div className="animate-[fadeIn_0.4s_ease]">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-12 sm:pt-20 pb-10 sm:pb-16 border-b border-border">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow>Jobiee · CIEE · Estágios com IA</Eyebrow>
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6 sm:mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              190 telas,
              <br />
              <em className="not-italic" style={{ color: ACCENT }}>
                uma IA,
              </em>
              <br />
              um designer.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground font-light max-w-xl leading-relaxed">
              Todo o design de uma plataforma de estágios com IA conversacional, do primeiro
              fluxo ao design system, feito por um designer só, sob escopo em constante mudança.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="border border-border p-5 sm:p-6 space-y-4 rounded-xl bg-card">
              {[
                { label: "Papel", value: "Product Designer & Líder do Projeto" },
                { label: "Plataforma", value: "Web responsivo + IA" },
                { label: "Público", value: "Estudantes × Empresas" },
                { label: "Status", value: "No ar, pré-lançamento em Goiânia" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-start gap-4">
                  <span
                    className="text-xs tracking-[0.15em] uppercase text-muted-foreground shrink-0"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {item.label}
                  </span>
                  <span className="text-sm text-right font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Navegacao por capitulo */}
      <nav className="sticky top-[53px] sm:top-[65px] z-40 bg-background/95 backdrop-blur-sm border-b border-border max-w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex overflow-x-auto">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`flex items-center gap-3 px-4 sm:px-6 py-4 sm:py-5 text-sm font-medium tracking-wide border-b-2 transition-all duration-200 whitespace-nowrap ${
                  activeSection === s.id
                    ? "text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
                style={activeSection === s.id ? { borderColor: ACCENT } : undefined}
              >
                <span
                  className="text-xs hidden sm:block"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: activeSection === s.id ? ACCENT : undefined,
                  }}
                >
                  {s.num}
                </span>
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-16">
        {/* 01 — O DESAFIO */}
        {activeSection === "desafio" && (
          <div className="space-y-12 sm:space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-6 sm:gap-8">
              <div className="col-span-12 lg:col-span-5">
                <Eyebrow>01 / Escopo em movimento</Eyebrow>
                <h2
                  className="text-3xl sm:text-4xl font-bold leading-tight mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Desenhar com o
                  <br />
                  <em className="not-italic" style={{ color: ACCENT }}>
                    escopo mudando.
                  </em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  A diretoria do CIEE tinha uma ideia crua, sem briefing e sem discovery, e mudava
                  escopo e nome a cada ciclo. O design precisou ser a constante.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="rounded-xl border border-border bg-card p-6">
                  <p
                    className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-5"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    A linha do tempo do nome
                  </p>
                  <ol className="space-y-5 list-none p-0 m-0">
                    {[
                      { n: "01", nome: "6G", txt: "A ideia nasce na diretoria, sem amadurecimento nem refinamento." },
                      { n: "02", nome: "Jobiee", txt: "Job + CIEE. O produto ganha identidade perto de 1 ano de projeto." },
                      { n: "03", nome: "CI", txt: "Renomeado mais uma vez pela diretoria, já no pré-lançamento." },
                    ].map((item) => (
                      <li key={item.n} className="flex gap-4">
                        <span
                          className="text-xs pt-1 shrink-0"
                          style={{ fontFamily: "'DM Mono', monospace", color: ACCENT }}
                        >
                          {item.n}
                        </span>
                        <div>
                          <p className="font-semibold mb-0.5">{item.nome}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{item.txt}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            <blockquote
              className="pl-5 m-0 text-xl sm:text-2xl leading-snug max-w-3xl"
              style={{ fontFamily: "'Playfair Display', serif", borderLeft: `2px solid ${ACCENT}` }}
            >
              "Quando o escopo muda toda semana, o design system é o que impede o produto de
              recomeçar do zero."
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Contexto", txt: "Plataforma de autoatendimento para conectar estudantes a vagas de estágio privado, construída do zero dentro do ecossistema CIEE." },
                { label: "Desafio", txt: "Escopo e nome trocados repetidas vezes pela diretoria, sem briefing formal e sem discovery no ciclo inicial." },
                { label: "Minha atuação", txt: "100% do design: design system, fluxos, telas e documentação, e a liderança do projeto assumida no vácuo de gestão." },
              ].map((c) => (
                <div key={c.label} className="rounded-xl border border-border bg-card p-6">
                  <p
                    className="text-xs uppercase tracking-[0.15em] mb-3"
                    style={{ fontFamily: "'DM Mono', monospace", color: ACCENT_SOFT }}
                  >
                    {c.label}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.txt}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 02 — OS FLUXOS */}
        {activeSection === "fluxos" && (
          <div className="space-y-12 sm:space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-6 sm:gap-8">
              <div className="col-span-12 lg:col-span-5">
                <Eyebrow>02 / Conversa com guarda-corpos</Eyebrow>
                <h2
                  className="text-3xl sm:text-4xl font-bold leading-tight mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Conversa livre,
                  <br />
                  <em className="not-italic" style={{ color: ACCENT }}>
                    fluxo guiado.
                  </em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  A interface principal é uma IA conversacional: o usuário fala livremente, a IA
                  responde e reconduz de volta ao fluxo estruturado. Liberdade na superfície,
                  previsibilidade na jornada.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { n: "Fluxo 01", t: "Vaga via chat", d: "A empresa publica a vaga conversando com a IA, sem formulário." },
                  { n: "Fluxo 02", t: "Currículo guiado", d: "O estudante monta o perfil no mesmo chat, passo a passo." },
                  { n: "Fluxo 03", t: "Match com score", d: "Like mútuo e compatibilidade de 0 a 100 calculada por IA." },
                  { n: "Fluxo 04", t: "Entrevista embutida", d: "Vídeo na própria plataforma e contrato TCE assinado digitalmente." },
                ].map((f) => (
                  <div key={f.n} className="rounded-xl border border-border bg-card p-5">
                    <p
                      className="text-xs uppercase tracking-[0.15em] mb-2"
                      style={{ fontFamily: "'DM Mono', monospace", color: ACCENT_SOFT }}
                    >
                      {f.n}
                    </p>
                    <p className="font-semibold mb-1">{f.t}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* A prova do fluxo 01: a conversa acontecendo. */}
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 lg:col-span-5">
                <PhoneFrame
                  src={chatMobile}
                  alt="Chat do Jobiee: a IA pergunta o CNPJ da empresa e conduz a publicação da vaga"
                  caption="Vaga publicada por conversa, sem formulário"
                />
              </div>
              <div className="col-span-12 lg:col-span-7">
                <BrowserFrame
                  src={reuniaoDesktop}
                  alt="Entrevista em vídeo embutida na plataforma"
                  caption="Entrevista acontece dentro da plataforma, sem sair para outra ferramenta"
                />
              </div>
            </div>

            {/* Volume de fluxo se prova com o desenho inteiro, nao com o numero. */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-3 flex-wrap">
                <span
                  className="text-4xl leading-none"
                  style={{ fontFamily: "'Playfair Display', serif", color: ACCENT_SOFT }}
                >
                  139
                </span>
                <p className="text-muted-foreground">
                  nós no maior dos três fluxogramas conversacionais. Os outros dois têm 88 e 93.
                </p>
              </div>
              {/* w-full + max-w-full impedem que o min-width da imagem estique a
                  pagina no mobile: quem rola e este container, nao o body. */}
              <div className="w-full max-w-full rounded-xl border border-border bg-card overflow-x-auto">
                <img
                  src={fluxograma}
                  alt="Fluxograma conversacional completo, com 139 nós"
                  className="block w-full min-w-[720px] h-auto"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                Ilegível de perto. É esse o ponto.
              </p>
            </div>
          </div>
        )}

        {/* 03 — O SISTEMA */}
        {activeSection === "sistema" && (
          <div className="space-y-12 sm:space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-6 sm:gap-8">
              <div className="col-span-12 lg:col-span-5">
                <Eyebrow>03 / A gramática da conversa</Eyebrow>
                <h2
                  className="text-3xl sm:text-4xl font-bold leading-tight mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Não uma biblioteca.
                  <br />
                  <em className="not-italic" style={{ color: ACCENT }}>
                    Uma gramática.
                  </em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Contar componentes é fácil. O que sustenta um produto sob escopo instável é o
                  sistema dizer <em>quando</em> usar cada peça. O kit conversacional foi escrito
                  com regra de uso, com o que fazer e o que não fazer lado a lado.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <img
                  src={dsRegras}
                  alt="Documentação do kit conversacional com blocos de faça e não faça"
                  className="block w-full h-auto rounded-xl border border-border"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Stat value="223" label="componentes" />
              <Stat value="48" label="component sets" />
              <Stat value="190" label="telas" />
              <Stat value="45" label="modais" />
            </div>

            {/* A linha mais tecnica do case merece imagem, nao bullet. */}
            <div className="space-y-4">
              <Eyebrow>Responsividade resolvida por variável</Eyebrow>
              <p className="text-muted-foreground max-w-2xl leading-relaxed font-light">
                Os três breakpoints não são três cópias de tela. São modos de uma mesma
                estrutura, trocados por variável. É o que permitiu manter 190 telas coerentes
                com um designer só.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-end">
                {[
                  { src: bp393, w: "393" },
                  { src: bp768, w: "768" },
                  { src: bp1080, w: "1080" },
                ].map((b) => (
                  <figure key={b.w} className="m-0 flex flex-col gap-2">
                    <img
                      src={b.src}
                      alt={`A mesma tela no modo de ${b.w} pixels`}
                      className="block w-full h-auto rounded-lg border border-border"
                      loading="lazy"
                    />
                    <figcaption
                      className="text-xs text-muted-foreground"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      modo {b.w}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* O mural: escala mostrada, nao afirmada. */}
            <div className="space-y-4">
              <Eyebrow>Uma amostra do volume</Eyebrow>
              <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3">
                {mural.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Tela ${i + 1} do produto`}
                    className="block w-full h-auto rounded border border-border"
                    loading="lazy"
                  />
                ))}
              </div>
              <p className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                {mural.length} de 190. Nenhuma delas precisa ser lida.
              </p>
            </div>
          </div>
        )}

        {/* 04 — O IMPACTO */}
        {activeSection === "impacto" && (
          <div className="space-y-12 sm:space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-6 sm:gap-8">
              <div className="col-span-12 lg:col-span-5">
                <Eyebrow>04 / Instrumentado antes de lançar</Eyebrow>
                <h2
                  className="text-3xl sm:text-4xl font-bold leading-tight mb-6"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Medir antes
                  <br />
                  <em className="not-italic" style={{ color: ACCENT }}>
                    de lançar.
                  </em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Saí no pré-lançamento controlado em Goiânia, antes dos números finais. O que
                  ficou foi um produto no ar e um sistema de medição pronto para provar a
                  hipótese central.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { n: "Pilar 01", t: "Hipótese central", d: "Contratação 30% mais rápida que o baseline do sistema legado, medida via OpenSearch." },
                  { n: "Pilar 02", t: "Funil instrumentado", d: "GA, Hotjar, OpenSearch e Kibana cobrindo a jornada ponta a ponta." },
                  { n: "Pilar 03", t: "Rodada de testes", d: "17 usuários internos, 92 achados priorizados, 33 correções antes do beta." },
                  { n: "Pilar 04", t: "Pesquisa por dados", d: "Regra definida no projeto: churn acima de 20 p.p. numa etapa dispara investigação qualitativa." },
                ].map((p) => (
                  <div key={p.n} className="rounded-xl border border-border bg-card p-5">
                    <p
                      className="text-xs uppercase tracking-[0.15em] mb-2"
                      style={{ fontFamily: "'DM Mono', monospace", color: ACCENT_SOFT }}
                    >
                      {p.n}
                    </p>
                    <p className="font-semibold mb-1">{p.t}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Governanca deixa de ser bullet e vira prova. */}
            <div className="space-y-5">
              <Eyebrow>Como isso chegou no dev</Eyebrow>
              <p className="text-muted-foreground max-w-2xl leading-relaxed font-light">
                Num projeto conduzido por uma pessoa só, o que separa volume de domínio é o que
                fica documentado depois que essa pessoa sai.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <figure className="m-0 flex flex-col gap-2">
                  <img
                    src={sitemap}
                    alt="Sitemap do produto documentado em board"
                    className="block w-full h-auto rounded-xl border border-border"
                    loading="lazy"
                  />
                  <figcaption className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Sitemap: a arquitetura inteira num board
                  </figcaption>
                </figure>
                <figure className="m-0 flex flex-col gap-2">
                  <img
                    src={redlines}
                    alt="Tela com specs e red-lines para o desenvolvimento"
                    className="block w-full h-auto rounded-xl border border-border"
                    loading="lazy"
                  />
                  <figcaption className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Specs e red-lines: medida, não interpretação
                  </figcaption>
                </figure>
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <p
                className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-4"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                O que ficou de pé
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0 m-0">
                {[
                  "Produto no ar em jobiee.ciee.com.br",
                  "Design system completo e documentado",
                  "190 telas e 45 modais entregues",
                  "Jornada ponta a ponta: do chat ao contrato assinado",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <ArrowRight size={14} className="mt-1 shrink-0" style={{ color: ACCENT }} />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <blockquote
              className="pl-5 m-0 text-xl sm:text-2xl leading-snug max-w-3xl"
              style={{ fontFamily: "'Playfair Display', serif", borderLeft: `2px solid ${ACCENT}` }}
            >
              "O produto mudou de nome três vezes. O design entregou uma vez só, inteiro."
            </blockquote>
          </div>
        )}
      </main>
    </div>
  );
}
