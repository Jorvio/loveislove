# Juana & Davi — um cantinho nosso

Site estático feito em HTML + CSS + JavaScript.

## Estrutura
- `index.html` — conteúdo da página
- `style.css` — visual, responsividade e animações
- `script.js` — animações de entrada
- `assets/photos/` — fotos do casal
- `assets/decor/` — adesivos/ícones decorativos (os 21 estão sendo usados)

## Música
O botão da música abre diretamente o Spotify usando o link fornecido.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub (pode chamar `juana-davi`).
2. Envie todos os arquivos desta pasta mantendo as pastas `assets/photos` e `assets/decor`.
3. No GitHub: Settings → Pages.
4. Em Build and deployment, selecione `Deploy from a branch`.
5. Selecione `main` e `/ (root)`.
6. Salve e aguarde o GitHub gerar o endereço.

## Personalizar
O texto principal está no `index.html`. As fotos podem ser trocadas mantendo os mesmos nomes:
`foto-01.png` até `foto-07.png`.

## Adesivos de decoração
Cada seção do `index.html` tem um bloco `<div class="decor">` com as imagens dela.
Cada `<img>` tem uma classe `l` (esquerda) ou `r` (direita) e uma classe `d-nome`.
A posição de cada um fica no `style.css`, na regra `.d-nome{...}`:

- `--w` largura no computador · `--y` altura dentro da seção (%) · `--r` rotação
- `--c` posição na margem lateral (0 = perto do texto, 1 = na borda da tela)
- `--mw` / `--mx` / `--my` largura / distância da lateral / altura no celular e tablet

Para adicionar um adesivo novo: copie uma linha `<img class="decor-item l d-...">`, troque a
imagem e a classe, e crie a regra `.d-...` no CSS copiando uma existente.
Para remover: apague a linha `<img>` correspondente.
