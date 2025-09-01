const fs = require('fs');
const path = require('path');

async function gerarImagemHQ(noticia) {
  // Aqui você pode integrar com IA futuramente
  const nomeImagem = 'HQ.png';

  // Simula que a imagem foi gerada e salva
  const caminho = path.join(__dirname, '..', 'public', nomeImagem);
  fs.copyFileSync(path.join(__dirname, 'modelo.png'), caminho);

  return nomeImagem;
}

module.exports = { gerarImagemHQ };
