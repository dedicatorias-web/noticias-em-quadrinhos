
// agent/gerarRoteiro.js
function gerarRoteiro(noticia) {
  return [
    { quadro: 1, texto: `Cena inicial: ${noticia.descricao}` },
    { quadro: 2, texto: `Conflito: O impacto da notícia se espalha.` },
    { quadro: 3, texto: `Reação: Autoridades e público respondem.` },
    { quadro: 4, texto: `Reflexão: O que isso revela sobre nosso tempo?` }
  ];
}

module.exports = { gerarRoteiro };
