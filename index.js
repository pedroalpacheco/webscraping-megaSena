const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://loterias.caixa.gov.br/wps/portal/loterias/landing/megasena');
  let html = await page.content()
  //console.log(html)
  const $ = await cheerio.load(html);
  let data =  $('#conteudoresultado > div.content-section.section-text.with-box.no-margin-bottom > div > h2 > span').text()
  let num1 = $('#ulDezenas > li:nth-child(1)').text()
  console.log(`Data e concurso: ${data}
  Numero1: ${num1}
  `)

  await browser.close();
})();