let rs = require('readline-sync')
let numVoo = rs.question("Qual o numero do seu vôo?")
let fileira = rs.question ("Qual fileira o(a) senhor(a) deseja sentar? A, B, C, D OU E?")

if (fileira === "A")
    console.log("Seu numero de vôo é " + numVoo + " fileira " + fileira + " assento 1.");

else if (fileira === "B")
    console.log("Seu numero de vôo é " + numVoo + " fileira " + fileira + " assento 1.");
    
else if (fileira === "C")
    console.log("Seu numero de vôo é " + numVoo + " fileira " + fileira + " assento 1.");

else if (fileira === "D")
    console.log("Seu numero de vôo é " + numVoo + " fileira " + fileira + " assento 1.");

else if (fileira === "E")
    console.log("Seu numero de vôo é " + numVoo + " fileira " + fileira + " assento 1.");


