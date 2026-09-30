# Casa da Leitura — Experiência Prática III

Casa da Leitura · Setembro de 2026

SPA da ONG fictícia Casa da Leitura. Demonstra navegação por hash, componentes Vue 3.5.18, templates dinâmicos, manipulação do DOM, eventos, validação de formulário e armazenamento local de preferências. Nome e e-mail são usados só para validação local; não são salvos nem enviados.

## Executar

```sh
npm run dev
```

Abra o endereço mostrado pelo Vite e use `html/index.html` como entrada. Para gerar os arquivos de distribuição, execute `npm run build`. O resultado fica em `dist/`. Abra `dist/html/index.html` no navegador ou sirva a pasta por um servidor estático. A biblioteca Vue está incluída em `js/vendor/`.

## Estrutura

- `html/`: ponto de entrada da SPA.
- `css/`: apresentação responsiva e estados de validação.
- `imagens/`: ilustração em SVG, WebP, JPEG e PNG.
- `js/main.js`: componente principal e rotas.
- `js/modules/data.js`: conteúdo das iniciativas.
- `js/modules/validation.js`: validação do formulário.
- `js/modules/storage.js`: leitura e gravação de interesses no localStorage.

O projeto é demonstrativo. Não recebe dados pessoais, doações ou pagamentos. Para apagar os interesses, remova-os pela interface ou limpe o armazenamento local do navegador.
