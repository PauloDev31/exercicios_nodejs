let rs = require('readline-sync')
let lado1 = rs.questionFloat("Digite o primeiro lado do quadrado.")
let lado2 = rs.questionFloat("Digite o segundo lado do quadrado.")

let area = lado1 * lado2
console.log("A area do seu quadrado é " +area+ " .")

