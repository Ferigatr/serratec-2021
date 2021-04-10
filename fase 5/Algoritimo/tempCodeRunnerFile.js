/* 
Adaptar o aplicativo do “Banco de sangue”, criando duas novas versões:
Alterar a mensagem de resultado, para dizer quais motivos impediram o voluntário de participar 
da doação (ou parabenizar quando aprovado).
Assim que a primeira restrição for atendida, não serão feitas as  perguntas subsequentes.

*/
const ler = require("prompt-sync")();

console.log("==Banco de sangue==");
console.log("[Digite 'sim' ou 'Não' nas restrições a seguir]");

// entradas
var idade = ler("Idade abaixo de 16 ou acima de 69 anos: ");
var peso = ler("Pesa menos que 50kg? ");
var hepatite = ler("Portador de hepatite? ");
var malaria = ler("Já teve malaria? ");
var recente = ler("Fez doação recente: ");


//processamento
var resultado = 
    idade == "sim" 
    peso == "sim" 
    hepatite == "sim" 
    malaria == "sim" 
    recente == "sim";
 
    resultado = !resultado;

// saidas    //

console.log("[Resultado da triagem]");
console.log("Pode doar sangue", resultado);

var porque = "";

if (idade == "Sim") {
    porque = "abaixo ou acima da idade";
}
if (peso == "Sim") {
    porque = porque + ", Abaixo do peso"
};
if (hepatite == "Sim") {
    porque = porque + ", Hepatite";
}

if (malaria == "Sim") {
    porque += ", Malaria";
}
if (recente == "Sim") {
    porque += ", Doação recente";
}
else {
    console.log("não pode doar")
}

console.log("Motivos: ", porque);