// fs is file system.
//      1. reading and writing data.
//      2. this is inbuilt
// require is like import for node.js

// Blocking Way or The sync way.....

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = `vivek is gr8 because \ntoday he eat ${textIn}`;
// fs.writeFileSync('./txt/output.txt', textOut)

// Non-Blocking or Async way.....

// fs.readFile("./txt/start.txt", 'utf-8', (error, data1) =>{
//     if(error) return console.log('Error 👙👙');
//     fs.readFile(`./txt/${data1}.txt`, 'utf-8', (error, data2) =>{
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`, 'utf-8', (error, data3) =>{
//             console.log(data3);
//             fs.writeFile('./txt/final.txt', `${data1}\n${data2}\n${data3}`, 'utf-8', err=>{
//                 console.log('Your file has been written 👍👍😉😉');
//             })
//         })
//     })
// })

// console.log('reading the file')

const fs = require('fs');
const url = require('url');
const http = require('http');
const slugify = require('slugify');
const replaceTemplate = require('./modules/replace-template.js');
const { toUnicode } = require('punycode');

const tempOverview = fs.readFileSync(
    `${__dirname}/templates/template-overview.html`
);
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`);
const tempProduct = fs.readFileSync(
    `${__dirname}/templates/template-product.html`
);

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`);
const dataObj = JSON.parse(data);

const slug = dataObj.map((el) => slugify(el.productName, { lower: true }));
console.log(slug);
const server = http.createServer((req, res) => {
    const pathName = req.url;

    const { query, pathname } = url.parse(req.url, true);

    //  OVERVIEW PAGE
    if (pathname === '/overview' || pathname === '/') {
        res.writeHead(200, { 'content-type': 'text/html' });
        const cardsHTML = dataObj
            .map((el) => replaceTemplate(tempCard, el))
            .join('');

        const temp = tempOverview
            .toString()
            .replace(/{%PRODUCT_CARD%}/g, cardsHTML);
        res.end(temp);
    }

    //  PRODUCT PAGE
    else if (pathname === '/product') {
        const product = dataObj[query.id];
        console.log(query.id);
        const output = replaceTemplate(tempProduct, product);
        res.end(output);
    }

    //  API
    else if (pathname === '/api') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(data);
    }

    //  NOT FOUND
    else {
        res.writeHead(404, {
            'content-head': 'text/html',
            'my-own-header': 'hello world',
        });
        res.end('<h1>Page not found</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to request');
});
