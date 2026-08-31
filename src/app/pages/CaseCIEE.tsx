import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Shield, AlertTriangle, Map, TrendingUp } from "lucide-react";

const ACCENT = "#6366f1";

type Section = "desafio" | "manobra" | "blueprint" | "impacto";

const sections: { id: Section; num: string; label: string; icon: typeof AlertTriangle }[] = [
  { id: "desafio",   num: "01", label: "O Desafio",   icon: AlertTriangle },
  { id: "manobra",   num: "02", label: "A Manobra",   icon: Shield },
  { id: "blueprint", num: "03", label: "O Blueprint", icon: Map },
  { id: "impacto",   num: "04", label: "O Impacto",   icon: TrendingUp },
];

function NdaBanner() {
  return (
    <div className="sticky top-[57px] z-40 w-full border-b border-amber-500/30 bg-amber-500/10 backdrop-blur-sm px-4 py-2.5">
      <div className="max-w-6xl mx-auto flex items-center gap-2.5" style={{ color: "oklch(0.7 0.14 60)" }}>
        <Shield size={13} className="shrink-0" />
        <p className="text-xs font-medium" style={{ fontFamily: "'DM Mono', monospace" }}>
          <span className="font-bold uppercase tracking-widest mr-2">NDA</span>
          Empresa, produto, parceiros e colaboradores anonimizados por acordo de confidencialidade. Dados numéricos preservados com autorização implícita do autor.
        </p>
      </div>
    </div>
  );
}

