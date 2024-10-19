function dizOla() {
  console.log("Olá");
}

dizOla();
function olaPessoa(nome) {
  console.log(`Olá, ${nome}`);
}
const nome = "José";
const idade = 32;

function retornaDados() {
  return `Nome: ${nome} - Idade: ${idade}`;
}

// dizOla();
// olaPessoa("Raimundinha");
// console.log(retornaDados());

//FUNÇÕES PERSONALIZADAS VS FUNÇÕES NATIVAS
let salario = 1000
const intervalo1 = setInterval(function() {
  console.clear();
 salario = salario + 10000000000;
  console.log(`Ganhei  ${salario}`)
}, 2000);
/*
setInterval - clearInterval
setTimeout - clearTimeout
*/
setTimeout(function () {
  console.log("-------------");
  clearInterval(intervalo1);
  console.info("intervalo encerrado");
}, 5000);

