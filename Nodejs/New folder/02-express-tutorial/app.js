const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'))

app.get("/", (req, res)=>{
  console.log(req.url);
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))  

})

app.all("*", (req, res)=>{
  console.log(req.url);
  res.status(404).send("fuck you 🤜🤛")
})

app.listen(5000, ()=>{
  console.log("vivek is gr8")
})