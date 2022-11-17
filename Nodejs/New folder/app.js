const http = require('http');

const server = http.createServer((req, res)=>{
    console.log("vivek is gr8");
    // res.write('vivek parashar is gr8');
    res.end(`
    <h1>hlo</h1>`);
})

server.listen(8000, '127.0.0.1', () => {
    console.log('listening to request');
});

console.log("vivek")