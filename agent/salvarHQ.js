const fs = require("fs");
const path = require("path");

function salvarHQ(noticia, roteiro, nomeImagem) {
  const hoje = new Date().toISOString().split("T")[0];
  const imagem = `imagens/${nomeImagem}`;

  const hq = {
    titulo: noticia.titulo,
    descricao: noticia.descricao,
    imagem,
    legenda: roteiro[2],
    fonte: noticia.link
  };

  const hqCompleta = {
    ...hq,
    roteiro
  };

  fs.writeFileSync(path.join(__dirname, "..", "docs", "data.json"), JSON.stringify(hq, null, 2));
  fs.writeFileSync(path.join(__dirname, "..", "docs", "hqs", `${hoje}.json`), JSON.stringify(hqCompleta, null, 2));
}

module.exports = { salvarHQ };
