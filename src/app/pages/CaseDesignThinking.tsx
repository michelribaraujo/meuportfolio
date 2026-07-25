import { useState } from "react";

type Section = "contexto" | "solucao" | "estagios" | "resultado";

export default function CaseDesignThinking() {
  const [activeSection, setActiveSection] = useState<Section>("contexto");

  const sections: { id: Section; num: string; label: string }[] = [
    { id: "contexto", num: "01", label: "Contexto" },
    { id: "solucao", num: "02", label: "A Solução" },
    { id: "estagios", num: "03", label: "Os Estágios" },
    { id: "resultado", num: "04", label: "Resultado" },
  ];

  return (
    <div className="animate-[fadeIn_0.4s_ease]">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-12 sm:pt-20 pb-10 sm:pb-16 border-b border-border">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p
              className="text-xs tracking-[0.25em] uppercase mb-6 text-blue-400 font-medium"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Take Blip · WhatsApp · Chatbot
            </p>
            <h1
              className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Workshop de
              <br />
              <em className="not-italic text-blue-400">Design</em>
              <br />
              Thinking
            </h1>
            <p className="text-lg text-muted-foreground font-light max-w-xl leading-relaxed">
              Quando não há budget para pesquisa formal, o melhor ativo disponível é o conhecimento tácito dos stakeholders. Este workshop transformou esse recurso em direção estratégica.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="border border-border p-6 space-y-4">
              {[
                { label: "Papel", value: "UX Designer & Facilitador" },
                { label: "Ferramentas", value: "Miro · Figma" },
                { label: "Duração", value: "4h divididas em 2 dias" },
                { label: "Resultado", value: "Time e cliente 100% alinhados" },
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
                  ? "border-blue-400 text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <span
                className="text-xs"
                style={{ fontFamily: "'DM Mono', monospace", color: activeSection === s.id ? "#60a5fa" : undefined }}
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
                <p className="text-xs tracking-[0.2em] uppercase text-blue-400 mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                  01 / O Problema
                </p>
                <h2 className="text-4xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Sem pesquisa,<br /><em>sem budget,<br />sem tempo.</em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  O projeto tinha o objetivo de atrair e reter a persona "Joana" para um produto de chatbot de streaming. Os recursos eram escassos e não havia orçamento para pesquisas formais ou entrevistas com usuários.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="border border-blue-400/20 bg-blue-400/5 p-8 h-full">
                  <p className="text-xs tracking-[0.2em] uppercase text-blue-400 mb-6 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                    O Cenário
                  </p>
                  <p className="text-xl font-bold leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                    O stakeholder e sua equipe eram as únicas entidades acessíveis com conhecimento real sobre o público.
                  </p>
                  <p className="text-muted-foreground font-light text-sm leading-relaxed mb-6">
                    "Melhor do que nada, né?" — essa foi a virada de perspectiva. O conhecimento tácito dos stakeholders, estruturado com a metodologia certa, poderia ser o substituto viável para uma pesquisa formal.
                  </p>
                  <div className="border border-blue-400/20 p-4">
                    <p className="text-xs text-muted-foreground font-light italic">
                      Projeto: serviço de streaming de filmes e séries · Ecossistema: Chatbot no WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
              {[
                { label: "Contexto", desc: "Produto de chatbot no WhatsApp para serviço de streaming, com foco em expandir para nova persona." },
                { label: "Restrição", desc: "Zero budget para pesquisa formal. Nenhuma entrevista com usuários. Prazo curto para decisão estratégica." },
                { label: "Oportunidade", desc: "Stakeholders com conhecimento profundo do público-alvo. Estruturar esse saber com Design Thinking." },
              ].map((card) => (
                <div key={card.label} className="bg-card p-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-blue-400 mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {card.label}
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "solucao" && (
          <div className="space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-5">
                <p className="text-xs tracking-[0.2em] uppercase text-blue-400 mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                  02 / O Design
                </p>
                <h2 className="text-4xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Extrair o<br /><em>máximo de quem<br />já sabe.</em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light mb-6">
                  Convidei o stakeholder e sua equipe para um workshop de Design Thinking estruturado em três fases: empatia, definição e ideação.
                </p>
                <div className="border-l-2 border-blue-400 pl-6 py-2">
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    O objetivo era extrair o máximo de informações sobre o público-alvo, buscar compreensão dos problemas reais e gerar ideias de forma estratégica — com time de produto e cliente no mesmo lado do muro.
                  </p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 space-y-4">
                <div className="border border-border bg-card p-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Ferramentas Utilizadas
                  </p>
                  <div className="space-y-4">
                    {[
                      { tool: "Matriz CSD", purpose: "Organizar certezas, suposições e dúvidas do time sobre o público-alvo." },
                      { tool: "É / Não É / Faz / Não Faz", purpose: "Vestir a realidade do produto e confabular características naturais da persona." },
                      { tool: "Mapa de Empatia", purpose: "Exportar de forma estruturada o que a persona pensa, sente, vê, ouve e faz." },
                      { tool: "POV (Point of View)", purpose: "Organizar dores do mapa de empatia e chegar a uma definição de problema clara." },
                      { tool: "HOW WOW NOW", purpose: "Priorizar ideias por grau de racionalidade e grau de inovação." },
                    ].map((item) => (
                      <div key={item.tool} className="flex gap-4 items-start border-b border-border pb-4 last:border-0 last:pb-0">
                        <span className="text-blue-400 text-xs font-medium shrink-0 pt-0.5 min-w-[140px]" style={{ fontFamily: "'DM Mono', monospace" }}>
                          {item.tool}
                        </span>
                        <span className="text-sm text-muted-foreground font-light">{item.purpose}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "estagios" && (
          <div className="space-y-12 animate-[fadeIn_0.4s_ease]">
            <p className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
              03 / As 3 Fases
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
              {[
                {
                  phase: "Empatia",
                  label: "Empathy",
                  num: "01",
                  steps: [
                    "Técnica É/Não É/Faz/Não Faz para vestir a realidade do produto",
                    "Mapa de empatia para exportar conhecimento dos stakeholders",
                    "Discussões facilitadas sobre o público-alvo",
                  ],
                  insight: "Os stakeholders possuíam muito mais conhecimento sobre a persona do que percebiam — só precisava de estrutura para emergir.",
                },
                {
                  phase: "Definição",
                  label: "Definition",
                  num: "02",
                  steps: [
                    "Técnica POV (Point of View) para organizar as dores mapeadas",
                    "Matriz WHW (What? How? Why?) para chegar à definição do problema",
                    "Diagrama de afinidade para organizar ideias por similaridade",
                  ],
                  insight: "Uma definição clara de problema orientada à ação — compartilhada por todos no workshop.",
                },
                {
                  phase: "Ideação",
                  label: "Ideation",
                  num: "03",
                  steps: [
                    "Brainstorm guiado pelo POV definido na fase anterior",
                    "Classificação das ideias em HOW, WOW e NOW",
                    "Priorização por grau de racionalidade e inovação",
                  ],
                  insight: "As ideias priorizadas (NOW) foram as que avançaram para prototipação de baixa fidelidade.",
                },
              ].map((phase) => (
                <div key={phase.phase} className="bg-card p-8 space-y-6">
                  <div>
                    <span className="text-xs text-blue-400 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>{phase.num}</span>
                    <h3 className="text-2xl font-bold mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {phase.phase} <em className="not-italic text-blue-400 text-lg">| {phase.label}</em>
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {phase.steps.map((step, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <span className="text-blue-400 text-xs shrink-0 pt-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>—</span>
                        <span className="text-sm text-muted-foreground font-light">{step}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-l-2 border-blue-400/40 pl-4">
                    <p className="text-xs text-muted-foreground font-light italic leading-relaxed">{phase.insight}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === "resultado" && (
          <div className="space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-5">
                <p className="text-xs tracking-[0.2em] uppercase text-blue-400 mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                  04 / The Take Away
                </p>
                <h2 className="text-4xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  No mesmo<br /><em>lado do muro.</em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light mb-6">
                  Ao final das 4 horas, todos — time de produto e cliente — estavam completamente alinhados sobre o público, o problema a resolver e a ideia a seguir para testes.
                </p>
                <div className="border-l-2 border-blue-400 pl-6 py-2">
                  <p className="text-sm text-muted-foreground font-light leading-relaxed italic">
                    "Eu até consigo dar o meu melhor sozinho, mas ele não é páreo para o meu melhor quando estou em time!"
                  </p>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-7 space-y-4">
                <div className="border border-blue-400/20 bg-blue-400/5 p-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-blue-400 mb-6 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Entregáveis do Workshop
                  </p>
                  <div className="space-y-4">
                    {[
                      "Alinhamento total sobre informações do público-alvo",
                      "Problema eleito para foco — definido coletivamente",
                      "Ideia para testes comprada pelo cliente",
                      "Protótipos de baixa fidelidade das ideias priorizadas",
                      "Time de produto e cliente no mesmo lado do muro",
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <span className="text-blue-400 text-xs shrink-0 pt-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>✓</span>
                        <span className="text-sm font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Duração", value: "4h / 2 dias", desc: "2h por sessão, espaçadas para digestão" },
                    { label: "Formato", value: "100% remoto", desc: "Workshop facilitado virtualmente no Miro" },
                  ].map((item) => (
                    <div key={item.label} className="border border-border bg-card p-6">
                      <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>{item.label}</p>
                      <p className="text-2xl font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>{item.value}</p>
                      <p className="text-xs text-muted-foreground font-light">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-l-2 border-blue-400 pl-8 py-2">
              <p className="text-xl font-light leading-relaxed text-foreground">
                "O workshop não substituiu a pesquisa — ele <strong className="font-semibold">estruturou o que já existia</strong>. Com metodologia certa, o conhecimento tácito dos stakeholders se tornou <strong className="font-semibold">insumo estratégico real</strong>."
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
