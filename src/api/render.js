const puppeteer = require('puppeteer');

module.exports = async (req, res) => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.goto(`https://${req.headers.host}${req.url}`, {
    waitUntil: 'networkidle0',
  });

  const html = await page.content();
  await browser.close();

  res.setHeader('Content-Type', 'text/html');
  res.send(html);
};
