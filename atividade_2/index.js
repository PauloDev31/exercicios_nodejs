let rs = require('readline-sync')
let pergunta = rs.question("Esta usando mascara e lavando as maos para sair de casa? Sim ou Nao.")

switch(pergunta) {
    case "Sim":
        console.log("Parabens, continue assim!");
        break;
    case "Nao":
        console.log("Mais atenção!");
        break;
default:
    console.log("Entrada invalida.")
}



