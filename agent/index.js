const { buscarNoticia } = require("./buscarNoticia");
const { gerarRoteiro } = require("./gerarRoteiro");
const { salvarHQ } = require("./salvarHQ");
const { baixarImagem } = require("./gerarImagem");

async function executar() {
  const noticia = await buscarNoticia();
  const roteiro = gerarRoteiro(noticia);

  const hoje = new Date().toISOString().split("T")[0];
  const nomeImagem = `HQ-${hoje}.png`;

  // URL da imagem gerada por IA (substitua pela sua imagem gerada)
  const urlImagem = "https://copilot.microsoft.com/th/id/BCO.73022c02-25b3-413f-86f8-9649db93675b.png";

  await baixarImagem(urlImagem, nomeImagem);
  await salvarHQ(noticia, roteiro, nomeImagem);

  console.log("✅ HQ gerada, imagem salva e site atualizado!");
}

executar();
