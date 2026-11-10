# OptiAleph — página de vendas

Site de apresentação e vendas do **OptiAleph**, sistema de gestão desktop para
óticas (repositório do produto: `otica-suite`). É uma página estática: HTML, CSS
e JavaScript puros, sem build e sem dependências.

## Estrutura

```
index.html            a página inteira
favicon.svg           logo Alef
assets/css/style.css  estilos (cores da marca no :root)
assets/js/config.js   contato (WhatsApp) — único arquivo a editar
assets/js/main.js     menu, galeria de telas, botões de contato
assets/img/           logo e capturas de tela (dados fictícios)
```

## Antes de publicar

1. **WhatsApp**: edite `assets/js/config.js` e preencha `whatsapp` (só dígitos,
   com país e DDD, ex.: `5585999990000`). Enquanto estiver vazio, os botões de
   contato levam à seção final e o site mostra um aviso.
2. **Preço**: a página não mostra valores de propósito. Se quiser, adicione na
   seção `#precos` do `index.html`.
3. **Domínio**: ao ter um domínio, inclua `<link rel="canonical">` e a URL
   absoluta em `og:image` no `<head>`.

## Ver no computador

Abra `index.html` no navegador, ou sirva a pasta:

```bash
npx serve .
```

## Publicar no GitHub Pages

Em *Settings → Pages*, escolha *Deploy from a branch*, branch `main`, pasta
`/ (root)`. (Em repositório privado, o Pages exige um plano pago do GitHub; em
repositório público é gratuito.)

## Capturas de tela

As imagens em `assets/img/` vêm da ótica fictícia "Ótica Visão Clara", sem
dados de clientes reais. Ao trocar uma captura, confira que ela não mostra nome,
CPF ou telefone de cliente de verdade.
