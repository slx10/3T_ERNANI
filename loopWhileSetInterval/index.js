// LOOP WHILE É UM CICLO DE REPETIÇÃO QUE PODE SER PARADO ATRAVÉS DE UMA CONDIÇÃO 
// O SETINTERVAL É UM CICLO DE REPETIÇÃO QUE EXECUTA UM CÓDIGO TEMPOS EM TEMPOS (INTERVALOS EM MILESEGUNDOS)

const intervalo = setInterval(function () {
//DEFINO FUNÇÃO INTERVALO
// let n = (Math.random() * 60).toFixed(!)
let n = Math.round(Math.random() * 60); //UM NÚMERO ALEATÓRIO DE 0 A 60
console.clear(); //LIMPO A TELA
console.log(`FPS: ${n}`); //IMPRIMO O RES8ULTADO
}, 1000);  //1 segundo em milesegundos

//clearInterval(intervalo) CONSIGO PARAR

