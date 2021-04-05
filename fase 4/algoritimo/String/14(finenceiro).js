//inicio

const prompt = require("prompt-sync")();


//entrada

var nome = prompt ("Digite o seu nome por gentileza: ");
var empresa = prompt ("Qual seria a sua empresa?: ");
var função = prompt ("Qual seria a sua função?: ");
var valor = prompt ("Qual o valor do imprestimo?: ");

//processamento
var nome = (nome);
var empresa = (empresa);
var função = (função);
var valor = (valor * 0.86);


//Saida
console.log("Senhor" + nome +", você está com sorte! Pela sua função de " + função +", e sua excelente relação com a empresa (" + empresa + ") onde trabalha, foi aprovado um crédito em sua conta corrente de R$ " + valor);

//fim