/*function calculaArea(altura, largura) {
    const area = altura * largura
    console.log(area)
}
calculaArea(2,3)
function imprimirOlaMundo(){
    console.log("Olá Mundo")
}
imprimirOlaMundo()

for(let i=0; i<3; i++){
    imprimirOlaMundo()
}
*/
function imprimirBemVindo() {
    console.log("Bem-vindo Turma 25-2N")
}
imprimirBemVindo()

function imprimirValor(){
    console.log(2+4)
}
/*imprimirValor()


function imprimirCalculo(){
    const resultado = (20*2)
    console.log("O dobro de 20 é:", resultado)
}
imprimirCalculo()

function nome1(nomes){
    console.log("òla mundo",nomes)
}
let arrayNome=[ "João", "Leomar", "Vini"]
for(let nome of arrayNome){
    nome1(nome)
}
*/
// funçao global
const a = 1
function imprimeVariavel () { // começo da funçao local
const b = 2
console.log('Variável a', a)
console.log('Variável b', b)
} // final da fuçao local
//funçao global
imprimeVariavel() 
console.log('Variável a', a)
console.log('Variável b', b)
// variavel b da erro pois esta fora da funcao local

function calculoDaArea( altura, largura){
    let area = altura * largura
    // console.log (area)
    return area 
}
let resultadoArea = calculoDaArea(2,3)
console.log (resultadoArea) //6 
