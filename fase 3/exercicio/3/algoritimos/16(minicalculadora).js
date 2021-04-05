//Crie o programa “mini calculadora”, que após ler dois números inteiros apresenta as operações de soma, subtração, multiplicação e divisão com eles.

//inicio

const prompt1 = require("prompt-sync")();
const prompt2 = require("prompt-sync")();

//entrada
var numero1 = prompt1 ("Primeiro Numero ");

numero1 = parseInt(numero1);


var numero2 = prompt2 ("Segundo numero ");
numero2 = parseInt(numero2);

console.log(typeof(numero1));
console.log(typeof(numero2));
//processamento
soma = (numero1 + numero2);
subtração = (numero1 - numero2);
divisão = (numero1 / numero2);
multiplicação = (numero1 * numero2);
//Saida
console.log("+ = ", soma);
console.log("- = ", subtração);
console.log("/ = ", divisão);
console.log("* = ", soma);
//fim