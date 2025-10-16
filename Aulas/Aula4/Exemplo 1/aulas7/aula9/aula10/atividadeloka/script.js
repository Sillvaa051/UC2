const valor1 = prompt ("Fale seu número de acessórios:")

const valor2 = prompt ("Digite o numero de cores:")
const valor3 = prompt ("de uma nota de 1 a 10:")
let resultado = (valor1*5)+(valor2*3)+(valor3*10)
console.log (resultado)
const metaPontuacao = 80
const resultado2 = (resultado>=metaPontuacao)
if (resultado2===true) {
console.log ("Aprovado")
}
else console.log("Reprovado")