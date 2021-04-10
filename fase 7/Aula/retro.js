const prompt = require("prompt-sync")();

var X = prompt("Qual o seu valor da sua divida? digite o valor negativo");

console.log("valor da divida= ", X);

console.log (" valor do emprestimo= ", Math.abs(X));