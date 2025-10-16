/*
let condicao1 = true
let condicao2 = true
    
if(condicao1&&condicao2){
    console.log ("Executou o if do operador && AND")
}
if(condicao1||condicao2){
    console.log ("executou o if do operador || OR")
}   
if(!condicao1){
    console.log ("Executou o if do operador ! NOT")
}   
*/
const repostaDoUsario = prompt ("Digite o número que você quer testar")
const numero = Number(repostaDoUsario)
if (numero % 2 === 0) {
    console.log ("passou no teste.")
} else {
    console.log ("não passou no teste.")
}
// no codigo é mostrado se o numero é impar ou par "0" é dito como par ,somente numeros pares sao validos
// imprime somente quando for par
//caso ao contrario no caso se for impar ele imprime a frase "nao passou  o teste"
 