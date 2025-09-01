function gerarRoteiro(noticia) {
  return [
    `Cena inicial: ${noticia.descricao}`,
    "Conflito: O impacto da notícia se espalha.",
    "Reação: Autoridades e público respondem.",
    "Reflexão: O que isso revela sobre nosso tempo?"
  ];
}

module.exports = { gerarRoteiro };
