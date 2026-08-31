# Varredura do Figma — 31/ago/2026

Fotografia do arquivo de design tirada **antes da pausa da assinatura do Figma**
(~2 meses a partir de set/2026). Enquanto a assinatura estiver pausada o acesso ao
arquivo pelo MCP provavelmente para de responder, então o que não estiver aqui vira
memória, não referência.

- Arquivo: `r7znvxu2HGlbaUXboCpk2I` — "Portfólio de Michel", uma página só (`0:1`)
- Método: `get_metadata` da página inteira, `get_variable_defs`, `search_design_system`
  e screenshots por frame

---

## 1. O design system do Figma está praticamente vazio

Esta é a descoberta que mais muda o plano.

| O que se procurou | O que existe |
|---|---|
| Variáveis (cor, tipografia, espaçamento) | **1**, `accent/solid: #a855f7` |
| Estilos de texto publicados | **nenhum** |
| Estilos de efeito publicados | **nenhum** |
| Bibliotecas de componentes | `The Cosmic Sky: Design System` e `Biblioteca de ícones` |

**Não havia design system em variáveis para congelar.** O que existe no Figma são
componentes com valores escritos à mão dentro deles.

O sistema real de tokens já vive no código, em **`src/styles/theme.css`**: 187 linhas
com paleta clara e escura completas, raio, pesos de fonte, gradiente de página e as
variáveis do shadcn. **O código é a fonte de verdade também aqui**, não só na produção.

Consequência prática: não existe "sincronizar tokens do Figma". Existe o caminho
inverso, documentar em Figma o que o código já define, se um dia isso for útil.

---

## 2. Divergências entre Figma e produção

### 2.1 O case Jobiee existe no Figma e não existe no site

Quatro capítulos completos (`191:9656`, `191:10152`, `191:10648`, `191:11148`) mais uma
home alternativa que o inclui (`200:11652`). É o maior ativo parado do arquivo. O
conteúdo está congelado na seção 3 deste documento.

**Bloqueio conhecido:** três molduras de browser no case ainda dizem
`[ colar tela real aqui ]`. O case não pode ir ao ar com placeholder.

### 2.2 O card "A decisão da diretoria" tem três versões diferentes

| Onde | Texto |
|---|---|
| Produção, até 31/ago | "…Meu desligamento ocorreu — consequência direta de ter exposto a verdade técnica e matemática que contrariava a narrativa de sucesso do projeto." |
| Produção, depois da correção | "…Depois disso deixei a empresa, num corte coletivo sem relação com o dossiê. O documento ficou: quem herdou o projeto herdou junto um mapa de riscos com responsáveis, prazos e evidências." |
| **Figma, hoje** | "…O dossiê de discovery permaneceu como registro formal da posição técnica — blindando o time e a governança da decisão." |

As três começam igual: "A diretoria optou por assumir os riscos documentados e avançar
sem as correções necessárias."

A versão do Figma é a mais forte das três: entrega o mesmo argumento sem trazer a saída
da empresa para dentro do case. Num portfólio, mencionar a própria demissão abre uma
porta que ninguém pediu para abrir.

### 2.3 O Figma estava certo sobre o LinkedIn e a produção estava errada

O rodapé dos frames do Figma já trazia `linkedin.com/in/mikhaelangelo`. A produção
apontava para `/in/mikhaelaraujo`, um perfil que não existe, em cinco lugares.
Corrigido em 31/ago.

### 2.4 Os frames de site sumiram do arquivo

Os seis frames `Site / Case …` e os sete `Site RWD / …` construídos em 11/ago **não
estão mais na página**. Todo o trabalho de fluidificação de 375 a 1600 px que existiu
naquele arquivo desapareceu.

Não é perda real: o site em produção é responsivo por CSS, que é o lugar certo. Fica
registrado para ninguém procurar por eles depois.

### 2.5 V2 e V3 nunca chegaram à produção

O arquivo tem três direções de home: `12:2` (V1), `65:2` (V2, o passe anti-"cara de IA")
e `79:2` (V3, discovery como carta celeste), mais cinco frames de estado do V3
(`83:2`, `83:15`, `84:2`, `85:2`, `86:2`).

**O site em produção é descendente do V1.** V2 e V3 são trabalho de design feito e nunca
implementado. Decidir se viram roadmap ou se são arquivados: o que não pode continuar é
o arquivo sugerindo que o site tem uma cara que ele não tem.

---

## 3. Case Jobiee — conteúdo congelado

Transcrito dos quatro frames. É o suficiente para implementar o case sem acesso ao Figma.

**Cabeçalho, repetido nos quatro capítulos**

- Eyebrow: `JOBIEE · CIEE · ESTÁGIOS COM IA`
- H1: "190 telas, *uma IA,* um designer." (o meio em itálico e violeta)
- Sub: "Todo o design de uma plataforma de estágios com IA conversacional — do primeiro
  fluxo ao design system — feito por um designer só, sob escopo em constante mudança."
- Meta card: PAPEL "Product Designer & Líder do Projeto" · PLATAFORMA "Web responsivo + IA" ·
  PÚBLICO "Estudantes × Empresas" · STATUS "No ar — pré-lançamento Goiânia"
