//O programa "Educado" irá perguntar o seu nome, e também como você gostaria de ser chamado. Depois disso, uma saudação para você aparece na tela.

//inicio

const prompt = require("prompt-sync")();
const prompt2 = require("prompt-sync")();

//entrada
var name = prompt ("Digite o seu nome por gentileza: ");
var apelido = prompt ("Digite o seu apelido: ");
//processamento
var name = ( name);
var apelido = (apelido);

//Saida
console.log("Olá "+ name + " também conhecido como " + apelido + ", prazer em conhecer você!");

//fim