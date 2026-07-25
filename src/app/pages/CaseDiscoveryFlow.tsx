import { useState } from "react";

type Section = "contexto" | "solucao" | "processo" | "resultado";

export default function CaseDiscoveryFlow() {
  const [activeSection, setActiveSection] = useState<Section>("contexto");

  const sections: { id: Section; num: string; label: string }[] = [
    { id: "contexto", num: "01", label: "Contexto" },
    { id: "solucao", num: "02", label: "A Solução" },
    { id: "processo", num: "03", label: "O Processo" },
    { id: "resultado", num: "04", label: "Resultado" },
  ];

  return (
    <div className="animate-[fadeIn_0.4s_ease]">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-12 sm:pt-20 pb-10 sm:pb-16 border-b border-border">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p
              className="text-xs tracking-[0.25em] uppercase mb-6 text-yellow-400 font-medium"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Take Blip · WhatsApp · Product Discovery
            </p>
            <h1
              className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Workshop de
              <br />
              <em className="not-italic text-yellow-400">Discovery</em>
              <br />
              Flow
            </h1>
            <p className="text-lg text-muted-foreground font-light max-w-xl leading-relaxed">
              Quando a organização estava agitada e o time sem direção, um workshop imersivo reuniu todas as partes para mapear dores, priorizar oportunidades e chegar a um consenso estratégico.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="border border-border p-6 space-y-4">
              {[
                { label: "Papel", value: "UX Designer & Facilitador" },
                { label: "Ferramentas", value: "Miro · Figma" },
                { label: "Escopo", value: "Organização 360° — múltiplas áreas" },
                { label: "Resultado", value: "Dores mapeadas + próximos passos definidos" },
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
                  ? "border-yellow-400 text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              <span
                className="text-xs"
                style={{ fontFamily: "'DM Mono', monospace", color: activeSection === s.id ? "#facc15" : undefined }}
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
                <p className="text-xs tracking-[0.2em] uppercase text-yellow-400 mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                  01 / O Problema
                </p>
                <h2 className="text-4xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Organização<br /><em>agitada,<br />time sem rumo.</em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Como parte da melhoria contínua de um produto digital de chatbot para WhatsApp, precisávamos entender quais seriam os próximos caminhos. A direção tinha que ser estratégica — sem desperdiçar recursos.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="border border-yellow-400/20 bg-yellow-400/5 p-8 h-full">
                  <p className="text-xs tracking-[0.2em] uppercase text-yellow-400 mb-6 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                    A Raiz do Problema
                  </p>
                  <div className="space-y-5">
                    {[
                      { label: "O time", desc: "Desconhecia uma maneira estruturada de levantar problemas dos usuários e clientes para mapear oportunidades com o produto." },
                      { label: "O cliente", desc: "Também não sabia por onde começar. A ausência de método gerava ansiedade e decisões reativas." },
                      { label: "A organização", desc: "Estava agitada — sem saber o que fazer a seguir. Faltava um momento deliberado de alinhamento entre todas as partes." },
                    ].map((item) => (
                      <div key={item.label} className="border-b border-border pb-5 last:border-0 last:pb-0">
                        <p className="text-xs text-yellow-400 font-medium mb-2 uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace" }}>{item.label}</p>
                        <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l-2 border-yellow-400 pl-8 py-2">
              <p className="text-2xl font-light leading-relaxed text-foreground">
                "Era um momento raro na organização — todas as partes numa mesma sala virtual, debatendo em prol de um mesmo projeto."
              </p>
            </div>
          </div>
        )}

        {activeSection === "solucao" && (
          <div className="space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-5">
                <p className="text-xs tracking-[0.2em] uppercase text-yellow-400 mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                  02 / A Abordagem
                </p>
                <h2 className="text-4xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Discovery<br /><em>imersivo<br />360°.</em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light mb-6">
                  Preparei um workshop imersivo de Discovery Flow envolvendo a empresa de forma 360 graus — alcançando áreas distintas da organização que raramente se falavam.
                </p>
                <p className="text-muted-foreground leading-relaxed font-light">
                  A primeira etapa foi apresentar toda a jornada do cliente e como o chatbot fazia parte dela — contextualizando a discussão antes de abrir o espaço para divergências.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7 space-y-4">
                <div className="border border-border bg-card p-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Sequência do Workshop
                  </p>
                  <div className="space-y-5">
                    {[
                      { step: "01", title: "Apresentação da Jornada", desc: "Mapeamento completo do processo de onboarding e jornada do cliente, mostrando onde o chatbot se encaixava." },
                      { step: "02", title: "Alinhamento de Objetivos", desc: "Técnica para alinhar o que queremos alcançar e entender as relações de cada stakeholder com o projeto." },
                      { step: "03", title: "Mapa de Stakeholders", desc: "Visualização de quem está dentro e fora do projeto de cliente — distância e influência de cada parte." },
                      { step: "04", title: "Dores & Necessidades", desc: "Brainstorm estruturado para mapear dores dos usuários/clientes por área e relevância para o produto." },
                      { step: "05", title: "Votação e Priorização", desc: "Votação democrática das dores mais críticas, seguida de consenso sobre próximas etapas." },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4 items-start">
                        <span className="text-yellow-400 text-xs font-medium shrink-0 pt-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>{item.step}</span>
                        <div>
                          <p className="font-medium text-sm mb-1">{item.title}</p>
                          <p className="text-xs text-muted-foreground font-light">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeSection === "processo" && (
          <div className="space-y-12 animate-[fadeIn_0.4s_ease]">
            <p className="text-xs tracking-[0.2em] uppercase text-yellow-400 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
              03 / Divergência e Convergência
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border">
              {[
                {
                  title: "Mapeamento de Dores",
                  phase: "Divergência",
                  desc: "Cada participante contribuiu com dores observadas no contato direto com usuários e clientes. O volume de insights surpreendeu — havia muito conhecimento tácito represado.",
                  items: ["Dores relacionadas ao C2 (cliente da empresa)", "Dores relacionadas à corporação", "Dores com potencial para o negócio"],
                },
                {
                  title: "Priorização por Impacto",
                  phase: "Convergência",
                  desc: "Após o brainstorm, realizamos uma votação para priorizar as dores com base nos problemas mapeados pelas equipes que lidam diretamente com o público-alvo.",
                  items: ["Top 3 ideias com maior consenso", "Classificação por baixo e alto impacto", "Definição das próximas etapas do produto"],
                },
              ].map((card) => (
                <div key={card.title} className="bg-card p-8 space-y-5">
                  <div>
                    <p className="text-xs text-yellow-400 font-medium mb-1 uppercase tracking-wider" style={{ fontFamily: "'DM Mono', monospace" }}>{card.phase}</p>
                    <h3 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{card.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{card.desc}</p>
                  <div className="space-y-2">
                    {card.items.map((item) => (
                      <div key={item} className="flex gap-3 items-start">
                        <span className="text-yellow-400 text-xs shrink-0 pt-0.5" style={{ fontFamily: "'DM Mono', monospace" }}>→</span>
                        <span className="text-sm text-muted-foreground font-light">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-border bg-card p-8">
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                O Diferencial da Abordagem
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Fiz questão de envolver a empresa de forma 360 graus — incluindo áreas que raramente participam de decisões de produto. A riqueza dos insights veio exatamente de quem lida diretamente com os usuários no dia a dia, mas nunca tinha sido convidado a contribuir estrategicamente.
              </p>
            </div>
          </div>
        )}

        {activeSection === "resultado" && (
          <div className="space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-8">
              <div className="col-span-12 lg:col-span-5">
                <p className="text-xs tracking-[0.2em] uppercase text-yellow-400 mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                  04 / O Sucesso
                </p>
                <h2 className="text-4xl font-bold leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Alinhados,<br /><em>unidos,<br />com direção.</em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light mb-6">
                  Ao final do workshop, coletei feedbacks dos stakeholders. A resposta foi unânime: queriam mais sessões assim, com mais frequência e continuidade.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7 space-y-4">
                <div className="border border-yellow-400/20 bg-yellow-400/5 p-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-yellow-400 mb-6 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                    Feedbacks Reais dos Participantes
                  </p>
                  <div className="space-y-4">
                    {[
                      { person: "Dayane", comment: "Gostei demais e gostaria de mais frequência." },
                      { person: "Shirley", comment: "Gostei demais e gostaria de mais frequência com constância e acompanhamento." },
                      { person: "Lucia", comment: "Achei superinteressante e espero que seja mais contínuo." },
                    ].map((fb) => (
                      <div key={fb.person} className="border border-border bg-background p-5">
                        <p className="text-sm font-light italic text-foreground mb-3">"{fb.comment}"</p>
                        <p className="text-xs text-yellow-400 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>{fb.person}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border">
              {[
                { label: "Dores mapeadas", desc: "Lista estruturada de dores dos usuários e clientes, organizada por área e relevância." },
                { label: "Próximos passos", desc: "Consenso sobre o que fazer nas próximas etapas do produto digital — sem ambiguidade." },
                { label: "Time unido", desc: "Time de produto, cliente e áreas operacionais alinhados e comprometidos com a mesma direção." },
              ].map((item) => (
                <div key={item.label} className="bg-card p-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-yellow-400 mb-4 font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
                    {item.label}
                  </p>
                  <p className="text-muted-foreground font-light leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="border-l-2 border-yellow-400 pl-8 py-2">
              <p className="text-xl font-light leading-relaxed text-foreground">
                "O workshop foi um sucesso — não pela metodologia, mas pela <strong className="font-semibold">riqueza do que emergiu</strong> quando as pessoas certas finalmente estavam na mesma sala."
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
