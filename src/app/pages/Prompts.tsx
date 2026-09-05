import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

const WA_URL =
  "https://wa.me/5531983545099?text=Ol%C3%A1%2C%20vim%20da%20p%C3%A1gina%20de%20prompts!";

/**
 * Indice de /prompts.
 *
 * Regra de layout combinada no design: com UM prompt publicado o card fica
 * centralizado e limitado a 40rem, para nao sobrar um vazio enorme ao lado.
 * A partir de DOIS, vira grade de largura cheia. O `justify-center` com
 * `max-w` no item resolve os dois casos sem condicional.
 */
const PROMPTS = [
  {
    slug: "mentor-de-carreiras",
    num: "01",
    title: "Mentor de Carreira",
    desc: "Um agente que assume o LinkedIn, o currículo e o portfólio, te entrevista uma pergunta por vez e vai montando os seus cases. Foi ele que me tirou do layoff em duas semanas.",
  },
];

export default function Prompts() {
  return (
    <div className="max-w-6xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-8 2xl:px-16">
      <section className="py-20 sm:py-28">
        <SectionHeader
          eyebrow="Prompts"
          title="Os prompts que eu uso no meu trabalho."
          description="Cada um nasceu resolvendo um problema meu de verdade. Se não funcionou comigo, não entra nesta lista."
          size="page"
        />
      </section>

      <section className="pb-16 sm:pb-20">
        <ul className="flex flex-wrap justify-center gap-6">
          {PROMPTS.map((p) => (
            <li key={p.slug} className="w-full max-w-[40rem] sm:flex-1 sm:min-w-[20rem]">
              <Link
                to={`/prompts/${p.slug}`}
                className="group h-full rounded-2xl border border-border bg-card/40 p-6 sm:p-7 flex flex-col gap-3 hover:border-primary/50 transition-colors"
              >
                <span
                  className="text-xs uppercase tracking-[0.16em] text-primary whitespace-nowrap"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {p.num}
                </span>
                <h3 className="text-lg sm:text-xl font-medium leading-snug group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
                <span
                  className="mt-2 inline-flex items-center gap-2 text-xs text-primary group-hover:gap-3 transition-all"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Ver o prompt <ArrowRight size={13} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="py-20 sm:py-24 flex flex-col items-center gap-8 text-center">
        <SectionHeader
          title="Tem um problema que um prompt resolveria?"
          description="Me conta. Se render, vira o próximo desta lista."
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
