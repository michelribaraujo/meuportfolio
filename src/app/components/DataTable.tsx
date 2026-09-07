/**
 * Tabela de dados responsiva.
 *
 * Espelha o componente `Table/Cell` da biblioteca Cosmic Sky, onde a linha e
 * um auto-layout horizontal de celulas e a tabela e um auto-layout vertical
 * de linhas. Aqui a estrutura e uma <table> semantica de verdade.
 *
 * O truque do responsivo: em telas pequenas quatro colunas nao cabem, e
 * rolagem horizontal em tabela e armadilha de acessibilidade. Entao a mesma
 * <table> vira blocos empilhados por CSS, e cada celula imprime o proprio
 * rotulo com `content: attr(data-rotulo)`. O HTML continua um so, o que
 * importa para leitor de tela: duplicar a tabela em duas marcacoes faria o
 * conteudo ser lido duas vezes.
 *
 * As larguras seguem a regra do design: nunca numero fixo. Cada coluna
 * declara minimo e maximo, e o resto distribui.
 */

export type Coluna = {
  titulo: string;
  /** Limites em rem. Sem largura fixa: a coluna cresce dentro da faixa. */
  min?: string;
  max?: string;
  /** Primeira coluna do registro, que ganha peso e cor de texto primaria. */
  destaque?: boolean;
};

export default function DataTable({
  colunas,
  linhas,
  legenda,
}: {
  colunas: Coluna[];
  linhas: string[][];
  legenda?: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-muted/30 overflow-hidden">
      <table className="w-full border-collapse text-left">
        {legenda && <caption className="sr-only">{legenda}</caption>}

        <thead className="hidden sm:table-header-group">
          <tr>
            {colunas.map((c) => (
              <th
                key={c.titulo}
                scope="col"
                className="px-5 py-4 text-xs uppercase tracking-[0.16em] font-normal text-muted-foreground align-top"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  minWidth: c.min,
                  maxWidth: c.max,
                }}
              >
                {c.titulo}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {linhas.map((linha, i) => (
            <tr
              key={linha[0] ?? i}
              className="block sm:table-row border-t border-border first:border-t-0 sm:first:border-t-0"
            >
              {linha.map((celula, j) => {
                const col = colunas[j];
                const primeira = j === 0;
                return (
                  <td
                    key={col?.titulo ?? j}
                    data-rotulo={col?.titulo}
                    className={[
                      "block sm:table-cell px-5 align-top",
                      // empilhado o padding do par rotulo/valor precisa ser
                      // menor que o da linha horizontal, senao a secao estica
                      primeira ? "pt-5 pb-2 sm:py-4" : "pb-3 sm:py-4",
                      col?.destaque
                        ? "text-foreground font-medium"
                        : "text-muted-foreground",
                      "text-sm leading-relaxed",
                      // o rotulo so aparece na versao empilhada
                      !primeira
                        ? "before:content-[attr(data-rotulo)] before:block before:mb-1 before:text-xs before:uppercase before:tracking-[0.16em] before:text-muted-foreground/70 before:font-mono sm:before:hidden"
                        : "",
                    ].join(" ")}
                    style={{ minWidth: col?.min, maxWidth: col?.max }}
                  >
                    {celula}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
