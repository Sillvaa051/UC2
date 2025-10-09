/*const racaCachorro = ["Pastor Alemão", "Pitbull", "lulu","Pinscher", "Salchicha"]
const numeroEscolha = prompt ("Escolha um numero de 0 a 4")
console.log( racaCachorro[numeroEscolha])

const pokemon = ["Scptile","Blazekin", "yveltal"]
console.log (pokemon.length)

const numeros = [1,2,3]

numeros.push(4)
console.log(numeros)

numeros.push[5,6,7]
console.log(numeros)
                                   
const meusPeixes = ["Palhaço","Mandari m", "esturjão"] 
meusPeixes.pop()
console.log (meusPeixes)
meusPeixes.pop()
console.log (meusPeixes)

const letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
letras.splice(2, 1)
console.log (letras)

const numero1 = ["1","2","3","4","5","6"]
console.log (numero1.length)
numero1.push("7")
console.log(numero1)
numero1.splice(3,2)
console.logo(numero1)
*/
const usuario = prompt ("Digite seu Nome de usuario")
const email = prompt ("Digite seu email")
console.log (email,"foi cadastrado com sucesso. seja bem-vinda(o)",usuario)

let comidaFav= ["Lasanha","Risoto","Churrasco","Sushi","Xis","Pizza"]
const comidaFav2 = prompt ("fale sua comida Favorita")
console.log( comidaFav,comidaFav2)
comidaFav[1] = comidaFav2
/*
let atividade1 = prompt("Me fale uma atividade que voce precisa realizar no seu dia.")
let atividade2 = prompt("Me fale outra atividade que voce precisa realizar no seu dia")
let atividade3 = prompt("Me fale outra atividade que voce precisa realizar no seu dia")
let listaDeTarefas = [atividade1,atividade2,atividade3]
console.log(listaDeTarefas)
let indice = prompt("Digite o indice da tarefa que voce ja realizou hoje.")
listaDeTarefas.pop(indice)
console.log(listaDeTarefas)
//
//
/*
let array
console.log("a.", array) // é undefined pq nd guardado


array = null
console.log("b.", array) // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 
console.log("c.", array.length) // 11

let i = 0
console.log("d.", array[i]) // 3

array[i+1] = 19 // 
console.log("e.", array) // [3, antes 4 porém vira 19 pq foi substituido na array , 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6] //i é = a 3 e 3+6 é 9
console.log("f.", valor)//9   
//
//
const frase = prompt("Digite uma frase") //Abre uma caixa para o Usuário preencher

console.log(frase.toUpperCase().replaceAll("A","I"), (frase.length)) //Imprime a frase do usuário com todas as letras Maiúsculas e trocando o "A" pelo "I" além de imprimir o tamanho(Quantidade de letras, contando espaços)
//Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"
//"SUBI NUM ÔNIBUS EM MIRROCOS" "27"

*/
// 3
const frase = prompt ("digite uma frase")
let palavras = frase.split(" ")

console.log(" ")
console.log(palavras)
// 4
let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
let indiceDoAbacaxi = frutas.indexOf("Abacaxi")
let tamanhoDaArray = frutas.length

console.log("Índice de Abacaxi:", indiceDoAbacaxi)
console.log("Tamanho do array de frutas:", tamanhoDaArray)

