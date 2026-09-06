import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { trackEvent } from "../analytics";

/**
 * Bloco de codigo copiavel.
 *
 * Espelha o componente `Code Block` da biblioteca Cosmic Sky: barra de topo
 * com nome do arquivo, botao copiar e area em DM Mono. A altura maxima existe
 * porque o prompt tem ~90 linhas e sem limite ele empurra o resto da pagina
 * para fora da primeira dobra.
 *
 * O clique dispara um evento no GA4. E a unica forma de saber se a pagina
 * cumpriu o proposito dela: visualizacao sem copia nao vale nada aqui.
 */
export default function CodeBlock({
  filename,
  content,
  eventId,
  maxHeight = "38rem",
}: {
  filename: string;
  content: string;
  eventId: string;
  maxHeight?: string;
}) {
  const [copiado, setCopiado] = useState(false);

  async function copiar() {
    try {
      await navigator.clipboard.writeText(content);
    } catch {
      return;
    }
    setCopiado(true);
    window.setTimeout(() => setCopiado(false), 2000);
    trackEvent("copiar_prompt", {
      prompt_id: eventId,
      caracteres: content.length,
    });
  }

  return (
    <div className="rounded-2xl border border-border bg-muted/30 overflow-hidden">
      <div className="flex items-center justify-between gap-4 px-6 sm:px-7 py-4 border-b border-border">
        <span
          className="text-xs uppercase tracking-[0.16em] text-muted-foreground truncate"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          {filename}
        </span>
        <button
          type="button"
          onClick={copiar}
          aria-label={`Copiar ${filename}`}
          className="shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-primary hover:bg-primary/10 transition-colors"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          {copiado ? <Check size={13} /> : <Copy size={13} />}
          {copiado ? "Copiado" : "Copiar"}
        </button>
      </div>
      <pre
        className="px-6 sm:px-7 py-6 overflow-auto text-xs leading-[1.9] text-muted-foreground whitespace-pre"
        style={{ fontFamily: "'DM Mono', monospace", maxHeight }}
      >
        {content}
      </pre>
    </div>
  );
}
