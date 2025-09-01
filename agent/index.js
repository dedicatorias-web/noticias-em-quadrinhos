const { buscarNoticia } = require("./buscarNoticia");
const { gerarRoteiro } = require("./gerarRoteiro");
const { salvarHQ } = require("./salvarHQ");
const { gerarImagem } = require("./gerarImagem");

async function executar() {
  const noticia = await buscarNoticia();
  const roteiro = gerarRoteiro(noticia);
  const hoje = new Date().toISOString().split("T")[0];
  const nomeImagem = `HQ-${hoje}.png`;

  const imagemGerada = await gerarImagem(roteiro, nomeImagem);
  await salvarHQ(noticia, roteiro, imagemGerada);

  console.log("✅ HQ gerada, imagem criada e site atualizado!");
}

executar();
