/*
let i = 0 // começo
while (i <=3) { // enquanto a condição "i" for menor ou igual a 9 
    console.log("loop:", i) // executa console
    i++ // incrementa o interador
}
 let estomago = 0 // começo

 while(estomago <100) {
    console.log("Quero comer mais coxinhas:", estomago)
    estomago = estomago += 10
 }
 
let numero
let soma = 0 
while (numero!==0) {
    numero = Number(prompt("digite um numero"))
    soma += numero
}
console.log(soma,numero)

let c = 1
do {
  
    console.log("O valor de C é:", c )
      c++
} while(c <= 6)


for(let i = 0;i <=9; i++){

console.log("O valor de i é:", i)
}
const numeros = [14, 67, 89, 15, 23]
for(let i = 0; i < 5; i++) {
    const elemento = numeros [i]
    console.log (elemento)
}
let meuArray = [10, 4, 7, 8, 200, 77]
for(let i=0; i<6; i++){
    console.log(meuArray[i])
    
}
const numeros = [11, 15, 18, 14, 12, 13]
let maior = numeros[0]
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i]
  }
}
console.log("O maior número é " + maior)
*/



const numeros = [11, 15, 18, 14, 12, 13]
let soma = 0


for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    soma = soma + numeros[i]
  }
}

console.log("A soma dos números pares é: " + soma)

const numeros2 = [100, 7, 4, 8, 10, 3, 30, 777, 2000]
for (let numero of numeros2) {
    console.log (numero)
}

   



let palavras = ["oi", "sumido", "tudo", "bem?", "saudade"]

let mensagem = ""

for (let i = 0; i < palavras.length; i++) {
  mensagem = mensagem + palavras[i] + " "
}

console.log(mensagem)

let valor = 0
for (let i = 0; i <5; i++) { 
    valor += i 
}
console.log(valor)
// os valores até 5 se soman oq resulta no 10 "0+1+2+3+4=10"


const quantidadeTotal = Number(prompt("Digite a quantidade de linhas:"))
let quantidadeAtual = 0
while (quantidadeAtual < quantidadeTotal){
  let linha = ""
for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
  linha += "*"
}
console.log(linha)
quantidadeAtual++
}
// ira aparecer linha em forma crescente ate dar 4 asteriscos 
// *, **, ***, ****, desse jeito, porem um embaixo do outro

let arrayOriginal = [10, 20, 20, 40, 50, 60, 70]
for (let numero of arrayOriginal) {
  console.log(arrayOriginal)
} for (let numero of arrayOriginal) {
  console.log(numero/10)
}