- Pills: `190 TELAS` · `223 COMPONENTES` · `3 FLUXOS DE IA`
- Nav: 01 O Desafio · 02 Os Fluxos · 03 O Sistema · 04 O Impacto
- Próximo case: "O Cavalo de Troia Digital"
- Accent: violeta `#a855f7`

### 01 — O Desafio · "Escopo em Movimento"

- Título: "Desenhar com o *escopo mudando.*"
- Corpo: "A diretoria do CIEE tinha uma ideia crua — sem briefing, sem discovery — e
  mudava escopo e nome a cada ciclo. O design precisou ser a constante."
- Card "A LINHA DO TEMPO DO NOME":
  - 01 **6G** — "A ideia nasce na diretoria, sem amadurecimento nem refinamento."
  - 02 **Jobiee** — "Job + CIEE. O produto ganha identidade perto de 1 ano de projeto."
  - 03 **CI** — "Renomeado mais uma vez pela diretoria, já no pré-lançamento."
- Citação: "Quando o escopo muda toda semana, o design system é o que impede o produto
  de recomeçar do zero."
- Três cards:
  - CONTEXTO — "Plataforma de autoatendimento para conectar estudantes a vagas de
    estágio privado — construída do zero dentro do ecossistema CIEE."
  - DESAFIO — "Escopo e nome trocados repetidas vezes pela diretoria, sem briefing
    formal e sem discovery no ciclo inicial."
  - MINHA ATUAÇÃO — "100% do design: design system, fluxos, telas e documentação — e a
    liderança do projeto assumida no vácuo de gestão."

### 02 — Os Fluxos · "Conversa com guarda-corpos"

- Título: "Conversa livre, *fluxo guiado.*"
- Corpo: "A interface principal é uma IA conversacional: o usuário fala livremente, a IA
  responde — e reconduz de volta ao fluxo estruturado. Liberdade na superfície,
  previsibilidade na jornada."
- Card "OS QUATRO FLUXOS CENTRAIS":
  - FLUXO 01 **Vaga via chat** — "A empresa publica a vaga conversando com a IA — sem formulário."
  - FLUXO 02 **Currículo guiado** — "O estudante monta o perfil no mesmo chat, passo a passo."
  - FLUXO 03 **Match com score** — "Like mútuo + compatibilidade 0-100 calculado por IA."
  - FLUXO 04 **Entrevista embutida** — "Vídeo na própria plataforma e contrato TCE assinado digitalmente."
- Destaque: "**3** fluxogramas conversacionais — 88, 93 e 139 nós."
- ⚠️ Dois Screen Slots vazios: `[ colar tela real aqui ]`, moldura `jobiee.ciee.com.br`

### 03 — O Sistema · "O design system"

- Título: "Um sistema *para conversas.*"
- Corpo: "48 component sets e 223 componentes — incluindo um kit conversacional
  proprietário, raro em design systems de mercado: bolhas por persona, escolhas dentro
  do chat, upload, mídia e variante WhatsApp."
- Números: **223** componentes · **48** component sets
- Lista:
  - "Kit conversacional completo — do web ao WhatsApp"
  - "Responsividade por variável: 393, 768 e 1080 trocados por modo"
  - "Documentação com specs e red-lines para o dev"
  - "Cores com nomes poéticos em PT-BR — Violeta Real, Noite Estrelada"
- ⚠️ Um Screen Slot vazio

### 04 — O Impacto · "Instrumentado antes de lançar"

- Título: "Medir antes *de lançar.*"
- Corpo: "Saí no pré-lançamento controlado em Goiânia — antes dos números finais. O que
  ficou foi um produto no ar e um sistema de medição pronto para provar a hipótese central."
- Quatro pilares:
  - PILAR 01 **Hipótese central** — "Contratação 30% mais rápida que o baseline do sistema legado, medida via OpenSearch."
  - PILAR 02 **Funil instrumentado** — "GA, Hotjar, OpenSearch e Kibana cobrindo a jornada ponta a ponta."
  - PILAR 03 **Rodada de testes** — "17 usuários internos, 92 achados priorizados, 33 correções antes do beta."
  - PILAR 04 **Pesquisa por dados** — "Churn acima de 20 p.p. numa etapa dispara investigação qualitativa."
- Card "O que ficou de pé":
  - "Produto no ar em jobiee.ciee.com.br"
  - "Design system completo e documentado"
  - "190 telas + 45 modais entregues"
  - "Jornada ponta a ponta: do chat ao contrato assinado"
- Citação: "O produto mudou de nome três vezes. O design entregou uma vez só — inteiro."

---

## 4. Inventário da página

`12:2` V1 Home (a que virou o site) · `65:2` V2 Home · `79:2` V3 Home ·
`11:2` PDF do portfólio antigo · `83:2` a `86:2` estados do discovery V3 ·
`95:2` banner de correção do tempo de experiência · `105:419` background de constelações ·
24 frames de case (Zapflix, Confidencial, Convex Mindset, Design Thinking, Discovery Flow,
Jobiee — quatro capítulos cada) · `200:11652` home com Jobiee.
