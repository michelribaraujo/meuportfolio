/**
 * Cabecalho de secao: eyebrow em DM Mono, titulo em Playfair e descricao
 * opcional. Espelha o componente `Section Header` da biblioteca Cosmic Sky.
 */
export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = false,
  size = "section",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  size?: "section" | "page";
}) {
  return (
    <div className={center ? "text-center flex flex-col items-center" : ""}>
      {eyebrow && (
        <p
          className="text-xs uppercase tracking-[0.22em] text-primary mb-3"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={
          size === "page"
            ? "text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight"
            : "text-3xl sm:text-4xl font-black leading-[1.15] tracking-tight"
        }
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
