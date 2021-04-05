const prompt = require("prompt-sync")(); 


console.log("== eleiçoes 2020==")

var X = prompt ("Qual sua idade? ");
//----------------------

resultado =  X>=16;

console.log("Você pode votar? ", resultado);