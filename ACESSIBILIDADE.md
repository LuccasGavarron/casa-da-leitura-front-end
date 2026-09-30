# Revisão de acessibilidade

Escopo: páginas e estados da aplicação Casa da Leitura, tendo a WCAG 2.1 nível AA como referência. Esta revisão manual não equivale a uma certificação completa.

## Verificações realizadas

- A navegação mantém links HTML, histórico do navegador e indicação `aria-current="page"`.
- O link “Pular para o conteúdo” leva o foco ao `main` sem alterar a rota ativa.
- Ao mudar de rota, o foco passa ao título `h1` correspondente.
- Os botões de interesse expõem o estado com `aria-pressed`.
- Os campos do formulário possuem rótulos e mensagens de erro associadas por `aria-describedby` e `aria-invalid`.
- A confirmação de ações usa `role="status"`.
- O texto, os links, os erros e o foco ultrapassam a razão 4,5:1 contra branco. As bordas dos campos têm razão 3,96:1.
- O layout usa uma coluna abaixo de 700 px; a regra `prefers-reduced-motion` desativa rolagem suave.

## Evidências e limites

Foram verificadas no navegador as rotas, o foco após navegação, o link de salto, os erros do formulário, o estado dos botões e a persistência após recarga. As razões de contraste foram calculadas a partir dos valores CSS. Ainda cabe uma auditoria com leitor de tela e em dispositivos móveis reais antes de afirmar conformidade integral com a WCAG.
