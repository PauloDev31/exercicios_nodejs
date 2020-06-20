let rs = require('readline-sync')
console.log("Prencha as opcoes no formato de Dia XX, mes XX e ano XXXX")
let dia = rs.question("Qual o seu dia de nascimento?")
let mes = rs.question ("Qual o seu mes de nascimento?")
let ano = rs.question("Qual o seu ano de nascimento?")

if (mes === "01")
    if (dia <= 20){
        console.log("Seu signo é capricornio.")
    }
    else {
        console.log("Seu signo é aquario.")
    }
    
else if (mes === "02")
    if (dia <= "18"){
        console.log("Seu signo é aquario.")
    }
    else {
        console.log("Seu signo é peixes.")
    }
    
    else if (mes === "03")
    if (dia <= "19"){
        console.log("Seu signo é peixes.")
    }
    else {
        console.log("Seu signo é aries.")
    }

    else if (mes === "04")
    if (dia <= "20"){
        console.log("Seu signo é aries.")
    }
    else {
        console.log("Seu signo é touro.")
    }

    else if (mes === "05")
    if (dia <= "20"){
        console.log("Seu signo é touro.")
    }
    else {
        console.log("Seu signo é gemeos.")
    }

    else if (mes === "06")
    if (dia <= "20"){
        console.log("Seu signo é gemeos.")
    }
    else {
        console.log("Seu signo é cancer.")
    }

    else if (mes === "07")
    if (dia <= "21"){
        console.log("Seu signo é cancer.")
    }
    else {
        console.log("Seu signo é leao.")
    }

    else if (mes === "08")
    if (dia <= "22"){
        console.log("Seu signo é leao.")
    }
    else {
        console.log("Seu signo é virgem.")
    }

    else if (mes === "09")
    if (dia <= "22"){
        console.log("Seu signo é virgem.")
    }
    else {
        console.log("Seu signo é libra.")
    }

    else if (mes === "10")
    if (dia <= "21"){
        console.log("Seu signo é libra.")
    }
    else {
        console.log("Seu signo é escorpiao.")
    }

    else if (mes === "11")
    if (dia <= "21"){
        console.log("Seu signo é escorpiao.")
    }
    else {
        console.log("Seu signo é sagitario.")
    }

    else if (mes === "12")
    if (dia <= "21"){
        console.log("Seu signo é sagitario.")
    }
    else {
        console.log("Seu signo é  capricornio.")
    }
