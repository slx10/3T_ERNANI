// arrays saoindexdos 
// possuem metodos 
// podem ser iterados
const nome = "Luis"
const time = ["Marcos","Raimundo","José","Luis","Maria"]

time.push("Chaves") // sempre no final da lista
time.shift() // remove alguem no inicio
console.log(time)
console.log(time[3])
console.log(time[15])
time[15] = "José"
console.log(time[15])
for(var i = 0; i <= 4; i++ ){
  console.log(time[i])
}