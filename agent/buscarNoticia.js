// agent/buscarNoticia.js
const fetch = require("node-fetch");
const { parseStringPromise } = require("xml2js");

async function buscarNoticia() {
  const url = "https://g1.globo.com/rss/g1/";
  const response = await fetch(url);
  const xml = await response.text();
  const parsed = await parseStringPromise(xml);

  const item = parsed.rss.channel[0].item[0]; // notícia mais recente
  return {
    titulo: item.title[0],
    link: item.link[0],
    descricao: item.description[0]
  };
}

module.exports = { buscarNoticia };
