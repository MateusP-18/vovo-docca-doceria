# Vovó Docca Doceria — Landing Page

Landing page institucional para a **Vovó Docca Doceria**, doceria localizada no Centro de Guaramiranga — CE. Desenvolvida com o Método bombT START: site leve, responsivo e otimizado para SEO local, construído a partir de materiais reais fornecidos pelo cliente (logo, fotografias do espaço e dos produtos, e dados de contato/localização).

Instagram oficial: [@vovodoccaguaramiranga](https://www.instagram.com/vovodoccaguaramiranga/)

---

## Sobre o projeto

O objetivo do site é transmitir, antes mesmo da visita física, a atmosfera de aconchego, delicadeza e memória afetiva da Vovó Docca: um Hero em slideshow com fotos reais da fachada e do interior, a história da doceria, atalhos rápidos para localização/cardápio/contato, mapa e botão de rotas, uma prévia do cardápio com link para o cardápio digital completo, e uma galeria de fotos reais do espaço.

Nenhuma informação comercial (produtos, preços, horários, depoimentos) foi inventada — apenas o que constava nos materiais fornecidos foi utilizado.

---

## Tecnologias

- **HTML5** semântico
- **CSS3** puro (sem framework), com custom properties (variáveis), CSS Grid e Flexbox
- **JavaScript** puro (vanilla, sem dependências/bibliotecas)
- **Google Fonts** (via CDN): Cormorant Garamond, Pinyon Script, Jost
- **Google Maps Embed** (iframe) para o mapa de localização
- **Schema.org / JSON-LD** para SEO local

Não há processo de build, bundler ou framework — o projeto é servido como arquivos estáticos.

---

## Estrutura de pastas

```
vovo-docca-doceria/
├── index.html              # Página única da landing page
├── README.md                # Este arquivo
├── robots.txt                # Diretivas para crawlers
├── sitemap.xml                # Sitemap para SEO
├── .gitignore
├── css/
│   └── styles.css            # Todo o CSS do site
├── js/
│   └── main.js                # Toda a interatividade (menu, slideshow, lightbox, etc.)
└── assets/
    ├── images/                # Fotos reais da doceria (fachada, interior, produtos) + logo
    └── icons/                 # Favicon, ícones de app e manifest.json
```

O HTML, CSS e JavaScript estão separados em arquivos próprios para facilitar manutenção. Todos os caminhos de imagem no HTML e no CSS são relativos ao projeto (`assets/images/...`), sem nenhuma referência a caminhos locais de máquina.

---

## Execução local

Não é necessário instalar nada. Basta servir a pasta como arquivos estáticos:

**Opção 1 — abrir direto no navegador**
Dê duplo clique em `index.html`. Funciona para navegação geral, mas alguns navegadores restringem `fetch`/clipboard em `file://`; para testar 100% das funcionalidades, prefira a opção 2.

**Opção 2 — servidor local simples**
```bash
cd vovo-docca-doceria
python3 -m http.server 8000
```
Depois acesse `http://localhost:8000`.

**Opção 3 — extensão "Live Server" (VS Code)**
Clique com o botão direito em `index.html` → "Open with Live Server".

---

## Dependências / serviços externos

O site é 100% estático, mas carrega os seguintes recursos externos em tempo de execução (exigem conexão com a internet):

- **Google Fonts** — `fonts.googleapis.com` / `fonts.gstatic.com` (tipografia)
- **Google Maps Embed** — `google.com/maps` (iframe do mapa na seção Localização)
- Link externo para o **cardápio digital completo**, hospedado no Canva: `https://fokusdevisemidia.my.canva.site/`
- Link externo para o **Instagram** oficial: `https://www.instagram.com/vovodoccaguaramiranga/`

Nenhuma chave de API, credencial ou serviço pago é utilizado.

---

## SEO

Implementações realizadas em `index.html`:

- `<title>` único e descritivo: "Vovó Docca Doceria | Doceria em Guaramiranga - CE"
- `meta description` natural, com termos de SEO local (Vovó Docca, doceria, Guaramiranga, doces, experiência)
- `link rel="canonical"` (⚠️ ver aviso sobre domínio abaixo)
- Open Graph completo: `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:locale`
- JSON-LD (`schema.org/BakeryOrCafe`) com nome, endereço estruturado (NAP), telefone, imagem e link do Instagram — usando **apenas dados confirmados** nos materiais fornecidos
- `sitemap.xml` e `robots.txt` na raiz do projeto
- `alt text` descritivo em todas as imagens de conteúdo
- Hierarquia de headings: um único `<h1>` no Hero, `<h2>` por seção, `<h3>` para subitens
- Nomes de arquivo de imagem descritivos (ex.: `hero-fachada-placa.jpg`, `historia-ursos-poltrona.jpg`) em vez de nomes genéricos de câmera/print

**⚠️ Aviso sobre o domínio:** o site usa `https://vovodoccadoceria.com.br/` como **domínio placeholder** em `index.html` (canonical, Open Graph, JSON-LD), `sitemap.xml` e `robots.txt`. Esse domínio **não foi confirmado** como definitivo. Antes de publicar, substitua todas as ocorrências pela URL real do site (todas estão sinalizadas com comentários `<!-- ATENÇÃO -->` nos respectivos arquivos).

Também não foi incluído `priceRange` no JSON-LD, pois essa informação não constava nos materiais fornecidos — evitando dado comercial não confirmado.

---

## Acessibilidade

- HTML semântico (`header`, `nav`, `main`, `section`, `footer`)
- Link "Pular para o conteúdo" (skip link) para navegação por teclado
- Todas as imagens de conteúdo com `alt` descritivo; ícones decorativos com `aria-hidden`
- Contraste testado no header (texto claro sobre o Hero escuro; texto escuro quando o header fica sólido ao rolar)
- Foco visível customizado (`:focus-visible`) em links e botões
- Menu mobile com `aria-expanded`, `aria-controls` e `aria-label`
- Lightbox da galeria com `role="dialog"`, `aria-modal`, fechamento por tecla `Esc` e retorno de foco ao elemento de origem
- Botões semânticos (`<button>`) para ações interativas (menu, copiar endereço, fechar lightbox)
- `prefers-reduced-motion` respeitado: desativa o slideshow automático do Hero, a animação de scroll e suaviza as transições para quem prefere menos movimento

---

## Performance

- Nenhuma biblioteca ou framework externo — apenas HTML/CSS/JS puro
- Imagens redimensionadas e comprimidas (JPEG progressivo, ~70-78% de qualidade) antes de entrar no projeto — todas as imagens do site somam ~1,4 MB
- `loading="lazy"` em todas as imagens fora da primeira tela (história, cardápio, galeria)
- `preload` da primeira imagem do Hero (evita atraso na maior imagem visível)
- `preconnect` para os domínios do Google Fonts
- Slideshow do Hero via `background-image` com transição de opacidade (leve, sem JS de terceiros)
- CSS e JS únicos, sem duplicação de seletores

---

## Publicação

**GitHub**
```bash
cd vovo-docca-doceria
git init
git add .
git commit -m "Landing page Vovó Docca Doceria"
git branch -M main
git remote add origin <URL_DO_SEU_REPOSITORIO>
git push -u origin main
```

**Vercel**
1. Importe o repositório do GitHub em [vercel.com/new](https://vercel.com/new).
2. Como é um site estático (sem build), configure:
   - **Framework Preset:** "Other"
   - **Build Command:** deixe em branco
   - **Output Directory:** raiz do projeto (`.`)
3. Deploy.
4. **Antes ou depois do deploy**, atualize o domínio placeholder (`vovodoccadoceria.com.br`) em `index.html`, `sitemap.xml` e `robots.txt` pela URL real gerada pela Vercel ou pelo domínio próprio configurado.

---

## Manutenção

| O que alterar | Onde |
|---|---|
| Textos (história, cardápio, chamadas) | Diretamente no `index.html`, dentro de cada `<section>` (comentários `<!-- ===== NOME DA SEÇÃO ===== -->` indicam os blocos) |
| Imagens (Hero, história, cardápio, galeria) | Substituir os arquivos em `assets/images/` mantendo o mesmo nome, ou trocar o nome do arquivo referenciado no `index.html` |
| Elementos decorativos flutuantes (croissant, milkshake, urso na seção "Encontre seu caminho") | `assets/images/decor-*.webp` — posição, tamanho e opacidade em `css/styles.css`, bloco `.shortcuts-decor` / `.decor-croissant` / `.decor-milkshake` / `.decor-bear` |
| Cursores personalizados (seta rosa / coração rosa) | `assets/cursors/cursor-arrow.png` e `cursor-heart.png` — aplicados via CSS (`cursor: url(...)`) em `.shortcuts` (seta, hover geral) e `.shortcut-card` (coração, cards clicáveis) |
| Logo | `assets/images/logo-transparent.png` (usada no header e no footer) |
| Favicon / ícones do site | `assets/icons/` |
| Telefone / WhatsApp | Buscar por `+5585988383149` e `(85) 98838-3149` no `index.html` (aparece no header, na seção Localização, em Contato e no footer) |
| Endereço | Buscar por "R. Joaquim Alves Nogueira" no `index.html` (aparece no JSON-LD, na seção Localização e no footer) e no link do Google Maps/rotas |
| Instagram | Buscar por `vovodoccaguaramiranga` no `index.html` |
| Link do cardápio completo | Botão "Ver cardápio completo" na seção `#cardapio`, aponta para `https://fokusdevisemidia.my.canva.site/` |
| Cores, tipografia, espaçamentos | `css/styles.css` — variáveis no bloco `:root` no topo do arquivo (`--vinho`, `--rosa-claro`, `--rosa-antigo`, etc.) |
| Comportamento (menu, slideshow, lightbox, copiar endereço) | `js/main.js` |
| SEO (title, description, JSON-LD, sitemap) | `index.html` (bloco `<head>`) e `sitemap.xml` — **lembrar de atualizar o domínio placeholder**, ver seção SEO acima |

---

## Auditoria realizada nesta entrega

- ✅ Navegação por âncoras (`#inicio`, `#a-vovo-docca`, `#experiencia`, `#cardapio`, `#localizacao`, `#contato`) testada e funcional
- ✅ Menu mobile (abrir, fechar por link, fechar por clique fora) testado
- ✅ Slideshow do Hero e `prefers-reduced-motion` verificados
- ✅ Todas as imagens carregam corretamente (verificado após separação em `assets/`)
- ✅ Lightbox da galeria (abrir, fechar por `Esc` e por clique fora, retorno de foco) testado
- ✅ Botão "Copiar endereço" testado
- ✅ Botão "Como chegar" e mapa incorporado apontam para o endereço correto
- ✅ Links de telefone (`tel:`) e Instagram conferidos
- ✅ Responsividade sem overflow horizontal testada em 320px, 375px, 390px, 768px, 1024px e 1440px
- ✅ Nenhum arquivo duplicado ou não utilizado (logo com fundo removida do pacote final; mantida apenas a versão transparente, efetivamente usada)
- ✅ Nenhuma referência a caminho local de máquina — todos os caminhos são relativos ao projeto
- ✅ `priceRange` removido do JSON-LD por não haver fonte para esse dado
- ⚠️ **Pendência que depende de configuração externa:** domínio definitivo do site ainda não confirmado — placeholder `vovodoccadoceria.com.br` sinalizado com comentários em `index.html`, `sitemap.xml` e `robots.txt`; atualizar antes da publicação final
- ⚠️ Google Fonts e o iframe do Google Maps dependem de conexão com a internet em produção (comportamento esperado; não é um erro do projeto)
Homologação - GitHub Pages
