//Doar sangue é muito importante. Porém, nem todos podem fazê-lo, existem alguns impedimentos (que podem ser temporários). Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam “Sim” para as restrições.

const prompt = require("prompt-sync")();


console.log("Digite 'S' ou 'N' nas restriçoes a seguir");
var A = prompt("Idade a baixop de 16 ou acima de 69: : ");
var B = prompt("Pesa menos de 50 kg:  ");
var C = prompt("Portador de Hepatite:  ");
var D = prompt("Ja teve Malaria: ");
var E = prompt("Fez doação recente:  ");


if (A == "N" && B =="N" && C == "N" && D == "N" && E == "N") {
    V = "Sim ele pode doar";
} else {
    console.log('Não');
    V = "não pode doar";
}

console.log ("O cidadão pdoe doar??", V);