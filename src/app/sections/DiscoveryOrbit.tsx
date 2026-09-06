import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { motion, AnimatePresence } from "motion/react";

/* ─────────────────────────────────────────────────────────────
   Discovery em órbita

   Tradução direta dos frames `Discovery / Arco orbital` do Figma
   (arquivo r7znvxu2HGlbaUXboCpk2I) e do board `Discovery /
   Especificação para o dev`, que existe justamente para esta
   seção poder ser mantida sem o Figma aberto.

   A geometria é um círculo só. Sol e órbita compartilham o
   centro; o que muda é o raio. Por isso os planetas desenham um
   arco que acompanha a curvatura do sol em vez de competir com
   ela.
───────────────────────────────────────────────────────────── */

const REF = {
  /* desktop, medido em cima do frame de 1440 */
  W: 1440,
  H: 1000,
  cx: 720,
  cy: 2560, // centro do sol e da órbita, muito abaixo da seção
  rSun: 1780, // topo visível do sol em y = 780
  rOrbit: 1985,
  planetX: [120, 356, 598, 842, 1084, 1320],
  /* o balão tem base fixa: nunca sobe nem desce com o planeta,
     senão a página inteira pula a cada hover */
  balloonBaseY: 500,
  balloonW: 760,
  balloonR: 22,
  tailW: 46,
  tailH: 26,
  tailTip: 9,
  margin: 32,
  planetRest: 54,
  planetActive: 62,
} as const;

const MOBILE = {
  W: 390,
  H: 900,
  cx: 195,
  cy: 1840,
  rSun: 1050,
  rOrbit: 1140,
  cardW: 330,
} as const;

/** quanto da coroa do sol fica visível no mobile */
const CROWN = 120;

/** y do planeta em cima da circunferência da órbita */
function orbitY(x: number) {
  const dx = x - REF.cx;
  return REF.cy - Math.sqrt(REF.rOrbit * REF.rOrbit - dx * dx);
}

/**
 * Silhueta do balão: retângulo de cantos arredondados com um
 * rabicho que desce apontando para o planeta selecionado.
 * Só M, L, C e Z — o parser de vetor do Figma não aceita H, V
 * nem A, e manter o mesmo path nos dois lados evita divergência.
 */
function balloonPath(
  w: number,
  h: number,
  r: number,
  tailX: number,
  tailW: number,
  tailH: number,
) {
  const k = r * 0.5523;
  const x2 = tailX + tailW;
  const tip = tailX + REF.tailTip;
  return [
    `M ${r} 0`,
    `L ${w - r} 0`,
    `C ${w - r + k} 0 ${w} ${r - k} ${w} ${r}`,
    `L ${w} ${h - r}`,
    `C ${w} ${h - r + k} ${w - r + k} ${h} ${w - r} ${h}`,
    `L ${x2} ${h}`,
    `C ${x2 - 2} ${h + tailH * 0.46} ${tailX + tailW * 0.44} ${h + tailH * 0.74} ${tip} ${h + tailH}`,
    `C ${tip + 7} ${h + tailH * 0.5} ${tailX + 5} ${h + tailH * 0.28} ${tailX} ${h}`,
    `L ${r} ${h}`,
    `C ${r - k} ${h} 0 ${h - r + k} 0 ${h - r}`,
    `L 0 ${r}`,
    `C 0 ${r - k} ${r - k} 0 ${r} 0`,
    "Z",
  ].join(" ");
}

type Phase = {
  num: string;
  name: string;
  quote: string;
  body: string;
  color: string;
  listTitle: string;
  items: string[];
  output?: string;
  trigger?: boolean;
};

