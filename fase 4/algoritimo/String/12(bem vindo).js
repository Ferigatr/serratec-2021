//O programa “bem-vindo” pergunta seu nome e sobrenome, e depois gentilmente te cumprimenta.

//inicio

const prompt = require("prompt-sync")();
const prompt2 = require("prompt-sync")();

//entrada
var name = prompt ("Digite o seu nome por gentileza: ");
var sobre = prompt2 ("Digite o seu sobrenome?: ");
//processamento
var name = ( name);
var sobre = (sobre);

//Saida
console.log("Olá "+ name + " " + sobre + ", prazer em conhecer você! Seja bem vindo ao universo da programação!");

//fim