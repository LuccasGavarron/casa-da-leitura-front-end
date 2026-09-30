# Casa da Leitura — Experiência Prática III

Casa da Leitura · Setembro de 2026

SPA da ONG fictícia Casa da Leitura. Demonstra navegação por hash, componentes Vue 3.5.18, templates dinâmicos, manipulação do DOM, eventos, validação de formulário e armazenamento local de preferências. Nome e e-mail são usados só para validação local; não são salvos nem enviados.

## Executar

```sh
npm install
npm run dev
```

Abra `http://localhost:8766/html/index.html` após executar o servidor. Para gerar os arquivos de distribuição minificados, execute `npm run build`. O script usa Terser para reduzir o JavaScript da aplicação. O resultado fica em `dist/`. Abra `dist/html/index.html` no navegador ou sirva a pasta por um servidor estático. A biblioteca Vue está incluída em `js/vendor/`.

## Estrutura

- `html/`: ponto de entrada da SPA.
- `css/`: apresentação responsiva e estados de validação.
- `imagens/`: ilustração em SVG, WebP, JPEG e PNG.
- `js/main.js`: componente principal e rotas.
- `js/modules/data.js`: conteúdo das iniciativas.
- `js/modules/validation.js`: validação do formulário.
- `js/modules/storage.js`: leitura e gravação de interesses no localStorage.

O projeto é demonstrativo. Não recebe dados pessoais, doações ou pagamentos. Para apagar os interesses, remova-os pela interface ou limpe o armazenamento local do navegador.

A revisão de acessibilidade e seus limites estão em [ACESSIBILIDADE.md](ACESSIBILIDADE.md).

## Publicação e versionamento

Site publicado: https://luccasgavarron.github.io/casa-da-leitura-front-end/

O trabalho usa `main` para versões entregues, `develop` para integração, branches `feature/` para alterações isoladas, `release/1.0.0` para preparar a primeira entrega e `gh-pages` para servir a pasta `dist/`. A integração da auditoria ocorreu no [PR #1](https://github.com/LuccasGavarron/casa-da-leitura-front-end/pull/1). As tags `v1.0.0`, `v1.0.1` e `v1.0.2` registram as versões publicadas.

## Verificação

Execute `npm run build` e teste as rotas, o formulário e a navegação por teclado no navegador. O relatório [ACESSIBILIDADE.md](ACESSIBILIDADE.md) registra os contrastes avaliados, a revisão manual e os limites dessa verificação.
