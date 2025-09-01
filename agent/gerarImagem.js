const fs = require("fs");
const path = require("path");
const https = require("https");

async function gerarImagem(roteiro, nomeArquivo) {
  // Simula geração de imagem com IA usando uma imagem de exemplo
  const urlImagem = "https://copilot.microsoft.com/th/id/BCO.73022c02-25b3-413f-86f8-9649db93675b.png";
  const destino = path.join(__dirname, "..", "docs", "imagens", nomeArquivo);

  return new Promise((resolve, reject) => {
    https.get(urlImagem, response => {
      const file = fs.createWriteStream(destino);
      response.pipe(file);
      file.on("finish", () => {
        file.close(() => resolve(nomeArquivo));
      });
    }).on("error", reject);
  });
}

module.exports = { gerarImagem }; 
