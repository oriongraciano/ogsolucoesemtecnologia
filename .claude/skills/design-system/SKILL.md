---
name: design-system
description: Sistema de design e convenções de front-end do site institucional da OG Soluções em Tecnologia (glassmorphism dark-tech, paleta ciano/azul, Sora+Inter, breakpoints responsivos). Use ao editar Index.html, Css/style.css, main.js ou ao criar novas seções/páginas neste projeto.
---

# Design System — OG Soluções em Tecnologia

Este site foi modernizado mantendo a paleta e os dados originais, trocando o visual datado por uma linguagem "glass dark-tech". Qualquer novo trabalho de front-end aqui deve seguir estas convenções em vez de reinventar o padrão.

## Paleta (não alterar sem aprovação explícita)

```css
--white: #fff;
--dark1: #34344e;   /* superfície base */
--dark2: #3a415a;   /* superfície secundária (services, strategy) */
--dark3: #566981;
--dark4: #89a7b1;   /* texto muted / hover */
--dark5: #cbdad5;   /* texto suave sobre fundo escuro */
--dark6: #2f2f46;   /* fundo mais profundo (header, footer) */
--cyan1: #70e3ea;   /* acento — usar com moderação, é o elemento memorável */
```

Tons derivados para vidro/glow (não são "nova paleta", são a mesma paleta com alpha):
`--cyan-soft`, `--cyan-glow`, `--glass-bg`, `--glass-bg-strong`, `--glass-border`.

## Tipografia

- **Sora** (600/700) para `h1`/`h2`/`h3` — dá o caráter "tech" geométrico.
- **Inter** (400/500/600) para corpo de texto.
- Importar sempre via **HTTPS** (`https://fonts.googleapis.com/...`) — nunca HTTP, isso quebra como mixed content em produção (bug que já existiu aqui).
- Escala com `clamp()` para títulos, nunca `px` fixo.

## Linguagem visual

- **Glassmorphism sutil + glow ciano**, não o "kit de card genérico de SaaS" (sombra cinza `rgba(0,0,0,.1)` idêntica em tudo). Cards usam `var(--glass-bg)` + `var(--glass-border)` + `translateY` no hover, não box-shadow cinza.
- `border-radius` moderado: 14px (`--radius-md`, cards/inputs) ou 20px (`--radius-lg`, frames de imagem/modal). Não deixar tudo com o mesmo raio só por padrão.
- O elemento memorável do hero é o grafo SVG de nós conectados (metáfora de integração/automação, não um mockup de notebook genérico). Se reformular o hero, mantenha um elemento visual com significado real para o negócio, não decoração aleatória.
- Motion: apenas **um momento orquestrado** (o desenho das linhas do grafo no load do hero). Hover simples no resto. Sempre respeitar `prefers-reduced-motion: reduce` — a base do CSS já zera as animações nesse caso.
- Evitar clichês de "página gerada por IA": sem eyebrow label em CAPS, sem `—` decorativo, sem numeração 01/02/03 em listas que não são sequência (ex.: lista de serviços não é um passo a passo).

## Componentes padrão

- **Header**: fixo, `backdrop-filter: blur(14px)`, `nav` com indicador `::after` animado no hover. `.nav-toggle` (hambúrguer) aparece só em `max-width: 768px`, controla `nav.is-open` via `aria-expanded`.
- **Modal**: `.modal` + `.modal-overlay`. Fecha com Esc, clique no overlay ou botão `#close-modal`. Ao abrir, foca o primeiro input e trava `document.body.style.overflow`. Ver `main.js`.
- **Botões**: `.btn-action.btn-primary` (gradiente ciano, texto escuro — ação principal) vs `.btn-action.btn-ghost`/`.btn-secondary` (outline glass — ação secundária). Mantenha essa hierarquia visual: nunca dois botões primários lado a lado.
- **Cards** (`.service-card`): ícone em `.service-icon` (SVG `stroke="currentColor"`, 1.6 de espessura), título, uma linha de descrição curta e direta (sem enrolação de marketing).

## Breakpoints

| Largura | Responsabilidade |
|---|---|
| `960px` | Hero e about virram coluna única, footer vira 1 coluna |
| `768px` | Header assume o menu hambúrguer; `nav` passa a ocupar linha própria (`flex-basis: 100%`) |
| `560px` | Paddings de seção encolhem, CTAs do hero empilham em 100% de largura, inputs do modal a `16px` (evita zoom automático no Safari iOS) |
| `380px` | Ajustes finos de logo/botões para telas bem estreitas |

### Gotcha conhecido: header cortando o `h1` do hero no mobile

O header é `position: fixed` e pode **quebrar em duas linhas** em telas estreitas (logo + toggle + botões "Cadastrar"/"Fazer Login" não cabem numa linha só). Se isso acontecer, o header fica mais alto do que o `padding-top` do `.hero` previa, e o header cobre o "Olá!...".

Por isso o `padding-top` do `.hero` tem margem de segurança generosa nos breakpoints pequenos:
- `≤560px` → `9rem`
- `≤380px` → `11rem`

**Não reduza esses valores sem testar em uma tela real ≤380px de largura.** Se precisar de mais espaço ainda, aumente o `padding-top`, não remova a margem de segurança.

## Política de bugs

Ao editar HTML/CSS/JS deste projeto, corrija bugs estruturais que encontrar pelo caminho em vez de deixar para depois (foi a abordagem adotada na modernização): `id` duplicado, `font-size` com valor inválido, `@import` em HTTP, falta de `box-sizing: border-box`, imagens sem `alt`/`width`/`height`, inputs que disparam zoom no iOS.

## Dados que não podem ser alterados sem perguntar

Textos de "Quem Somos", lista de serviços, telefone/e-mail de contato, links e logos de clientes ("Marcas que confiam em nós") são conteúdo do negócio — não decoração. Pode reestruturar a apresentação (cards, chips, grid), mas não reescrever ou remover a substância sem confirmar com o usuário.

## Ponto de atenção pendente (não resolvido, só identificado)

O e-mail `ogsolucoesemtecnologia@gmail.com` está exposto em texto puro no `action` do formulário (`formsubmit.co/<email>`), o que facilita scraping de spam. O FormSubmit oferece um endpoint com hash para evitar isso — trocar apenas se o usuário pedir, pois exige reativação do novo endpoint por e-mail.
