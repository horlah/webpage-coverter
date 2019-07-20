const puppeteer = require('puppeteer');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 8080;

async function getPDF (url, name) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'});

    await page.pdf({
        path: `docs/${name}.pdf`,
        format: 'A4'
    });

    await browser.close();
    return;
}

async function getScreenshot (url, name, format) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'});

    await page.screenshot({
        path: `docs/${name}.${format}`,
        fullPage: true,
        type: format
    });

    await browser.close();
    return;
}

app.get('/pdf', (req, res) => {
    getPDF(req.query.url, req.query.name).then(() =>{
        res.sendFile(__dirname + `/docs/${req.query.name}.pdf`);
    });
});

app.get('/screenshot', (req, res) => {
    getScreenshot(req.query.url, req.query.name, req.query.format).then(() =>{
        res.sendFile(__dirname + `/docs/${req.query.name}.${req.query.format}`);
    });
});

app.listen(port);
console.log('Magic happens on port ' + port);