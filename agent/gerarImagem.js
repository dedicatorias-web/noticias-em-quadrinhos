const fs = require("fs");
const path = require("path");
const https = require("https");

async function baixarImagem(url, nomeArquivo) {
  const destino = path.join(__dirname, "..", "docs", "imagens", nomeArquivo);
  return new Promise((resolve, reject) => {
    https.get(url, response => {
      const file = fs.createWriteStream(destino);
      response.pipe(file);
      file.on("finish", () => {
        file.close(resolve);
      });
    }).on("error", reject);
  });
}

module.exports = { baixarImagem };
