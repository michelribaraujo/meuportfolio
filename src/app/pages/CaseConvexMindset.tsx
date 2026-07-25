import { useState } from "react";

type Section = "contexto" | "metodologia" | "aplicacao" | "resultado";

export default function CaseConvexMindset() {
  const [activeSection, setActiveSection] = useState<Section>("contexto");

  const sections: { id: Section; num: string; label: string }[] = [
    { id: "contexto", num: "01", label: "Contexto" },
    { id: "metodologia", num: "02", label: "A Metodologia" },
    { id: "aplicacao", num: "03", label: "Aplicação" },
    { id: "resultado", num: "04", label: "Resultado" },
  ];

  const categories = [
    {
      name: "Intenções Esperadas",
      color: "text-emerald-400",
      border: "border-emerald-400/30",
      bg: "bg-emerald-400/5",
      desc: "Quando a resposta do usuário é coerente ao que se esperava. O fluxo funciona como projetado.",
    },
    {
      name: "Mudança de Contexto",
      color: "text-blue-400",
      border: "border-blue-400/30",
      bg: "bg-blue-400/5",
      desc: "Intenções compreendidas e não esperadas. O usuário muda de assunto, mas o bot entende e responde.",
    },
    {
      name: "Não Compreendidas",
      color: "text-yellow-400",
      border: "border-yellow-400/30",
      bg: "bg-yellow-400/5",
      desc: "Quando a resposta do usuário não é compreendida pelo chatbot. Oportunidade de melhoria de NLP.",
    },
    {
      name: "Abandono",
      color: "text-primary",
      border: "border-primary/30",
      bg: "bg-primary/5",
      desc: "O usuário desiste da interação. Sinal crítico de fricção na jornada ou expectativa não atendida.",
    },
  ];

  return (
    <div className="animate-[fadeIn_0.4s_ease]">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-12 sm:pt-20 pb-10 sm:pb-16 border-b border-border">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p
              className="text-xs tracking-[0.25em] uppercase mb-6 text-emerald-400 font-medium"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Take Blip · Netflix Brasil · Visual Analytics
            </p>
            <h1
              className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Convex
              <br />
              <em className="not-italic text-emerald-400">Mindset</em>
            </h1>
            <p className="text-lg text-muted-foreground font-light max-w-xl leading-relaxed">
              Uma metodologia proprietária de análise comportamental para chatbots — criada para tornar visível o que os dados brutos escondem.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="border border-border p-6 space-y-4">
              {[
                { label: "Papel", value: "UX Designer & Pesquisador" },
                { label: "Ferramentas", value: "Figma · Power BI" },
                { label: "Tipo", value: "Metodologia Proprietária" },
                { label: "Resultado", value: "Dashboard de análise comportamental" },
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

      {/* Navigation */}
      <nav className="max-w-6xl mx-auto px-4 sm:px-8 border-b border-border">
        <div className="flex overflow-x-auto">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveSection(s.id)}
              className={`flex items-center gap-3 px-6 py-5 text-sm font-medium tracking-wide border-b-2 transition-all duration-200 whitespace-nowrap ${
                activeSection === s.id
                  ? "border-emerald-400 text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <span
                className="text-xs"
                style={{ fontFamily: "'DM Mono', monospace", color: activeSection === s.id ? "#34d399" : undefined }}
              >
                {s.num}
              </span>
              {s.label}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-16">

        {activeSection === "contexto" && (
          <div className="space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-5">
                <p className="text-xs tracking-[0.2em] uppercase text-emerald-400 mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                  01 / O Problema
                </p>
                <h2 className="text-4xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Dados que<br /><em>enganam<br />em vez de guiar.</em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  O produto tinha o objetivo principal de entretenimento, mas também atendia ao suporte. O público-alvo era amplo e contemplava personas distintas — tornando o produto relativamente complexo com jornadas diversas.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="border border-emerald-400/20 bg-emerald-400/5 p-8 h-full">
                  <p className="text-xs tracking-[0.2em] uppercase text-emerald-400 mb-6 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                    A Raiz do Problema
                  </p>
                  <p className="text-xl font-bold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Quando trabalhamos com múltiplas jornadas, é normal que os dados se tornem um fator que inviabiliza análises precisas.
                  </p>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed mb-6">
                    A mineração dos dados e os achados (insights) dependem do background e contexto de cada persona. Sem uma lente adequada, a mesma interação poderia significar coisas completamente diferentes dependendo de quem estava do outro lado.
                  </p>
                  <div className="border border-emerald-400/20 p-4">
                    <p className="text-xs text-muted-foreground font-light">
                      Projeto: serviço de streaming de filmes e séries · Ecossistema: Chatbot no WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-emerald-400 pl-8 py-2">
              <p className="text-2xl font-light leading-relaxed text-foreground">
                "Era necessário utilizar uma ótica diferente quando olhássemos para o produto e o comportamento dos usuários. Surgiu o <strong className="font-semibold">Convex Mindset</strong>."
              </p>
            </div>
          </div>
        )}

        {activeSection === "metodologia" && (
          <div className="space-y-12 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-5">
                <p className="text-xs tracking-[0.2em] uppercase text-emerald-400 mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                  02 / O Framework
                </p>
                <h2 className="text-4xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  4 categorias.<br /><em>Uma nova<br />forma de ver.</em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light mb-6">
                  O Convex é uma metodologia de análise para chatbots que propõe a aplicação de 4 categorias em cima dos dados obtidos dos usuários, baseado em comportamento e resposta.
                </p>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Aplicada sobre os dados brutos, ela permite enxergar padrões comportamentais que análises tradicionais de volume simplesmente não capturam.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7 space-y-3">
                {categories.map((cat, i) => (
                  <div key={cat.name} className={`border ${cat.border} ${cat.bg} p-6`}>
                    <div className="flex items-start gap-4">
                      <span className={`text-xs font-medium shrink-0 pt-0.5 ${cat.color}`} style={{ fontFamily: "'DM Mono', monospace" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className={`font-semibold mb-2 ${cat.color}`}>{cat.name}</p>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">{cat.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === "aplicacao" && (
          <div className="space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-5">
                <p className="text-xs tracking-[0.2em] uppercase text-emerald-400 mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                  03 / Na Prática
                </p>
                <h2 className="text-4xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Do dado bruto<br /><em>ao insight<br />acionável.</em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light mb-6">
                  Após apresentar o framework ao time, aplicamos o Convex Mindset no produto logo após seu lançamento. Os resultados da primeira análise vieram com muito mais facilidade do que seguindo modelos padrão.
                </p>
                <div className="border-l-2 border-emerald-400 pl-6 py-2">
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    A visualização permitiu enxergar pontos da jornada que potencialmente apresentariam falhas — e a partir desses pontos, buscamos compreender mais a fundo os fenômenos e os "porquês".
                  </p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 space-y-4">
                <div className="border border-border bg-card p-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Fluxos Analisados com o Convex
                  </p>
                  <div className="space-y-3">
                    {[
                      { flow: "Menu Principal", insight: "Alta concentração de intenções esperadas — âncora da jornada." },
                      { flow: "Atendimento", insight: "Volume expressivo de intenções não compreendidas — oportunidade de NLP." },
                      { flow: "Conteúdos", insight: "Pico de mudança de contexto — usuários explorando além do fluxo previsto." },
                      { flow: "Top 10", insight: "Baixo abandono — feature com alta aderência à expectativa." },
                      { flow: "Pesquisa CSAT", insight: "Abandono elevado — fricção na coleta de satisfação." },
                    ].map((item) => (
                      <div key={item.flow} className="flex gap-4 items-start border-b border-border pb-3 last:border-0 last:pb-0">
                        <span className="text-emerald-400 text-xs font-medium shrink-0 min-w-[120px]" style={{ fontFamily: "'DM Mono', monospace" }}>{item.flow}</span>
                        <span className="text-sm text-muted-foreground font-light">{item.insight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border border-border bg-card p-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Dashboard em Power BI
                  </p>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Elaboramos um dashboard com os principais dados e indicadores baseados no Convex Mindset — permitindo monitorar a saúde comportamental do chatbot em tempo real, por fluxo e por período.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "resultado" && (
          <div className="space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-5">
                <p className="text-xs tracking-[0.2em] uppercase text-emerald-400 mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                  04 / O Impacto
                </p>
                <h2 className="text-4xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Um mesmo dado,<br /><em>perspectivas<br />infinitas.</em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light mb-6">
                  Um mesmo grupo de dados pode ser analisado a partir de diversas técnicas e ferramentas de visual analytics — mas para cada visualização, o cérebro obtém interpretações diferentes.
                </p>
                <div className="border-l-2 border-emerald-400 pl-6 py-2">
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    Essa diferenciação impacta nos achados e, consequentemente, nas decisões de produto tomadas a partir deles. A metodologia Convex cria uma lente consistente para toda a equipe.
                  </p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 space-y-4">
                <div className="border border-emerald-400/20 bg-emerald-400/5 p-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-emerald-400 mb-6 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Resultados da Aplicação
                  </p>
                  <div className="space-y-4">
                    {[
                      { label: "Padronização dos dados", desc: "Uma linguagem comum para descrever comportamentos — eliminando ambiguidade na leitura dos dados." },
                      { label: "Melhor comunicação com o cliente", desc: "Os dashboards tornaram visível e tangível o que antes era abstrato para os stakeholders." },
                      { label: "Indicadores acionáveis", desc: "Com o Convex, cada fluxo passou a ter indicadores claros de saúde — não apenas volume de interações." },
                      { label: "Visualização de jornadas", desc: "Conseguimos visualizar melhor as possíveis jornadas que cada persona estaria performando no produto." },
                    ].map((item) => (
                      <div key={item.label} className="flex gap-4 items-start border-b border-emerald-400/10 pb-4 last:border-0 last:pb-0">
                        <span className="text-emerald-400 text-xs shrink-0 pt-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>✓</span>
                        <div>
                          <p className="font-medium text-sm mb-1">{item.label}</p>
                          <p className="text-xs text-muted-foreground font-light">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-emerald-400 pl-8 py-2">
              <p className="text-xl font-light leading-relaxed text-foreground">
                "O Convex Mindset não é uma ferramenta — é uma <strong className="font-semibold">forma de pensar</strong>. Uma vez adotada, ela muda permanentemente como o time lê e interpreta o comportamento dos usuários em interfaces conversacionais."
              </p>
            </div>
          </div>
        )}
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
