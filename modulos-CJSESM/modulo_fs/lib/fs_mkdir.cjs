// IMPORT E FS E PATCH
const fs = require("fs");
const path = require("path");

function criarPasta(nomePasta) {
  fs.mkdir(nomePasta, function(err) {
    console.log("Errouuuu: \n" + err)
  })
}
function criarPastaDinamica(nomePasta) {
  try {
    if (!fs.existsSync(path.join(__dirname, nomePasta))) {
      fs.mkdirSync(path.join(__dirname, nomePasta));
      console.log(`Pasta ${nomePasta} foi criado com sucesso`)
    } else {
      console.log(`Pasta ${nomePasta} já existe`)
    }
  } catch (err) {
    console.log("Errooouuu::-------- \n")
    console.log("Impossivel criar a pasta" + nomePasta)
    console.log("err: " + err)
  }
}
module.exports = { criarPasta, criarPastaDinamica }