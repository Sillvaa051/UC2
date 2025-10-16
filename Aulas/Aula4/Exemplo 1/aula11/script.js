/*
let condicao = true
if (condicao) {
    //como valor é true
    // o codigo do bloco if será execudado
    console.log("entrou no if 1")
}
let condicao2= false
if (condicao2) {
    // como o valor é false
    // o codigo do bloco if NÃO será execudado
    console.log ("entrou no if 2")
}   °°n

const num1 = prompt ("Digite o primeiro numero")
const num2 = prompt ("Digite o segundo numero")

if (num1 === num2) {
    console.log("os dois numeros são iguais")
}
else    
    console.log("Numeros diferentes irmão")

  
   let paisOrigem = prompt ("Qual seu pais de nacionalidade?")
   switch (paisOrigem) {
   case 'Brasil':
    console.log ("nacionalidade brasileira")
    console.log ("Entrou no case1")
    break
    case 'EUA' :
        console.log ("Nacionalidade ameriacana")
        console.log ('entrou no case2')
        break
    case 'India' :
        console.log ("nacionalidade indiana")
        console.log ("entrou no case3")
        break
        default:
            console.log ("Nacionalidade não encontrada")
            break
        }  */
        let pokemon = prompt ("Escolha seu pokemon inicial")
        switch (pokemon.toLowerCase()) {
        case 'bulbasaur':
         console.log ("Planta e Veneno")
         console.log ("Entrou no case1")
         break
         case 'charmander' :
             console.log ("Fogo")
             console.log ('entrou no case2')
             break
         case 'squirtle' :
             console.log ("Àgua")
             console.log ("entrou no case3")
             break
             default:
                 console.log ("pokemon indisponivel")
                 break
             }
             let chapeu= prompt ("Fale um personagem")
        switch (chapeu.toLowerCase()) {
        case 'Hermione':
         console.log ("Hermione: Grifinória")
     
         break
         case 'Ana' :
             console.log ("Ana: Lufa-lufa")
          
             break
         case 'Luna' :
             console.log ("Luna: Corvinal")
             
             break
             case 'Narcisa' :
                console.log ("Narcisa: Sonserina")
        
                break
             default:
                 console.log ("aluno não matriculado")
                 break
             }

