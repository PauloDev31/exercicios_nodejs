let rs = require('readline-sync')
let numVoo = rs.question("Qual o numero do seu vôo?")
let fileira = rs.question ("Qual fileira o(a) senhor(a) deseja sentar? A, B, C, D OU E?")

switch (fileira){

case "A":
    console.log("Seu numero de vôo é " + numVoo + ", fileira " + fileira + ", assento 1.");
    break;
case "B":
    console.log("Seu numero de vôo é " + numVoo + ", fileira " + fileira + ", assento 1.");
    break;
case "C":
    console.log("Seu numero de vôo é " + numVoo + ", fileira " + fileira + ", assento 1.");
    break;
case "D":
    console.log("Seu numero de vôo é " + numVoo + ", fileira " + fileira + ", assento 1.");
    break;
case "E":
    console.log("Seu numero de vôo é " + numVoo + ", fileira " + fileira + ", assento 1.");
    break;
default:
    console.log("Dados inválidos.")
    break;
}
