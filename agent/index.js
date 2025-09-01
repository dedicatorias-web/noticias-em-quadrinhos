const { buscarNoticia } = require("./buscarNoticia");
const { gerarRoteiro } = require("./gerarRoteiro");
const { salvarHQ } = require("./salvarHQ");

async function executar() {
  try {
    const noticia = await buscarNoticia();
    const roteiro = gerarRoteiro(noticia);

    const hoje = new Date().toISOString().split("T")[0];
    const nomeImagem = `HQ-${hoje}.png`; // imagem será gerada depois

    await salvarHQ(noticia, roteiro, nomeImagem);

    console.log("✅ Roteiro gerado e HQ salva com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao executar agente:", error);
    process.exit(1);
  }
}

executar();
