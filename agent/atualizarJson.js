const fs = require('fs');
const path = require('path');

function atualizarJson(noticia, imagem) {
  const data = {
    titulo: noticia.titulo,
    descricao: noticia.descricao,
    imagem: imagem,
    legenda: noticia.legenda,
    fonte: noticia.fonte
  };

  const caminho = path.join(__dirname, '..', 'data.json');
  fs.writeFileSync(caminho, JSON.stringify(data, null, 2));
}

module.exports = { atualizarJson };
