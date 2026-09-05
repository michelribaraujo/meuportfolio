import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import NumberedCard from "../components/NumberedCard";
import CodeBlock from "../components/CodeBlock";
import { PROMPT_MD, MEMORIA_MD } from "../content/promptMentorCarreira";

const WA_URL =
  "https://wa.me/5531983545099?text=Ol%C3%A1%2C%20vim%20da%20p%C3%A1gina%20do%20prompt!";

const ARTEFATOS = [
  {
    n: "LinkedIn",
    t: "Parado fazia anos",
    d: "Sem palavra-chave, sem prova e sem nada publicado que mostrasse o trabalho.",
  },
  {
    n: "Currículo",
    t: "Desatualizado",
    d: "Não refletia a senioridade real nem o que eu já tinha entregado.",
  },
  {
    n: "Portfólio",
    t: "Bonito e vazio",
    d: "Tela bem feita por fora, nenhuma decisão de produto por dentro.",
  },
];

const REGRAS = [
  {
    n: "01",
    t: "Memória fora do chat",
    d: "Tudo que vocês decidem vive numa página que ele lê antes de cada conversa. Sessão nova não recomeça do zero.",
  },
  {
    n: "02",
    t: "Regra de verdade",
    d: "Nenhum número entra em material público sem fonte. Sem métrica auditada, a frase é reescrita, nunca estimada.",
  },
  {
    n: "03",
    t: "Obrigação de discordar",
    d: "Ele não é par de mãos. Se a copy está vendendo o que não aconteceu, ele fala antes de executar.",
  },
  {
    n: "04",
    t: "Uma pergunta de cada vez",
    d: "É assim que ele tira da sua cabeça o que você não consegue escrever sozinho. Pergunta, resposta, texto.",
  },
];

const PASSOS = [
  {
    n: "01",
    t: "Crie um projeto",
    d: "Em qualquer ferramenta de IA que tenha projetos e instruções persistentes.",
  },
  {
    n: "02",
    t: "Crie a memória",
    d: "Uma página que a IA consiga ler e escrever. Cole o modelo da seção anterior.",
  },
  {
    n: "03",
    t: "Cole o prompt",
    d: "Nas instruções do projeto, trocando tudo que está entre chaves.",
  },
  {
    n: "04",
    t: "Abra a sessão",
    d: "Diga: leia a memória e me faça uma pergunta. A partir daí ele conduz.",
  },
];

export default function PromptMentorCarreira() {
  return (
    <div className="max-w-6xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-8 2xl:px-16">
      {/* Hero */}
      <section className="py-20 sm:py-28 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,28rem)] lg:items-center">
        <div className="flex flex-col gap-6">
          <SectionHeader
            eyebrow="Prompts · 01"
            title="Mentor de Carreira"
            description="O agente que cuidou do meu LinkedIn, do meu currículo e do meu portfólio quando eu não tinha cabeça pra fazer isso sozinho. Aqui está ele, sem os meus dados, pronto pra você adaptar."
            size="page"
          />
          <p
            className="text-xs uppercase tracking-[0.16em] text-muted-foreground"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Grátis · sem cadastro · Claude, ChatGPT ou Gemini
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#o-prompt"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Copiar o prompt <ArrowRight size={15} />
            </a>
            <a
              href="#a-memoria"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm hover:bg-muted/50 transition-colors"
            >
              Ver o modelo de memória
            </a>
          </div>
        </div>
        <CodeBlock
          filename="mentor-de-carreira.md"
          content={PROMPT_MD}
          eventId="mentor-de-carreiras-hero"
          maxHeight="20rem"
        />
      </section>

      {/* 01 — O problema */}
      <section className="py-16 sm:py-20 flex flex-col gap-8">
        <SectionHeader
          eyebrow="01 — O problema"
          title="Não faltava material. Faltava cabeça."
          description="Depois de um layoff, os três artefatos que decidem a sua recolocação precisam de atenção exatamente quando você tem menos condição de dar atenção a qualquer coisa."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ARTEFATOS.map((a) => (
            <NumberedCard key={a.n} number={a.n} title={a.t}>
              {a.d}
            </NumberedCard>
          ))}
        </div>
      </section>

      {/* 02 — Como funciona */}
      <section className="py-16 sm:py-20 flex flex-col gap-8">
        <SectionHeader
          eyebrow="02 — Como funciona"
          title="Quatro regras fazem o agente funcionar."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {REGRAS.map((r) => (
            <NumberedCard key={r.n} number={r.n} title={r.t}>
              {r.d}
            </NumberedCard>
          ))}
        </div>
      </section>

      {/* 03 — O prompt */}
      <section id="o-prompt" className="py-16 sm:py-20 flex flex-col gap-8 scroll-mt-24">
        <SectionHeader
          eyebrow="03 — O prompt"
          title="Copia, cola e troca o que está entre chaves."
          description="Funciona em qualquer ferramenta com projetos e memória. O que faz ele funcionar não é o texto bonito, são as quatro regras acima."
        />
        <CodeBlock
          filename="mentor-de-carreira.md"
          content={PROMPT_MD}
          eventId="mentor-de-carreiras"
        />
      </section>

      {/* 04 — A memória */}
      <section id="a-memoria" className="py-16 sm:py-20 flex flex-col gap-8 scroll-mt-24">
        <SectionHeader
          eyebrow="04 — A página de memória"
          title="Sem memória, é só um chat esperto."
          description="Crie a página em qualquer ferramenta que a IA consiga ler e escrever. Ela começa vazia e o agente preenche sozinho, sessão a sessão."
        />
        <CodeBlock
          filename="memoria.md"
          content={MEMORIA_MD}
          eventId="mentor-de-carreiras-memoria"
          maxHeight="28rem"
        />
        <p className="text-sm text-muted-foreground max-w-3xl">
          O log de decisões é append-only de propósito. É o que impede o agente de
          reescrever o passado para concordar com o presente.
        </p>
      </section>

      {/* 05 — Como usar */}
      <section className="py-16 sm:py-20 flex flex-col gap-8">
        <SectionHeader eyebrow="05 — Como usar" title="Quatro passos." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PASSOS.map((p) => (
            <NumberedCard key={p.n} number={p.n} title={p.t}>
              {p.d}
            </NumberedCard>
          ))}
        </div>
      </section>

      {/* 06 — O que não esperar */}
      <section className="py-16 sm:py-20 flex flex-col gap-4">
        <SectionHeader
          eyebrow="06 — O que não esperar"
          title="Ele não consegue vaga pra você."
          description="Não escreve o seu case sozinho e não sabe nada que você não contar. A parte difícil continua sendo lembrar do que você fez e ter coragem de contar direito. O agente só garante que nada disso se perca no caminho."
        />
        <p className="text-sm text-muted-foreground max-w-3xl">
          E ele erra. Por isso a regra de verdade existe: nenhum número entra em
          material público sem fonte.
        </p>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 flex flex-col items-center gap-8 text-center">
        <SectionHeader
          title="Rodou e travou em algum ponto?"
          description="Me chama que eu ajudo a adaptar o prompt à sua carreira. Sem custo, sem pegadinha."
          center
        />
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Me chama no direct <ArrowRight size={15} />
          </a>
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 text-sm hover:bg-muted/50 transition-colors"
          >
            Ver os cases
          </Link>
        </div>
      </section>
    </div>
  );
}
