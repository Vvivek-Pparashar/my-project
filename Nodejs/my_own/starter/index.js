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

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`);
const dataObj = JSON.parse(data);

const server = http.createServer((req, res)=>{
    const pathName = req.url;

    if(pathName === "/overview" || pathName === '/') res.end("this is overview");
    else if(pathName === '/product') res.end('this is product');
    else if(pathName === '/api')  {   
        res.writeHead(200, {    'content-type' : 'application/json',    })
        res.end(data);   
    }
    else{    
        res.writeHead(404, {
            'content-head': 'text/html', 
            'my-own-header' : 'hello world'
        });
        res.end("<h1>Page not found</h1>");
    }
});

server.listen(8000, '127.0.0.1', ()=>{
    console.log('listening to request');
})
