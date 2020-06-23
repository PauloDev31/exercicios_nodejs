let rs = require('readline-sync')
console.log("Prencha as opcoes no formato de Dia XX, mes XX e ano XXXX")
let dia = rs.question("Qual o seu dia de nascimento?")
let mes = rs.question ("Qual o seu mes de nascimento?")
let ano = rs.question("Qual o seu ano de nascimento?")
switch(mes){

    case "01":
        dia <= "20" ? console.log("Seu signo é capricornio."):console.log("Seu signo é zebra.");
        break;

    case "02":  
        dia <= "18" ? console.log("Seu signo é aquario."):console.log("Seu signo é peixes.");
        break;

    case "03":
        dia <= "19" ? console.log("Seu signo é peixes."):console.log("Seu signo é aries.");
        break;

    case "04":
    dia <= "20" ? console.log("Seu signo é aries."):console.log("Seu signo é touro.");
        break;

    case "05":
       dia <= "20" ? console.log("Seu signo é touro."):console.log("Seu signo é gemeos.");
        break;

    case "06":
       dia <= "20" ? console.log("Seu signo é gemeos."):console.log("Seu signo é cancer.");
        break;

    case "07":
       dia <= "21" ? console.log("Seu signo é cancer."):console.log("Seu signo é leao.");
        break;

    case "08":
       dia <= "22" ? console.log("Seu signo é leao."):console.log("Seu signo é virgem.");
        break;

    case "09":
       dia <= "22" ? console.log("Seu signo é virgem."):console.log("Seu signo é libra.");
        break;

    case "10":
       dia <= "21" ? console.log("Seu signo é libra."):console.log("Seu signo é escorpiao.");
        break;

    case "11":
       dia <= "21" ? console.log("Seu signo é escorpiao."):console.log("Seu signo é sagitario.");
        break;

    case "12":
       dia <= "21" ? console.log("Seu signo é sagitario."):console.log("Seu signo é capricornio.");
        break;
    default:
        console.log("Invalido");
    }