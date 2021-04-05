//9. O programa “Relacionais” lê os inteiros A e B. Utilizando variáveis booleanas, escreve na tela o resultado de cada operação relacional com os números.


const prompt = require("prompt-sync")(); 
var A, B
//---------------------------------------------

var A = prompt ("Qual o valor de A? ");
var B = prompt ("Qual o valor de B? ");


//-----------------------------------------------

console.log("A > B? ");
console.log(A > B, "\n");


console.log("A < B?");
console.log(A < B, "\n");


console.log("A = B? ");
console.log(A == B, "\n");