export const orbitPhases: Phase[] = [
  {
    num: "00",
    name: "O Sinal",
    quote: "o combustível que ignita o Discovery",
    body: "Não é uma etapa do Discovery em si, é o gatilho. Um problema ou necessidade emerge dentro da empresa, no mercado ou no público-alvo.",
    color: "#ff6b47",
    listTitle: "De onde o sinal vem",
    items: [
      "Demanda de stakeholder",
      "Métrica crítica caindo",
      "Insight de pesquisa",
      "Necessidade mapeada no mercado",
      "Feedback recorrente de usuários",
    ],
    trigger: true,
  },
  {
    num: "01",
    name: "Entender",
    quote: "É preciso entender a fundo esse problema",
    body: "Aqui mora o coração da minha metodologia: a Gestão de Hipóteses. Cada suposição vira uma pergunta investigável, associada a um método de pesquisa e rastreada até a evidência que a confirma ou refuta.",
    color: "#7c3aed",
    listTitle: "Atividades principais",
    items: [
      "Gestão de Hipóteses",
      "Pesquisa com usuários",
      "Análise de dados",
      "Benchmarking",
      "Mapa de jornada",
    ],
    output: "Árvore de hipóteses + evidências priorizadas",
  },
  {
    num: "02",
    name: "Decidir",
    quote: "O que vamos fazer com isso?",
    body: "Com as evidências da fase anterior, a equipe e os stakeholders se reúnem para uma decisão informada. Uso frameworks de priorização para tornar a escolha transparente e rastreável. Se a decisão for 'não avançar', isso também é um sucesso: significa que o discovery fez seu trabalho.",
    color: "#2563eb",
    listTitle: "Atividades principais",
    items: [
      "Priorização (RICE/ICE)",
      "Alinhamento executivo",
      "Go/No-go estruturado",
      "Métricas de sucesso",
    ],
    output: "Decisão documentada + OKR de produto",
  },
  {
    num: "03",
    name: "Planejar",
    quote: "Se vamos fazer, como vamos fazer?",
    body: "Antes de qualquer sprint começar, faço o planejamento com a squad técnica. Definition of Ready por história, dependências entre times, riscos identificados e os critérios exatos que definirão o sucesso.",
    color: "#10b981",
    listTitle: "Atividades principais",
    items: [
      "Definition of Ready",
      "Arquitetura de solução",
      "Mapeamento de riscos",
      "Service Blueprint",
    ],
    output: "Escopo fechado + Definition of Done",
  },
  {
    num: "04",
    name: "Executar",
    quote: "Mãos à obra, com clareza",
    body: "A execução é fluida quando o discovery foi bem feito. O time sabe o porquê de cada decisão, o design tem contexto para escolhas autônomas e o handoff técnico é preciso. Minha presença aqui é de facilitação e desbloqueio.",
    color: "#f59e0b",
    listTitle: "Atividades principais",
    items: [
      "Sprints com critério claro",
      "Design de interface",
      "Handoff técnico",
      "Testes de usabilidade",
    ],
    output: "Produto funcional pronto para monitoramento",
  },
  {
    num: "05",
    name: "Acompanhar",
    quote: "Medir, aprender, iterar",
    body: "O ciclo não termina no deploy. Monitoro os indicadores definidos na fase de decisão e comparo com as hipóteses que nortearam o projeto. Se os números confirmam, documento o aprendizado. Se não, começa um novo ciclo.",
    color: "#60a5fa",
    listTitle: "Atividades principais",
    items: [
      "Monitoramento de KPIs",
      "Análise pós-lançamento",
      "Entrevistas de follow-up",
      "Retrospectiva",
    ],
    output: "Relatório de impacto + próximos sinais",
  },
];

