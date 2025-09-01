const fs = require('fs');
const path = require('path');

const hoje = new Date().toISOString().split('T')[0];
const hq = {
  titulo: "Ataque Hacker no Pix",
  descricao: "Desvio de R$ 420 milhões levanta alerta sobre segurança digital.",
  imagem: `imagens/HQ-${hoje}.png`,
  legenda: "Banco Central bloqueia R$ 350 milhões após ataque cibernético.",
  fonte: "https://g1.globo.com/"
};

// Salva na pasta docs
fs.writeFileSync(path.join(__dirname, '..', 'docs', 'data.json'), JSON.stringify(hq, null, 2));
fs.writeFileSync(path.join(__dirname, '..', 'docs', 'hqs', `${hoje}.json`), JSON.stringify(hq, null, 2));
