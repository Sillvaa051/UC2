
const velocidadeMadeira = 30
const velocidadePedra = 40
const velocidadeFerro = 60
const velocidadeDiamante = 90
// as variaveis foram declaradas com valores decididos pela nossa dupla

const blocoMinerar = "obisidian" 
/* no const blocoMinerar foi declarado como obisidian mas
ele pode mudar seu valor para "pedra,diamente ou até madeira" isso tbm afeta no que
ira aparecer no console
*/
if (blocoMinerar === "obisidian" || blocoMinerar === "Obsidiana") {
  console.log(`Use Picareta de diamante é a mais tri: Velocidade ${velocidadeDiamante}`)
} else if (blocoMinerar === "Pedra") {
  console.log(`Picareta de Ferro ou Pedra é o melhor pae: Velocidade ${velocidadeFerro}`)
} else {
  console.log(`Qualquer bglh serve irmão, mas vai na de madeira que é sereno: Velocidade ${velocidadeMadeira}`)
}
/*os if e else foram usados para mudar de acordo com o valor do let blocoMinerar no caso de acordo 
com seu valor muda a mensagem exibida no console
*/
// DESAFIO 2
let danoEspada = 6
let forcaEncantamento = 1.5
let armaduraInimiga = 2
let vidaInimiga = 20
//Aqui estão as variaveis iniciais

danoBruto = danoEspada * forcaEncantamento
danoFinal = danoBruto - armaduraInimiga
vidaRestante = vidaInimiga - danoFinal
//Aqui são os calculos para descobrir o dano final e a vida restante do inimigo

if (vidaInimiga <= 0) {
    console.log("Seu inimigo foi derrotado.")
} else {
    console.log("Seu inimigo sobreviveu com ", vidaRestante, " de vida.")
} 
//Aqui ele vai analisar se o inimigo foi derrotado ou não
// DESAFIO 3 

const temDiamante = true
let nivelMesaCrafting = 2
const temGravetos = false
let temFerro= 9
// mostra seus recursos e que numDimante necessita ser true já o numGravetos necessita ser false
if (
  (!temGravetos && nivelMesaCrafting <=3) && // aqui se qualquer um for true da certo
  (temDiamante && temFerro >= 8)// aqui os dois tem q ser true
) {
  console.log("Picareta de Diamante feita irmãozão, dale na aventura")
} else {
  console.log("vixe não tem as coisas necessaria, vai de atrás guerreiro")
}
// no console.log é digitado as mensagens que seram imprimidas