/* ── anel tracejado que gira em volta do planeta ── */
function OrbitRing({
  color,
  active,
  trigger,
  size,
}: {
  color: string;
  active: boolean;
  trigger?: boolean;
  size: number;
}) {
  return (
    <motion.svg
      className="absolute pointer-events-none"
      style={{
        width: size * 2.07,
        height: size * 0.82,
        left: "50%",
        top: "50%",
        x: "-50%",
        y: "-50%",
      }}
      viewBox="0 0 112 44"
      fill="none"
      aria-hidden
      animate={{ rotate: [22, 382] }}
      transition={{
        duration: active ? 9 : 26,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <ellipse
        cx="56"
        cy="22"
        rx="55"
        ry="21"
        stroke={color}
        strokeWidth="1.2"
        strokeDasharray={trigger ? "3 3" : "4 3"}
        strokeLinecap="round"
        opacity={active ? 0.75 : 0.45}
      />
      <circle cx="111" cy="22" r="4" fill={color} opacity={0.95} />
    </motion.svg>
  );
}

/* ── conteúdo do balão, reaproveitado no desktop e no mobile ── */
function PhaseContent({
  p,
  stacked,
}: {
  p: Phase;
  stacked?: boolean;
}) {
  /* no mobile o card divide a tela com os planetas e o sol,
     entao a escala cai um degrau para tudo caber sem rolagem */
  const ts = stacked
    ? { nome: 22, frase: 14, corpo: 15, lh: "24px", chip: 11, rot: 10 }
    : { nome: 26, frase: 15, corpo: 16, lh: "27px", chip: 12, rot: 11 };
  return (
    <div className={stacked ? "" : "flex gap-10"}>
      <div style={stacked ? undefined : { width: 352, flexShrink: 0 }}>
        <div className="flex items-baseline gap-3 flex-wrap">
          <h3
            className="leading-tight"
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              fontSize: ts.nome,
              color: "#f2ede8",
            }}
          >
            {p.name}
          </h3>
          {p.trigger && (
            <span
              className="text-[10px] uppercase px-2 py-0.5 rounded-full"
              style={{
                fontFamily: "'DM Mono', monospace",
                letterSpacing: "0.12em",
                color: p.color,
                background: `${p.color}1f`,
                border: `1px solid ${p.color}66`,
              }}
            >
              gatilho, não é etapa
            </span>
          )}
        </div>
        <p
          className="mt-1.5 italic"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: ts.frase,
            color: "#7c82ae",
          }}
        >
          “{p.quote}”
        </p>
        <p
          className="mt-4"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 300,
            fontSize: ts.corpo,
            lineHeight: ts.lh,
            color: "#cbc7dc",
          }}
        >
          {p.body}
        </p>
      </div>

      <div className={stacked ? "mt-6" : "flex-1 min-w-0"}>
        <p
          className="uppercase"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontWeight: 500,
            fontSize: ts.rot,
            letterSpacing: "1.6px",
            color: "#7c82ae",
          }}
        >
          {p.listTitle}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.items.map((it) => (
            <span
              key={it}
              className="px-2.5 py-1 rounded-full"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: ts.chip,
                color: "#e6e3f2",
                background: `${p.color}1f`,
                border: `1px solid ${p.color}66`,
              }}
            >
              {it}
            </span>
          ))}
        </div>
        {p.output && (
          <>
            <p
              className="mt-5 uppercase"
              style={{
                fontFamily: "'DM Mono', monospace",
                fontWeight: 500,
                fontSize: ts.rot,
                letterSpacing: "1.6px",
                color: "#7c82ae",
              }}
            >
              Output da fase
            </p>
            <p
              className="mt-1.5"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 500,
                fontSize: ts.frase + 1,
                color: "#f2ede8",
              }}
            >
              {p.output}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default function DiscoveryOrbit() {
  const hostRef = useRef<HTMLDivElement>(null);
  const balloonRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const planetRowRef = useRef<HTMLDivElement>(null);
  const planetRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const [width, setWidth] = useState(REF.W);
  const [selected, setSelected] = useState<number | null>(null);
  const [balloonH, setBalloonH] = useState(230);
  const [card, setCard] = useState(0);

  useLayoutEffect(() => {
    const el = hostRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) =>
      setWidth(e.contentRect.width),
    );
    ro.observe(el);
    setWidth(el.getBoundingClientRect().width);
    return () => ro.disconnect();
  }, []);

  useLayoutEffect(() => {
    const el = balloonRef.current;
    if (!el) return;
    setBalloonH(el.offsetHeight);
  }, [selected]);

  const isMobile = width < 860;
  /* limite superior para a seção não virar um monstro em telas
     muito largas: acima disso o desenho para de crescer */
  const s = Math.min(width / REF.W, 1.16);

  const close = useCallback(() => setSelected(null), []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  /* no mobile o planeta ativo fica sempre no centro e os
     vizinhos espiam cortados pela borda: é o corte que comunica
     "tem mais, deslize" */
  useEffect(() => {
    const row = planetRowRef.current;
    const alvo = planetRefs.current[card];
    if (!row || !alvo) return;
    row.scrollTo({
      left:
        alvo.offsetLeft - row.clientWidth / 2 + alvo.clientWidth / 2,
      behavior: "smooth",
    });
  }, [card]);

  const onTrackScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const w = el.scrollWidth / orbitPhases.length;
    setCard(
      Math.min(
        Math.round(el.scrollLeft / w),
        orbitPhases.length - 1,
      ),
    );
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    const w = el.scrollWidth / orbitPhases.length;
    el.scrollTo({ left: w * i, behavior: "smooth" });
  };

  const header = (
    <div className="text-center px-4">
      <p
        className="text-[11px] uppercase"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontWeight: 500,
          letterSpacing: "1.6px",
          color: "#7c82ae",
        }}
      >
        ✦ 04 — Processo de Discovery
      </p>
      <h2
        className="mt-4 text-3xl sm:text-4xl 2xl:text-5xl leading-tight"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          color: "#f2ede8",
        }}
      >
        <em className="not-italic text-primary">
          Suposição não é diagnóstico.
        </em>
      </h2>
      <p
        className="mt-4 text-[15px] max-w-2xl mx-auto"
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 300,
          color: "#8f8bab",
        }}
      >
        Seis etapas para transformar suposição em evidência.
        {isMobile ? " Deslize para escolher uma etapa e ver a prova dela." : " Escolha uma etapa na órbita para ver a prova dela."}
      </p>
    </div>
  );

  /* ── sol: um círculo gigante cujo centro fica muito abaixo da
     seção, então só a coroa entra em cena ── */
  const sun = (m: typeof REF, k: number) => (
    <>
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{
          width: m.rSun * 2 * k,
          height: m.rSun * 2 * k,
          left: m.cx * k - m.rSun * k,
          top: m.cy * k - m.rSun * k,
          background:
            "radial-gradient(circle closest-side, #0e0618 0%, #1b0a2c 93%, #7a2a45 98%, #ff8a5b 99.7%, #ffd2ae 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 2600 * k,
          height: 2600 * k,
          left: m.cx * k - 1300 * k,
          top: m.cy * k - 1300 * k,
          background:
            "radial-gradient(circle closest-side, rgba(255,138,91,0) 66%, rgba(255,122,78,0.22) 86%, rgba(124,58,237,0) 100%)",
        }}
      />
    </>
  );

  /* ───────────────────────── mobile ───────────────────────── */
  if (isMobile) {
    const k = Math.min(width / MOBILE.W, 1.2);
    const active = orbitPhases[card];
    return (
      <section
        ref={hostRef}
        aria-labelledby="discovery-titulo"
        className="relative w-full overflow-hidden pt-24 scroll-mt-24"
      >
        {/* o sol nasce colado na base da seção: a altura de quem
            manda é o conteúdo, não um número fixo, senão o card
            mais longo empurra os planetas para fora da tela */}
        <div
          aria-hidden
          className="absolute rounded-full pointer-events-none left-1/2 -translate-x-1/2"
          style={{
            width: MOBILE.rSun * 2 * k,
            height: MOBILE.rSun * 2 * k,
            bottom: -(MOBILE.rSun * 2 * k - CROWN),
            background:
              "radial-gradient(circle closest-side, #0e0618 0%, #1b0a2c 93%, #7a2a45 98%, #ff8a5b 99.7%, #ffd2ae 100%)",
          }}
        />
        <div className="relative">
          <div id="discovery-titulo">{header}</div>

          <div
            ref={trackRef}
            onScroll={onTrackScroll}
            className="mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{
              paddingLeft: (width - MOBILE.cardW * k) / 2,
              paddingRight: (width - MOBILE.cardW * k) / 2,
              scrollbarWidth: "none",
            }}
          >
            {orbitPhases.map((p) => (
              <article
                key={p.num}
                className="snap-center shrink-0 rounded-[20px] p-5"
                style={{
                  width: MOBILE.cardW * k,
                  background: "rgba(10,10,28,0.97)",
                  border: `1px solid ${p.color}73`,
                }}
              >
                <PhaseContent p={p} stacked />
              </article>
            ))}
          </div>

          {/* fileira de planetas: o ativo no centro, os vizinhos
              espiando cortados pela borda — é o corte que diz
              "tem mais, deslize" */}
          <div
            ref={planetRowRef}
            className="mt-7 flex items-center gap-6 overflow-x-auto px-[45%] scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {orbitPhases.map((p, i) => {
              const on = i === card;
              return (
                <button
                  key={p.num}
                  ref={(el) => {
                    planetRefs.current[i] = el;
                  }}
                  onClick={() => goTo(i)}
                  aria-label={`Etapa ${p.num}, ${p.name}`}
                  aria-current={on}
                  className="relative shrink-0 rounded-full grid place-items-center transition-all"
                  style={{
                    width: on ? 56 : 46,
                    height: on ? 56 : 46,
                    opacity: on ? 1 : 0.38,
                    background: "#070722",
                    border: `${on ? 2 : 1.5}px ${p.trigger ? "dashed" : "solid"} ${p.color}`,
                    boxShadow: on ? `0 0 24px ${p.color}55` : "none",
                  }}
                >
                  <span
                    className="text-[12px]"
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      color: p.color,
                    }}
                  >
                    {p.num}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-5 flex items-center justify-center gap-1.5">
            {orbitPhases.map((p, i) => (
              <span
                key={p.num}
                className="rounded-full transition-all"
                style={{
                  width: i === card ? 18 : 6,
                  height: 6,
                  background:
                    i === card ? active.color : "#3a3a5e",
                }}
              />
            ))}
          </div>
        </div>
        {/* faixa reservada onde a coroa do sol aparece */}
        <div style={{ height: CROWN }} aria-hidden />
      </section>
    );
  }

  /* ──────────────────────── desktop ───────────────────────── */
  const sel = selected !== null ? orbitPhases[selected] : null;
  const selX = selected !== null ? REF.planetX[selected] : REF.cx;
  const bw = REF.balloonW;
  const left = Math.min(
    Math.max(selX - bw / 2, REF.margin),
    REF.W - REF.margin - bw,
  );
  const tailX = selX - left - REF.tailW / 2;
  const planetTop =
    selected !== null
      ? orbitY(selX) - REF.planetActive / 2
      : 0;

  return (
    <section
      ref={hostRef}
      aria-labelledby="discovery-titulo"
      className="relative w-full overflow-hidden"
      style={{ height: REF.H * s }}
      onMouseLeave={close}
    >
      {sun(REF, s)}

      <div className="relative pt-16">
        <div id="discovery-titulo">{header}</div>
      </div>

      {/* faixa reservada para o balão. Fica vazia em repouso de
          propósito: se ela encolhesse, a página pularia a cada
          passagem de mouse */}
      <AnimatePresence>
        {sel && (
          <motion.div
            key={sel.num}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="absolute pointer-events-none"
            style={{
              left: left * s,
              top: (REF.balloonBaseY - balloonH) * s,
              width: bw * s,
            }}
          >
            <div
              style={{
                width: bw,
                transform: `scale(${s})`,
                transformOrigin: "top left",
              }}
            >
              <svg
                className="absolute inset-0 overflow-visible"
                width={bw}
                height={balloonH + REF.tailH}
                aria-hidden
              >
                <path
                  d={balloonPath(
                    bw,
                    balloonH,
                    REF.balloonR,
                    tailX,
                    REF.tailW,
                    REF.tailH,
                  )}
                  fill="rgba(10,10,28,0.97)"
                  stroke={`${sel.color}73`}
                  strokeWidth={1.2}
                />
              </svg>
              <div ref={balloonRef} className="relative px-8 py-7">
                <PhaseContent p={sel} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* linha guia: da ponta do rabicho até a borda do planeta */}
      {sel && (
        <div
          aria-hidden
          className="absolute pointer-events-none"
          style={{
            left: selX * s - 0.75,
            top: (REF.balloonBaseY + REF.tailH) * s,
            width: 1.5,
            height: Math.max(
              0,
              (planetTop - REF.balloonBaseY - REF.tailH) * s,
            ),
            background: `linear-gradient(to bottom, ${sel.color}99, ${sel.color}33)`,
          }}
        />
      )}

      {/* os planetas, em arco sobre a circunferência da órbita */}
      {orbitPhases.map((p, i) => {
        const x = REF.planetX[i];
        const y = orbitY(x);
        const on = selected === i;
        const size = (on ? REF.planetActive : REF.planetRest) * s;
        return (
          <div
            key={p.num}
            className="absolute"
            style={{ left: x * s, top: y * s }}
          >
            <button
              type="button"
              onMouseEnter={() => setSelected(i)}
              onFocus={() => setSelected(i)}
              onClick={() => setSelected(on ? null : i)}
              aria-label={`Etapa ${p.num}, ${p.name}`}
              aria-expanded={on}
              className="absolute grid place-items-center rounded-full transition-[width,height,box-shadow] duration-300 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              style={{
                width: size,
                height: size,
                left: -size / 2,
                top: -size / 2,
                background: "#070722",
                border: `${(on ? 2 : 1.5) * s}px ${p.trigger ? "dashed" : "solid"} ${on ? p.color : `${p.color}b3`}`,
                boxShadow: on ? `0 0 28px ${p.color}66` : "none",
              }}
            >
              <span
                className="absolute inset-0 rounded-full"
                style={{
                  background: p.color,
                  opacity: on ? 0.3 : 0.12,
                }}
              />
              <span
                className="relative"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 13 * s,
                  color: p.color,
                }}
              >
                {p.num}
              </span>
              <OrbitRing
                color={p.color}
                active={on}
                trigger={p.trigger}
                size={size}
              />
            </button>
            <span
              className="absolute text-center whitespace-nowrap pointer-events-none transition-colors"
              style={{
                top: size / 2 + 14 * s,
                left: "50%",
                transform: "translateX(-50%)",
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 600,
                fontSize: 17 * s,
                color: on ? "#f2ede8" : "#9e9bb8",
              }}
            >
              {p.name}
            </span>
          </div>
        );
      })}
    </section>
  );
}
