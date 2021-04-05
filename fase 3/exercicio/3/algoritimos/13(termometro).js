//inicio

const prompt = require("prompt-sync")();
console.log(" teste")
//entrada
var celsius = prompt ("digite a temperatura em graus Celsius? ");

//processamento
var fahr = (celsius * 9/5) + 32;

//Saida
console.log(" o resultado em FAHR é: ", fahr);
console.log("a temperatur em Celsius é ", celsius);

//fim