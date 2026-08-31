# Imagens do case Jobiee

Todos os arquivos desta pasta são **placeholders** gerados automaticamente. Cada um
mostra "TELA PENDENTE" e o nó de origem. Substitua pelos exports reais **mantendo o
mesmo nome de arquivo**: o código importa por nome, então trocar o arquivo é tudo o
que precisa ser feito.

Exportar em **PNG 2x**. As dimensões abaixo são as do placeholder, só para referência
de proporção; o export real não precisa bater pixel a pixel.

## Arquivos

| Arquivo | Origem | O que é |
|---|---|---|
| `chat-mobile.png` | arquivo `CI`, nó `17235:14682` | Chat da empresa publicando a vaga. Vai numa moldura de celular no capítulo 02. |
| `reuniao-desktop.png` | arquivo `CI`, nó `13781:46409` | Entrevista em vídeo embutida (Jitsi), desktop. Moldura de navegador, capítulo 02. |
| `fluxograma.png` | FigJam de documentação | O fluxograma conversacional de 139 nós, inteiro, em zoom-out. Largura total no capítulo 02. Quanto mais largo, melhor. |
| `ds-regras.png` | Design System do Jobiee, nó `5228:26873` | O par FAÇA / NÃO FAÇA da seção Chat. É o argumento central do capítulo 03: recorte o trecho onde o verde e o laranja aparecem lado a lado. |
| `bp-393.png` `bp-768.png` `bp-1080.png` | arquivo `CI` | A mesma tela nos três modos de responsividade. Capítulo 03. |
| `sitemap.png` | FigJam `GVwV60qj5JATh5U06er6IR`, nó `1910:5252` | O sitemap do produto em zoom-out. Capítulo 04, bloco de governança. |
| `redlines.png` | arquivo `CI` | Uma tela com specs e red-lines para o dev. Capítulo 04, bloco de governança. |
| `mural/tela-01.png` … `tela-12.png` | arquivo `CI` | Doze telas variadas do produto. São exibidas pequenas de propósito: o mural prova volume, não conteúdo. Prefira telas visualmente diferentes entre si. |

## Sobre o mural

O código lê a pasta `mural/` inteira com `import.meta.glob`, então **adicionar mais
arquivos aumenta o mural sem tocar em código**. A legenda conta sozinha quantas
imagens existem. Doze é o mínimo que funciona; vinte e quatro fica melhor.

## Antes de publicar

Enquanto houver placeholder, o case está acessível em `/case/jobiee` mas **não está
linkado na home nem no `sitemap.xml`**. Isso é proposital: um case que afirma volume
não pode estrear com molduras vazias. Quando as imagens reais entrarem, é só somar o
card na home e a linha no sitemap.
