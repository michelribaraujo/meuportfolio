import { useRef, useState } from "react";
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
 *
 * A COPIA TEM TRES CAMADAS, e a razao de existirem e que a versao anterior
 * falhava em silencio: o writeText caia no catch, a funcao dava return antes
 * do evento, e entao o texto nao ia, o botao nao mudava e o GA nao registrava
 * nada. A pessoa clicava e nao acontecia coisa alguma.
 *
 *   1. navigator.clipboard.writeText, o caminho normal
 *   2. textarea fora de tela mais execCommand("copy"), que ainda funciona
 *      onde a Clipboard API e bloqueada por permissao
 *   3. seleciona o texto do bloco e mostra a faixa de aviso desenhada no
 *      Figma, para a pessoa so precisar do atalho do teclado
 *
 * A camada 3 so seleciona quando o que aparece e o que se copia sao a mesma
 * coisa. No hero eles diferem, e selecionar levaria a amostra curta em vez do
 * prompt: la a faixa manda rolar ate a secao do prompt completo.
 */
export default function CodeBlock({
  filename,
  content,
  copyContent,
  eventId,
  maxHeight = "38rem",
}: {
  filename: string;
  /** O que aparece na tela. */
  content: string;
  /**
   * O que vai para a area de transferencia, quando for diferente do que
   * aparece. O bloco do hero mostra uma amostra curta porque tem 404px de
   * largura util, mas quem clica em Copiar espera levar o prompt inteiro.
   */
  copyContent?: string;
  eventId: string;
  maxHeight?: string;
}) {
  const [copiado, setCopiado] = useState(false);
  const [bloqueado, setBloqueado] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const textoParaCopiar = copyContent ?? content;
  const mostraOMesmoQueCopia = copyContent === undefined;

  /** Camada 2: funciona onde a Clipboard API e bloqueada por permissao. */
  function copiaPorTextarea(texto: string) {
    const ta = document.createElement("textarea");
    ta.value = texto;
    // fora da tela, e readOnly para nao abrir teclado no celular
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;top:-9999px;opacity:0;";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch {
      ok = false;
    }
    document.body.removeChild(ta);
    return ok;
  }

  function sucesso() {
    setBloqueado(false);
    setCopiado(true);
    window.setTimeout(() => setCopiado(false), 2000);
    trackEvent("copiar_prompt", {
      prompt_id: eventId,
      caracteres: textoParaCopiar.length,
    });
  }

  async function copiar() {
    try {
      await navigator.clipboard.writeText(textoParaCopiar);
      sucesso();
      return;
    } catch {
      // segue para as camadas seguintes
    }

    if (copiaPorTextarea(textoParaCopiar)) {
      sucesso();
      return;
    }

    // Camada 3: nao deu para copiar por codigo. Deixa o texto pronto para o
    // atalho e avisa, em vez de nao fazer nada.
    if (mostraOMesmoQueCopia && preRef.current) {
      const range = document.createRange();
      range.selectNodeContents(preRef.current);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
    setBloqueado(true);
    // evento proprio: sem ele, a falha continua invisivel no GA e o numero de
    // copias parece menor do que a intencao real das pessoas
    trackEvent("copiar_prompt_bloqueado", { prompt_id: eventId });
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

      {/*
        Faixa de aviso: propriedade "Aviso de copia bloqueada" do Code Block na
        Cosmic Sky. Fundo e texto nos semanticos de feedback, contraste medido
        em 6,88 no Light e 8,36 no Dark. role=status para o leitor de tela
        anunciar sem roubar o foco de quem acabou de clicar.
      */}
      {bloqueado && (
        <div
          role="status"
          className="px-6 sm:px-7 py-4 text-sm leading-relaxed bg-feedback-warning-bg text-feedback-warning"
        >
          {mostraOMesmoQueCopia
            ? "Seu navegador bloqueou a cópia. O texto já está selecionado: use Ctrl+C, ou Cmd+C no Mac."
            : "Seu navegador bloqueou a cópia. Role até a seção 03 e copie o prompt completo por lá."}
        </div>
      )}

      <pre
        ref={preRef}
        className="px-6 sm:px-7 py-6 overflow-auto text-xs leading-[1.9] text-muted-foreground whitespace-pre"
        style={{ fontFamily: "'DM Mono', monospace", maxHeight }}
      >
        {content}
      </pre>
    </div>
  );
}
