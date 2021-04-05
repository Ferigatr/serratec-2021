//O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais.

const ler = require("prompt-sync")();

//-----------------------------
var mes = ler("Mês do seu nascimento: ");
var dia = ler("O dia do seu aniversario: ");

//-----------------------------

var inicio = mes == 1 && dia >= 21;
var fim = mes == 2 && dia <= 19;
var resultado = inicio || fim;

//-----------------------------

console.log("você é um lindão? ", resultado);