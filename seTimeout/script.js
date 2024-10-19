let n = 0
const intervalo1 = setInterval(function() {
  console.clear()
  console.log("Contador: " + n)
  n = n + 1
}, 1000)
// SetTimeout - espere e depois execute
setTimeout(function() {  // Executa apenas 1 vez 
  clearInterval(intervalo1)
  window.alert("Redirecionado")
  location.href = "https://www.youtube.com/"
}, 5000)
