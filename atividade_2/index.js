let rs = require('readline-sync')
let pergunta = rs.question("Esta usando mascara e lavando as maos para sair de casa? Sim ou Nao.")


if (pergunta === "Sim")
    console.log("Parabens, continue assim");
 
else if (pergunta === "Nao")
    console.log("Mais atenção ao sair de casa.");


