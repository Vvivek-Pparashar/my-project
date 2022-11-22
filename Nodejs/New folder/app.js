const http = require('http');
const {readFileSync}  = require('fs');

const homePage = readFileSync('./index.html', 'utf-8');

const server = http.createServer((req, res)=>{

  if(req.url === '/'){
    res.writeHead(200, {'content-type' : 'text/html'});
    res.end(homePage);
  }else{
    res.writeHead(200, {'content-type' : 'text/html'});
    res.end("vivek is gr8");
  }

})

server.listen(8000, '127.0.0.1', ()=>{
  console.log("hahah")
})