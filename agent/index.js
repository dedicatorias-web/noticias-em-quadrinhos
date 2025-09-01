// agent/index.js
const { buscarNoticia } = require("./buscarNoticia");
const { gerarRoteiro } = require("./gerarRoteiro");

async function executar() {
  const noticia = await buscarNoticia();
  const roteiro = gerarRoteiro(noticia);

  console.log("📰 Notícia:", noticia.titulo);
  console.log("🔗 Link:", noticia.link);
  console.log("📚 Roteiro:");
  roteiro.forEach(q => console.log(`Quadro ${q.quadro}: ${q.texto}`));
}

executar();
