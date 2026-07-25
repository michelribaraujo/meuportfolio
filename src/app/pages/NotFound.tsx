import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-40 text-center">
      <p
        className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-6 font-medium"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        404
      </p>
      <h1
        className="text-6xl font-black mb-6"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Página não<br />
        <em className="not-italic text-primary">encontrada.</em>
      </h1>
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-primary hover:gap-4 transition-all duration-200"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        ← Voltar ao portfólio
      </Link>
    </div>
  );
}
