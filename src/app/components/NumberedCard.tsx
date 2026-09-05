/**
 * Card numerado. Espelha o componente `Numbered Card` da biblioteca Cosmic
 * Sky: rotulo curto em DM Mono, titulo e corpo. Usado nas listas de artefatos,
 * regras e passos.
 */
export default function NumberedCard({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card/40 p-6 sm:p-7 flex flex-col gap-3">
      <span
        className="text-xs uppercase tracking-[0.16em] text-primary whitespace-nowrap"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        {number}
      </span>
      <h3 className="text-lg sm:text-xl font-medium leading-snug">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}
