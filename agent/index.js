const { gerarImagemHQ } = require('./gerarImagem');
const { atualizarJson } = require('./atualizarJson');

async function executarAgente() {
  const noticia = {
    titulo: "Ataque Hacker no Pix",
    descricao: "Desvio de R$ 420 milhões levanta alerta sobre segurança digital.",
    legenda: "Banco Central bloqueia R$ 350 milhões após ataque cibernético.",
    fonte: "https://g1.globo.com/"
  };

  const imagemGerada = await gerarImagemHQ(noticia);
  await atualizarJson(noticia, imagemGerada);
  console.log("✅ HQ atualizada com sucesso!");
}

executarAgente();