export default function CaseCIEE() {
  const [active, setActive] = useState<Section>("desafio");

  return (
    <div className="animate-[fadeIn_0.4s_ease]" style={{ fontFamily: "'Outfit', sans-serif" }}>
      <NdaBanner />

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-12 sm:pt-20 pb-10 sm:pb-16 border-b border-border">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p
              className="text-xs tracking-[0.25em] uppercase mb-6 font-medium"
              style={{ fontFamily: "'DM Mono', monospace", color: ACCENT }}
            >
              [Empresa] · Product Discovery · 2024–2026
            </p>
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight mb-6 sm:mb-8 text-foreground"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              [Produto]<br />
              <em className="not-italic" style={{ color: ACCENT }}>Discovery como</em><br />
              Escudo de<br />
              Governança
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground font-light max-w-xl leading-relaxed">
              Como transformei o processo de Discovery em instrumento de governança corporativa —
              forçando visibilidade executiva sobre riscos críticos antes de um lançamento que a
              diretoria insistia em fazer às cegas.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <div className="border border-border p-5 sm:p-6 space-y-4 rounded-xl" style={{ background: `${ACCENT}06` }}>
              {[
                { label: "Empresa",  value: "[Empresa]" },
                { label: "Período",  value: "2024 – 2026" },
                { label: "Papel",    value: "PO + Product Designer" },
                { label: "Escopo",   value: "Discovery · Blueprint · Riscos" },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-start gap-4">
                  <span
                    className="text-xs tracking-[0.15em] uppercase text-muted-foreground shrink-0"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {item.label}
                  </span>
                  <span className="text-sm text-right font-medium text-foreground">{item.value}</span>
                </div>
              ))}
              <div className="pt-2 border-t border-border flex flex-wrap gap-2">
                {["250k jovens ativos", "50k contas-meta", "R$ 50M/mês"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                    style={{ color: ACCENT, borderColor: `${ACCENT}40`, background: `${ACCENT}10`, fontFamily: "'DM Mono', monospace" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Navigation tabs ── */}
      <nav className="sticky top-[57px] sm:top-[65px] z-40 bg-background/95 backdrop-blur-sm border-b border-border max-w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="flex overflow-x-auto">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-4 sm:py-5 text-sm font-medium tracking-wide border-b-2 transition-all duration-200 whitespace-nowrap ${
                  active === s.id
                    ? "border-current text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
                style={active === s.id ? { borderColor: ACCENT, color: ACCENT } : {}}
              >
                <span
                  className="text-xs hidden sm:block"
                  style={{ fontFamily: "'DM Mono', monospace", color: active === s.id ? ACCENT : undefined }}
                >
                  {s.num}
                </span>
                {s.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Content ── */}
      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-10 sm:py-16">

        {/* ── 01 O Desafio ── */}
        {active === "desafio" && (
          <div className="space-y-12 sm:space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-6 sm:gap-8">
              <div className="col-span-12 lg:col-span-5">
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-4 font-medium"
                  style={{ fontFamily: "'DM Mono', monospace", color: ACCENT }}
                >
                  01 / A Bomba-Relógio Oculta
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold leading-tight mb-6 text-foreground"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Grande meta,<br /><em className="not-italic" style={{ color: ACCENT }}>alicerce falso.</em>
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  A [Empresa] estava construindo um ecossistema digital de grande porte: a conta [Produto] operada
                  em parceria com o [Parceiro WL], com meta de{" "}
                  <span className="text-foreground font-medium">50 mil contas abertas</span> e{" "}
                  <span className="text-foreground font-medium">R$ 50 milhões/mês</span> em pagamentos de bolsas.
                  O problema: ninguém estava enxergando o que estava embaixo do capô.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7 space-y-4">
                <div
                  className="rounded-xl border p-6"
                  style={{ borderColor: `${ACCENT}30`, background: `${ACCENT}08` }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full" style={{ background: ACCENT }} />
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: ACCENT, fontFamily: "'DM Mono', monospace" }}
                    >
                      Visão de PM · O problema oculto
                    </span>
                  </div>
                  <h4 className="font-semibold mb-3 text-foreground">Métrica de Vaidade Financeira</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    A meta de receita era sustentada pelo{" "}
                    <span className="text-foreground font-medium">float D-3/CDI</span> — rentabilidade sobre os
                    valores de bolsa repassados pelas empresas 3 dias úteis antes do pagamento. Isso{" "}
                    <em>não era receita do produto [Produto]</em>: era uma receita financeira do modelo de
                    pagamento centralizado da [Empresa], que existiria com ou sem o produto.
                  </p>
                  <p className="text-xs text-muted-foreground italic border-l-2 pl-3" style={{ borderColor: `${ACCENT}50` }}>
                    "A parcela associada a D-3/CDI não deve ser atribuída ao produto Conta [Produto]." — Dossiê de Discovery
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span
                      className="text-xs font-semibold uppercase tracking-widest text-red-500"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      Visão Técnica · Três buracos críticos
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { title: "Segurança da plataforma [Parceiro WL]", desc: "Gaps técnicos identificados nos scans de vulnerabilidade — condição crítica para go-live, ainda em tratamento." },
                      { title: "Impasse jurídico: menores de idade", desc: "Abertura de contas para aprendizes menores de 18 anos sem parecer formal de Jurídico/Compliance definido." },
                      { title: "Ausência de arquitetura de integração", desc: "Sem APIs definidas entre [ERP], [SistFin] e [Parceiro WL]. Sem integração, cada abertura de conta seria manual — tornando a meta de 50 mil contas operacionalmente inviável." },
                    ].map((item) => (
                      <li key={item.title} className="flex items-start gap-2 text-sm">
                        <span className="text-red-500 mt-0.5 shrink-0">✕</span>
                        <div>
                          <p className="font-medium text-foreground">{item.title}</p>
                          <p className="text-muted-foreground font-light">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Mapa de Riscos */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4 text-muted-foreground"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                ✦ Mapa de Riscos (do Dossiê de Discovery)
              </p>
              <div className="space-y-2">
                {[
                  { risk: "Menores de idade sem fluxo jurídico definido", cat: "Jurídico/Regulatório", prob: "Média", impact: "Alto" },
                  { risk: "Integrações [ERP]/[SistFin]/[Parceiro WL] gerando processos manuais", cat: "Técnico/Operacional", prob: "Alta", impact: "Alto" },
                  { risk: "Indefinição de suporte: usuário empurrado entre [Empresa], [Parceiro WL] e empresa", cat: "Operacional/Reputacional", prob: "Alta", impact: "Alto" },
                  { risk: "Dependência crítica da plataforma White Label do [Parceiro WL] (risco de lock-in)", cat: "Fornecedor/Técnico", prob: "Alta", impact: "Alto" },
                  { risk: "Prazo pressionando decisões de UX, Jurídico e Operação sem validação", cat: "Execução", prob: "Média", impact: "Alto" },
                  { risk: "LGPD e segurança da informação insuficientes para dados financeiros de menores", cat: "Segurança/Compliance", prob: "Média", impact: "Alto" },
                  { risk: "Baixa adoção por percepção de commodity vs. concorrentes diretos", cat: "Mercado", prob: "Média", impact: "Alto" },
                  { risk: "Rejeição do jovem por histórico de sistemas da [Empresa] com problemas", cat: "UX/Reputacional", prob: "Média", impact: "Alto" },
                ].map((item) => (
                  <div key={item.risk} className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                    <div className="flex gap-2 shrink-0 mt-0.5">
                      <span
                        className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                        style={{
                          background: item.prob === "Alta" ? "#ef444420" : "#f59e0b20",
                          color: item.prob === "Alta" ? "#ef4444" : "#f59e0b",
                        }}
                      >
                        {item.prob}
                      </span>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-red-500/10 text-red-500">
                        {item.impact}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.risk}</p>
                      <p className="text-xs text-muted-foreground">{item.cat}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 p-6">
              <p
                className="text-xs font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-3"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                ⚠ A pressão institucional
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                O cronograma técnico apontava lançamento nacional em outubro/2025. A diretoria exigia avançar.
                O risco estava documentado. Alguém precisava ter a coragem de dizer o que ninguém queria ouvir.
              </p>
            </div>
          </div>
        )}

        {/* ── 02 A Manobra ── */}
        {active === "manobra" && (
          <div className="space-y-12 sm:space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-6 sm:gap-8">
              <div className="col-span-12 lg:col-span-5">
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-4 font-medium"
                  style={{ fontFamily: "'DM Mono', monospace", color: ACCENT }}
                >
                  02 / Discovery como Escudo
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold leading-tight mb-6 text-foreground"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Governança<br /><em className="not-italic" style={{ color: ACCENT }}>por evidência,</em><br />não confronto.
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Com a diretoria hostil ao bloqueio do projeto, a tática não foi confronto direto — mas também
                  não foi conivência. A solução foi transformar o Discovery em{" "}
                  <span className="text-foreground font-medium">instrumento de governança corporativa</span>.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Avancei em paralelo", body: "Mantive a esteira rumo ao Delivery — desenhando jornadas operacionais, fluxos To Be e o service blueprint — para não bloquear o time nem dar pretexto para ser desautorizado." },
                    { step: "02", title: "Documentei a dívida técnica com precisão cirúrgica", body: "Separei no business case o que era receita do produto (rebates Visa, taxas de serviço, benefícios B2B2C) do que era receita financeira do modelo de pagamento centralizado (D-3/CDI). Essa separação expôs que a meta inicial não era sustentada pelo produto — era pelo float existente." },
                    { step: "03", title: "Criei o Mapa de Riscos × Matriz RACI", body: "Associei cada risco a um responsável institucional por área: Jurídico assinou os riscos de menores e PAT/CEBAS; [Segurança da Informação] assinou os gaps da plataforma [Parceiro WL]; [Tecnologia/Arquitetura] assinou os impasses de integração; [Financeiro] assinou as premissas financeiras." },
                    { step: "04", title: "Forcei visibilidade executiva contínua", body: "Usei o Discovery para obrigar responsáveis de cada área a reconhecerem formalmente os riscos. Ninguém poderia depois alegar que não sabia — o Dossiê de Discovery registrou quem foi consultado, quem estava ciente e quem assinou a responsabilidade." },
                    { step: "05", title: "Impus critérios técnicos de Go/No-Go", body: "Condicionei qualquer escala à correção dos gaps de segurança do [Parceiro WL], formalização dos pareceres jurídicos sobre menores, definição da arquitetura de integração e validação com usuários reais (5–10 jovens, incluindo menores, e 5–10 gestores de RH)." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5 items-start">
                      <div
                        className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{ background: `${ACCENT}15`, color: ACCENT, fontFamily: "'DM Mono', monospace" }}
                      >
                        {item.step}
                      </div>
                      <div className="pt-1">
                        <h4 className="font-semibold mb-1 text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cenários financeiros */}
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-4 text-muted-foreground"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                ✦ Cenários financeiros documentados no Dossiê
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: "Pessimista", desc: "Empresas aderem parcialmente, jovem recebe e transfere imediatamente", value: "R$ 35k/mês", note: "atribuível ao produto", color: "#ef4444" },
                  { label: "Moderado",   desc: "Benefícios carimbados ganham tração, parte dos jovens usa com recorrência", value: "R$ 67k/mês", note: "atribuível ao produto", color: "#f59e0b" },
                  { label: "Otimista",   desc: "Alta adesão empresarial, benefícios relevantes e uso ativo do jovem", value: "R$ 167k/mês", note: "atribuível ao produto", color: "#22c55e" },
                ].map((s) => (
                  <div key={s.label} className="rounded-xl border border-border bg-card p-5">
                    <p className="text-xs font-bold mb-3 uppercase tracking-widest" style={{ color: s.color, fontFamily: "'DM Mono', monospace" }}>{s.label}</p>
                    <p className="text-xl font-black text-foreground mb-1">{s.value}</p>
                    <p className="text-xs text-muted-foreground mb-3">{s.note}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-3 italic">
                * O D-3/CDI (até R$ 90k/mês) foi separado — pertence ao modelo de pagamento centralizado da [Empresa], não ao produto.
              </p>
            </div>

            <div className="rounded-xl border p-6" style={{ borderColor: `${ACCENT}30`, background: `${ACCENT}06` }}>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT, fontFamily: "'DM Mono', monospace" }}>
                ✦ A lógica por trás da tática
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Se a diretoria quisesse prosseguir mesmo com os riscos documentados, que o fizesse —
                mas com ciência registrada. O Discovery deixou de ser pesquisa e virou{" "}
                <span className="text-foreground font-medium">dossiê de responsabilidade executiva</span>.
                A dependência crítica da plataforma [Parceiro WL] foi registrada formalmente.
                Ninguém poderia depois alegar que não sabia.
              </p>
            </div>
          </div>
        )}

        {/* ── 03 O Blueprint ── */}
        {active === "blueprint" && (
          <div className="space-y-12 sm:space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-6 sm:gap-8">
              <div className="col-span-12 lg:col-span-5">
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-4 font-medium"
                  style={{ fontFamily: "'DM Mono', monospace", color: ACCENT }}
                >
                  03 / Service Blueprint
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold leading-tight mb-6 text-foreground"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Arquitetura<br /><em className="not-italic" style={{ color: ACCENT }}>de ponta</em><br />a ponta.
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Mesmo sob pressão, desenhei a arquitetura de serviço completa — conectando o que o usuário
                  enxerga ao que precisa acontecer nos bastidores. O blueprint ficou organizado em 4 camadas.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7">
                <div className="space-y-3">
                  {[
                    { lane: "[Empresa]", color: ACCENT, front: "Comunicação do produto, orientação inicial, materiais comerciais, FAQ e direcionamento de atendimento.", back: "Parametrização no [ERP], validação de KYC, processamento de TCE, split de pagamento, CNAB/PIX, conciliação e governança." },
                    { lane: "[Parceiro WL]", color: "#e50914", front: "App/conta digital, cartão físico/virtual/wallet, saldos, extratos, transações, notificações.", back: "Infraestrutura transacional, bandeira Visa, KYC/onboarding, APIs, segurança, suporte Tier 2/3 para cartão, fraude e infraestrutura." },
                    { lane: "Empresa/RH", color: "#22c55e", front: "Contratação do [Produto], escolha de benefícios, repasse D-3, lançamento de folha.", back: "Validação de elegibilidade, gestão de faltas/descontos, cumprimento de D-3 e relatórios." },
                    { lane: "Parceiros de Benefícios", color: "#f59e0b", front: "Oferta efetiva de saúde, odonto, academia, streaming.", back: "Regras de elegibilidade, precificação, SLA e suporte especializado por benefício." },
                  ].map((item) => (
                    <div key={item.lane} className="rounded-xl border border-border bg-card overflow-hidden">
                      <div className="px-5 py-3 flex items-center gap-2" style={{ background: `${item.color}12`, borderBottom: `1px solid ${item.color}20` }}>
                        <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: item.color, fontFamily: "'DM Mono', monospace" }}>
                          {item.lane}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-border">
                        <div className="p-4">
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>Frontstage</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.front}</p>
                        </div>
                        <div className="p-4">
                          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-2" style={{ fontFamily: "'DM Mono', monospace" }}>Backstage</p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.back}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Jornada operacional */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                ✦ Jornada operacional (10 etapas)
              </p>
              <div className="space-y-2">
                {[
                  { n: "1",  step: "Abordagem comercial", risk: "Produto ser entendido como banco isolado", action: "Posicionar como ecossistema modular vinculado ao estágio" },
                  { n: "2",  step: "Adesão e seleção de benefícios", risk: "Complexidade regulatória se tratados como oferta avulsa", action: "Catálogo controlado atrelado ao vínculo de estágio" },
                  { n: "3",  step: "Parametrização no [ERP]", risk: "Sem parametrização, operação depende de processos manuais", action: "Automatizar configuração no [ERP]" },
                  { n: "4",  step: "Configuração do repasse D-3", risk: "Aderência das empresas impacta receita e operação", action: "Regra clara no contrato e no material comercial" },
                  { n: "5",  step: "Split de pagamento", risk: "Erro de split gera impacto financeiro e reputacional", action: "Conciliação, relatórios e automação de arquivos/API" },
                  { n: "6",  step: "Integração financeira ([ERP] → [Parceiro WL])", risk: "Maior vulnerabilidade: sem API, processos são manuais", action: "Priorizar APIs, provisionamento automático e testes integrados" },
                  { n: "7",  step: "Provisionamento da conta via API", risk: "Falhas no login ou comunicação reduzem adesão", action: "Login único/SSO e onboarding simples" },
                  { n: "8",  step: "Uso pelo jovem", risk: "Experiência fragmentada faz o app perder valor", action: "Saldos e benefícios em interface unificada" },
                  { n: "9",  step: "Suporte (Tier 1/2/3)", risk: "Usuário empurrado entre [Empresa], [Parceiro WL] e empresa", action: "Matriz [Empresa] vs. [Parceiro WL], SLAs, scripts e FAQ formalizados" },
                  { n: "10", step: "Segurança e escala", risk: "Gaps técnicos do [Parceiro WL] comprometem confiança no go-live", action: "Condicionar go-live à correção dos gaps e validação de SI" },
                ].map((item) => (
                  <div key={item.n} className="flex gap-3 items-start rounded-lg border border-border p-3 bg-card">
                    <span
                      className="text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full shrink-0 mt-0.5"
                      style={{ background: `${ACCENT}15`, color: ACCENT, fontFamily: "'DM Mono', monospace" }}
                    >
                      {item.n}
                    </span>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{item.step}</p>
                      <p className="text-xs text-muted-foreground">Risco: {item.risk}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">→ {item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dependências críticas */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                ✦ Dependências críticas mapeadas
              </p>
              <div className="space-y-2">
                {[
                  { dep: "[Parceiro WL]", tipo: "Parceiro operacional principal", risco: "Alto", status: "Contrato assinado, PoC rodando", detail: "A solução é White Label do [Parceiro WL]. Risco de lock-in crítico caso o parceiro encerre operações." },
                  { dep: "[ERP] / [SistFin] / [Parceiro WL] APIs", tipo: "Técnica", risco: "Alto", status: "Em desenho", detail: "Crítica para eliminar processos manuais e permitir escala. Maior vulnerabilidade do projeto." },
                  { dep: "Parecer jurídico sobre menores", tipo: "Jurídica/Compliance", risco: "Alto", status: "Em validação", detail: "Bloqueia definição de elegibilidade e escala para aprendizes." },
                  { dep: "Correção de gaps de segurança do [Parceiro WL]", tipo: "Segurança da Informação", risco: "Alto", status: "Em tratamento", detail: "Condição para go-live seguro com dados financeiros sensíveis." },
                  { dep: "Validação com usuários reais", tipo: "Discovery / UX", risco: "Alto", status: "Pendente", detail: "5–10 jovens (incl. menores) + 5–10 gestores de RH. Transforma suposições em evidências." },
                  { dep: "Parceiro academia", tipo: "Benefício academia", risco: "Médio", status: "Pausado para reavaliação", detail: "Substituível por concorrente direto se parceiro atual sair." },
                  { dep: "Parceiro odontológico", tipo: "Benefício odontológico", risco: "Baixo", status: "Autorizado", detail: "" },
                  { dep: "Plano de saúde", tipo: "Benefício saúde", risco: "Médio", status: "Em construção de apólice", detail: "R$ 300/vida estimados. Ainda sem apólice fechada." },
                ].map((item) => (
                  <div key={item.dep} className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                    <div className="shrink-0 mt-0.5">
                      <span
                        className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                        style={{
                          background: item.risco === "Alto" ? "#ef444420" : item.risco === "Médio" ? "#f59e0b20" : "#22c55e20",
                          color: item.risco === "Alto" ? "#ef4444" : item.risco === "Médio" ? "#f59e0b" : "#22c55e",
                        }}
                      >
                        {item.risco}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2 flex-wrap">
                        <p className="text-sm font-medium text-foreground">{item.dep}</p>
                        <span className="text-xs text-muted-foreground">· {item.tipo}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">Status: {item.status}</p>
                      {item.detail && <p className="text-xs text-muted-foreground mt-1 italic">{item.detail}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── 04 O Impacto ── */}
        {active === "impacto" && (
          <div className="space-y-12 sm:space-y-16 animate-[fadeIn_0.4s_ease]">
            <div className="grid grid-cols-12 gap-6 sm:gap-8">
              <div className="col-span-12 lg:col-span-5">
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-4 font-medium"
                  style={{ fontFamily: "'DM Mono', monospace", color: ACCENT }}
                >
                  04 / O Legado
                </p>
                <h2
                  className="text-3xl sm:text-4xl font-bold leading-tight mb-6 text-foreground"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Integridade<br /><em className="not-italic" style={{ color: ACCENT }}>técnica acima</em><br />do conforto político.
                </h2>
                <p className="text-muted-foreground leading-relaxed font-light">
                  Este case não é sobre um produto que foi ao ar com sucesso. É sobre o que acontece quando
                  um designer sênior documenta cada decisão com precisão suficiente para proteger quem fica.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7 space-y-4">
                <div className="rounded-xl border p-6" style={{ borderColor: `${ACCENT}30`, background: `${ACCENT}08` }}>
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: ACCENT, fontFamily: "'DM Mono', monospace" }}>
                    A intervenção técnica
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Impus critérios formais de{" "}
                    <span className="text-foreground font-medium">Go/No-Go</span> baseados em evidências —
                    não em opiniões. Propus rollout faseado com pilotos controlados antes de escala nacional.
                    Documentei que a meta de outubro era tecnicamente inviável sem antes resolver as 8 dependências críticas pendentes.
                  </p>
                </div>
                <div className="rounded-xl border border-border bg-card p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                    A decisão da diretoria
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    A diretoria optou por assumir os riscos documentados e avançar sem as correções necessárias.
                    Depois disso deixei a empresa, num corte coletivo sem relação com o dossiê. O documento ficou:
                    quem herdou o projeto herdou junto um mapa de riscos com responsáveis, prazos e evidências.
                  </p>
                </div>
              </div>
            </div>

            {/* O que o Dossiê entregou */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-emerald-600 dark:text-emerald-400" style={{ fontFamily: "'DM Mono', monospace" }}>
                ✦ O que o Dossiê de Discovery entregou
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Separação documentada entre receita real do produto e float D-3/CDI, expondo diferença de até R$ 90k/mês que não era receita do [Produto]",
                  "Mapa de 8 riscos com probabilidade, impacto e área responsável — ninguém pôde alegar desconhecimento",
                  "10 dependências críticas categorizadas com status, área responsável e impacto no avanço",
                  "Service Blueprint completo com 10 etapas, 4 swim lanes e pontos críticos por área",
                  "Cenários financeiros (pessimista/moderado/otimista) para discussão com Financeiro e Sponsor",
                  "Critérios técnicos de Go/No-Go baseados em correção de gaps de segurança e validações jurídicas",
                  "Blindagem da equipe de desenvolvimento: dívida técnica e financeira documentada antes do go-live",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-emerald-500 mt-0.5 shrink-0">✓</span>
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Matriz RACI — sem nomes */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4 text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
                ✦ Responsabilidades por área (Matriz RACI)
              </p>
              <div className="space-y-2">
                {[
                  { area: "Produto, UX & Inovação", role: "PO / Responsible & Accountable", desc: "Visão de produto, discovery, backlog, PRD, priorização e articulação das frentes." },
                  { area: "Negócio / Comercial",    role: "Sponsor / SME",                  desc: "Premissas financeiras, meta de contas, modelo D-3/CDI, relacionamento com [Parceiro WL]." },
                  { area: "Tecnologia / Arquitetura", role: "Tech Lead",                    desc: "Arquitetura técnica, APIs, segurança, integração com [ERP]/[SistFin] e riscos técnicos." },
                  { area: "VMO",           role: "Apoio em requisitos",            desc: "VMO, requisitos técnicos, prints do [Parceiro WL] e alinhamento negócio × tecnologia." },
                  { area: "Jurídico",                role: "Pareceres e contratos",          desc: "Análise jurídica: contratos e riscos legais." },
                  { area: "Segurança da Informação", role: "Self-assessment e validação",    desc: "Solicitou avaliação do [Parceiro WL]. Análise indicou bom nível de segurança, mas com gaps a tratar antes do go-live." },
                ].map((person, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border border-border bg-card p-4">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                      style={{ background: `${ACCENT}15`, color: ACCENT, fontFamily: "'DM Mono', monospace" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{person.area}</p>
                      <p className="text-xs text-muted-foreground">{person.role}</p>
                      <p className="text-xs text-muted-foreground mt-1">{person.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-border bg-muted/20 p-6">
              <p
                className="text-foreground font-medium text-base leading-relaxed italic"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                "Senioridade não é só saber fazer. É saber o que dizer quando é difícil — e ter a
                disciplina de documentar o que ninguém quer ver registrado."
              </p>
              <p className="text-xs text-muted-foreground mt-3">Product Designer Sênior · [Empresa], 2026</p>
            </div>
          </div>
        )}
      </main>

      {/* ── Nav footer ── */}
      <div className="border-t border-border bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 sm:py-8 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground mb-1" style={{ fontFamily: "'DM Mono', monospace" }}>
              Próximo case
            </p>
            <Link
              to="/case/zapflix"
              className="flex items-center gap-2 font-semibold hover:opacity-70 transition-opacity"
              style={{ color: ACCENT }}
            >
              O Cavalo de Troia Digital <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
