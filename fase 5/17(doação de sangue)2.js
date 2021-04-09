//Doar sangue é muito importante. Porém, nem todos podem fazê-lo, existem alguns impedimentos (que podem ser temporários). Ajude o “Banco de sangue” a fazer a triagem dos voluntários que responderam “Sim” para as restrições.

const prompt = require("prompt-sync")();


console.log("Digite 'S' ou 'N' nas restriçoes a seguir");
var A = ler("Idade a baixop de 16 ou acima de 69: : ");
var B = ler("Pesa menos de 50 kg:  ");
var C = ler("Portador de Hepatite:  ");
var D = ler("Ja teve Malaria: ");
var E = ler("Fez doação recente:  ");

//processo
var resultado = A == "Sim" || B =="Sim" || C == "Sim" || D == "Sim" || E == "Não";



//saida
