//O programa “Três ângulos” lê os valores dos ângulos de uma forma, e escreve se as medidas formam um triângulo válido.

const ler = require("prompt-sync")();

//-----------------------------
var A = ler("Valor do alngulo A do triangulo: ");
var B = ler("Valor do angulo B do triangulo: ");
var C = ler("Valor do angulo C do triangulo: ");

//-----------------------------

var resultado =  A == B && B == C && A == C;

//-----------------------------

console.log("é um triangulo perfeito? ", resultado);