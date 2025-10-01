let ouroTotal = 75000
let membrosTripulacao = 9
let recompaseBaseLuffy = 3000000000
let aumentoRecompensa = 150000000
let bonusExperiencia = 500
let forcaTripulacao = 95

let ouroPorMembro = ouroTotal/membrosTripulacao
let restoOuro = ouroTotal%membrosTripulacao
let novaRecompensa = recompaseBaseLuffy+aumentoRecompensa
let poderLuffy = recompaseBaseLuffy*bonusExperiencia
aumentoRecompensa -= 50000000

console.log(ouroPorMembro,restoOuro,novaRecompensa,poderLuffy,aumentoRecompensa)
const forcaInimigo = 120
const chanceVitoria = 0.7
const limiteSeguranca= 0.8
const temAkumaNoMi = true
const inimigoTemHaki = true
const combateJusto = 'sim'
const combateRapido = 'sim'

const podeVencer = forcaTripulacao >= forcaInimigo
const riscoAlto = chanceVitoria < limiteSeguranca
const batalhaFacil = combateJusto == combateRapido 
console.log (forcaInimigo,chanceVitoria,limiteSeguranca,temAkumaNoMi,inimigoTemHaki,combateJusto,combateRapido, podeVencer, riscoAlto, batalhaFacil)