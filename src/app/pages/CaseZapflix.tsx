import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const stickers = [
  { title: "Stranger Things", text: "Bom dia! Que sua semana seja incrível 🌟" },
  { title: "La Casa de Papel", text: "Boa noite família! Com fé tudo passa 🙏" },
  { title: "Emily in Paris", text: "Feliz segunda! Deus abençoe todos vocês ✨" },
];

type Section = "desafio" | "discovery" | "solucao" | "impacto";

export default function CaseZapflix() {
  const [activeSection, setActiveSection] = useState<Section>("desafio");
  const [hoveredSticker, setHoveredSticker] = useState<number | null>(null);

  const sections: { id: Section; num: string; label: string }[] = [
    { id: "desafio", num: "01", label: "O Desafio" },
    { id: "discovery", num: "02", label: "O Discovery" },
    { id: "solucao", num: "03", label: "A Solução" },
    { id: "impacto", num: "04", label: "O Impacto" },
  ];

  return (
    <div className="animate-[fadeIn_0.4s_ease]">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-12 sm:pt-20 pb-10 sm:pb-16 border-b border-border">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p
              className="text-xs tracking-[0.25em] uppercase mb-6 text-primary font-medium"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Zapflix · Netflix Brasil · WhatsApp
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6 sm:mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              O Cavalo
              <br />
              <em className="not-italic text-primary">de Troia</em>
              <br />
              Digital
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground font-light max-w-xl leading-relaxed">
              Como um chatbot no WhatsApp com falso positivo virou canal de aquisição massiva de um público ignorado pelo mercado.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="border border-border p-5 sm:p-6 space-y-4">
              {[
                { label: "Papel", value: "Product Designer & Strategist" },
                { label: "Plataforma", value: "WhatsApp · Chatbot" },
                { label: "Persona-Alvo", value: "Joana, 40+, Dona de Casa" },
                { label: "Resultado-Chave", value: "Validação da persona via proxy semântico" },
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

      {/* Navigation tabs */}
      <nav className="sticky top-[53px] sm:top-[65px] z-40 bg-background/95 backdrop-blur-sm border-b border-border max-w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex overflow-x-auto">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveSection(s.id)}
                className={`flex items-center gap-3 px-4 sm:px-6 py-4 sm:py-5 text-sm font-medium tracking-wide border-b-2 transition-all duration-200 whitespace-nowrap ${
                  activeSection === s.id
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                <span
                  className="text-xs hidden sm:block"
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    color: activeSection === s.id ? "#e50914" : undefined,
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

        {/* DESAFIO */}
        {activeSection === "desafio" && (
          <div className="space-y-12 sm:space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-6 sm:gap-8">
              <div className="col-span-12 lg:col-span-5">
                <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                  01 / O Falso Positivo
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Alto engajamento,<br /><em>público errado.</em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  O Zapflix — chatbot da Netflix no WhatsApp — apresentava métricas de uso expressivas. O problema: o engajamento mascarava uma realidade crítica de negócio.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="border border-border p-5 sm:p-8 h-full">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Diagnóstico de Métricas
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    {[
                      { flag: "problema", title: "Público errado", desc: "Alto engajamento concentrado em adolescentes — fora do perfil estratégico da Netflix." },
                      { flag: "falso positivo", title: "Falso positivo", desc: "Métricas de uso positivas mascaravam a ausência total da persona de maior valor." },
                      { flag: "oportunidade", title: "Persona ausente", desc: "Joana — mães e donas de casa, 40+ — completamente fora do alcance do produto." },
                      { flag: "risco", title: "Sem expansão", desc: "Market Share estagnado por falta de penetração em segmento com alto potencial." },
                    ].map((item) => (
                      <div key={item.flag} className="border border-border p-4 sm:p-5">
                        <div
                          className={`text-xs tracking-[0.15em] uppercase mb-3 font-medium ${
                            item.flag === "problema" || item.flag === "risco" ? "text-primary"
                              : item.flag === "falso positivo" ? "text-yellow-500"
                              : "text-emerald-400"
                          }`}
                          style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                          {item.flag}
                        </div>
                        <div className="font-semibold mb-1 text-sm">{item.title}</div>
                        <div className="text-xs text-muted-foreground font-light leading-relaxed">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-primary pl-6 sm:pl-8 py-2">
              <p className="text-lg sm:text-2xl font-light leading-relaxed text-foreground">
                "A Netflix precisava expandir seu Market Share engajando{" "}
                <strong className="font-semibold">'Joana'</strong> — mães e donas de casa com 40+ anos — um público{" "}
                <em>invisível às redes sociais tradicionais</em>."
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
              {[
                { title: "Contexto", body: "Chatbot WhatsApp com alto volume de interações, mas demograficamente desalinhado ao objetivo estratégico da plataforma." },
                { title: "Problema", body: "Métricas de uso positivas criavam a ilusão de Product-Market Fit quando, na verdade, a persona de maior valor estava ausente." },
                { title: "Minha Atuação", body: "Diagnostiquei o falso positivo nas métricas e pivotei a estratégia de Produto para buscar o PMF real com a persona correta." },
              ].map((card) => (
                <div key={card.title} className="bg-card p-6 sm:p-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {card.title}
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DISCOVERY */}
        {activeSection === "discovery" && (
          <div className="space-y-12 sm:space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-6 sm:gap-8 items-start">
              <div className="col-span-12 lg:col-span-5">
                <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                  02 / O Insight
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Etnografia<br /><em>de rua.</em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light mb-6">
                  Pesquisa qualitativa presencial com a persona Joana, mapeando comportamentos digitais reais — não percepções relatadas.
                </p>
                <div className="space-y-3">
                  {[
                    "Entrevistas em profundidade com mulheres (40–60 anos)",
                    "Observação de grupos de WhatsApp familiares",
                    "Mapeamento de Jobs to be Done específicos",
                    "Análise de frequência e horário de compartilhamento",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="text-primary text-xs mt-0.5 shrink-0" style={{ fontFamily: "'DM Mono', monospace" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-muted-foreground font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 space-y-4">
                <div className="border border-primary/30 bg-primary/5 p-6 sm:p-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                    O Insight Central
                  </p>
                  <p className="text-xl sm:text-2xl font-bold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    "Bom dia, família!" é um ritual.<br />
                    <em>Não é conteúdo. É pertencimento.</em>
                  </p>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    A persona Joana compartilha imagens de "Bom dia / Boa noite" com textos motivacionais todos os dias. É um comportamento cultural profundamente enraizado — previsível, recorrente e afetivo. Um canal de distribuição orgânica já existente.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { label: "Comportamento diário e recorrente", desc: "Compartilhamento de figurinhas de bom dia / boa noite é ritual — não conteúdo casual." },
                    { label: "Início do dia como gatilho", desc: "O hábito acontece cedo, antes das atividades do dia. Alta previsibilidade." },
                    { label: "Múltiplos grupos simultâneos", desc: "Cada persona pertencia a vários grupos familiares — multiplicando o alcance orgânico." },
                  ].map((item) => (
                    <div key={item.label} className="border border-border p-5">
                      <div className="font-medium text-sm mb-2">{item.label}</div>
                      <div className="text-xs text-muted-foreground font-light leading-relaxed">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                Jobs to be Done Mapeados
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
                {[
                  { job: "Demonstrar afeto à família", trigger: "Acordar cedo, antes dos filhos", outcome: "Ser lembrada como quem cuida", type: "Emocional" },
                  { job: "Manter presença nos grupos", trigger: "Ver que outras pessoas postaram", outcome: "Não ficar de fora da conversa", type: "Social" },
                  { job: "Compartilhar valores e fé", trigger: "Início da semana, datas especiais", outcome: "Reforçar identidade no grupo", type: "Identitário" },
                ].map((jtbd) => (
                  <div key={jtbd.job} className="bg-card p-6 sm:p-8 space-y-4">
                    <span className="text-xs tracking-[0.15em] uppercase text-primary font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                      {jtbd.type}
                    </span>
                    {[
                      { label: "JOB", value: jtbd.job },
                      { label: "TRIGGER", value: jtbd.trigger },
                      { label: "OUTCOME", value: jtbd.outcome },
                    ].map((row) => (
                      <div key={row.label}>
                        <p className="text-muted-foreground mb-1" style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase" }}>{row.label}</p>
                        <p className={row.label === "JOB" ? "font-medium" : "text-sm text-muted-foreground font-light"}>{row.value}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SOLUCAO */}
        {activeSection === "solucao" && (
          <div className="space-y-12 sm:space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-6 sm:gap-8 items-start">
              <div className="col-span-12 lg:col-span-5">
                <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                  03 / A Interface
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Injetar a marca<br /><em>onde Joana vive.</em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light mb-8">
                  Um gerador interativo de figurinhas personalizadas combinando títulos da Netflix com textos inseridos pela própria usuária — zerando a curva de aprendizado.
                </p>
                <div className="space-y-6">
                  {[
                    { num: "01", title: "Interação nativa", desc: "A Joana já sabe usar o WhatsApp. Não havia nada novo a aprender." },
                    { num: "02", title: "Customização pessoal", desc: "O texto é dela. A Netflix entra como suporte visual — não como interrupção." },
                    { num: "03", title: "Distribuição orgânica", desc: "Ao compartilhar a figurinha, ela distribui a marca Netflix para toda sua rede." },
                  ].map((item) => (
                    <div key={item.num} className="flex gap-4">
                      <span className="text-primary text-sm font-medium shrink-0 pt-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>{item.num}</span>
                      <div>
                        <p className="font-medium mb-1">{item.title}</p>
                        <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                  Exemplos de Figurinhas Geradas
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {stickers.map((sticker, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => setHoveredSticker(i)}
                      onMouseLeave={() => setHoveredSticker(null)}
                      className={`border transition-all duration-300 cursor-default ${hoveredSticker === i ? "border-primary/50 bg-primary/5" : "border-border bg-card"}`}
                    >
                      <div className="flex items-stretch">
                        <div className="w-2 bg-primary shrink-0" />
                        <div className="p-5 sm:p-6 flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs tracking-[0.15em] uppercase text-primary font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>Netflix</span>
                            <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>{sticker.title}</span>
                          </div>
                          <p className="text-foreground font-light">{sticker.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border border-border p-6 sm:p-8">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                Estratégia de Distribuição
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between">
                {[
                  { label: "Joana acessa o Zapflix", icon: "💬" },
                  { label: "Gera figurinha personalizada", icon: "✏️" },
                  { label: "Compartilha no grupo familiar", icon: "📲" },
                  { label: "Rede de contatos expostos à marca", icon: "🔗" },
                  { label: "Aquisição orgânica escala", icon: "📈" },
                ].map((step, i, arr) => (
                  <div key={i} className="flex sm:flex-col items-center gap-3 sm:gap-0">
                    <div className="text-2xl sm:mb-2">{step.icon}</div>
                    <p className="text-xs text-muted-foreground font-light sm:max-w-[120px] sm:text-center leading-tight">{step.label}</p>
                    {i < arr.length - 1 && <span className="text-primary text-xl sm:hidden">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* IMPACTO */}
        {activeSection === "impacto" && (
          <div className="space-y-12 sm:space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-6 sm:gap-8 items-start">
              <div className="col-span-12 lg:col-span-5">
                <p className="text-xs tracking-[0.2em] uppercase text-primary mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                  04 / Visão Técnica
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Quando dados<br /><em>escasseiam,<br />crie a métrica.</em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light mb-6">
                  O WhatsApp não expõe dados demográficos. Sem idade, sem gênero, sem localização. A validação da hipótese exigia uma abordagem alternativa.
                </p>
                <div className="border-l-2 border-primary pl-6 py-2">
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Criei um <strong className="font-medium text-foreground">estudo de linguagem semântica</strong> analisando os inputs digitados no chatbot — usando gírias juvenis vs. linguagem formal como proxy demográfico indireto.
                  </p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 space-y-4">
                <div className="border border-primary/30 bg-primary/5 p-6 sm:p-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-primary mb-3 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                    A Métrica Proxy
                  </p>
                  <p className="text-xl font-bold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Semântica como<br /><em>dado demográfico.</em>
                  </p>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed">
                    Se a persona Joana estava sendo adquirida, os inputs mudariam: menos gírias juvenis, mais linguagem formal e afetiva. A análise semântica longitudinal dos textos digitados funcionaria como termômetro demográfico — sem precisar de um único dado de perfil.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { signal: "Queda de gírias", color: "text-emerald-400", desc: "Redução progressiva de expressões juvenis nos inputs — indicando churn intencional do público adolescente." },
                    { signal: "Alta de linguagem formal", color: "text-primary", desc: "Aumento de inputs com linguagem afetiva e formal — padrão linguístico da persona Joana." },
                  ].map((item) => (
                    <div key={item.signal} className="border border-border bg-card p-5 sm:p-6">
                      <div className={`text-xs tracking-[0.15em] uppercase mb-3 font-medium ${item.color}`} style={{ fontFamily: "'DM Mono', monospace" }}>
                        Sinal observado
                      </div>
                      <div className="font-semibold mb-2">{item.signal}</div>
                      <div className="text-xs text-muted-foreground font-light leading-relaxed">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6 sm:gap-8">
              <div className="col-span-12 lg:col-span-8">
                <div className="border-l-2 border-primary pl-6 sm:pl-8 py-2">
                  <p className="text-lg sm:text-xl font-light leading-relaxed text-foreground">
                    "Comprovei que o churn de adolescentes foi <strong className="font-semibold">intencional</strong> — e que a aquisição da persona Joana foi <strong className="font-semibold">validada tecnicamente</strong> por análise semântica, mesmo sem acesso a dados demográficos diretos."
                  </p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-4">
                <div className="border border-border bg-card p-5 sm:p-6 space-y-4">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Aprendizados-Chave
                  </p>
                  {[
                    "Métricas de uso ≠ PMF",
                    "Comportamento cultural = canal de distribuição",
                    "Proxy semântico como dado demográfico",
                    "Churn intencional é produto de decisão estratégica",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <span className="text-primary text-xs pt-0.5 shrink-0" style={{ fontFamily: "'DM Mono', monospace" }}>→</span>
                      <span className="text-sm text-muted-foreground font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Next case footer */}
      <div className="border-t border-border bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-8 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
              Próximo case
            </p>
            <Link
              to="/case/ciee"
              className="flex items-center gap-2 font-semibold hover:opacity-70 transition-opacity text-primary"
            >
              Discovery como Escudo de Governança <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
