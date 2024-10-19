const express = require('express')
const app = express()

const PORT = 33333
app.get("/", function (req,res) {
  res.send("Hello Pagina HOME")
});
app.get("/sobre", function (req, res) {
  res.send("<h1>Pagina Sobre</h1>");
}); 
        
app.listen(PORT, function () {
  console.log("Rodando n  a porta: " + PORT);
});w