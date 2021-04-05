//Dois amigos vão utilizar o programa “Maioral”. Sem olhar pra tela (pra um não ver o valor do outro), cada um irá digitar um número inteiro no teclado. Vamos saber quem digitou o número maior, pelos resultados na tela.

const prompt = require("prompt-sync")(); 



var player1 = prompt ("Digite seu numero player 1 ");
var player2 = prompt ("Digite seu numero player 2 ");
//----------------------

console.log("==THE ULTIMATE MASTER BLASTERS== ");
console.log("Player 1: ", player1 );

console.log("Player 2: ", player2 )

console.log("==Resultado== ");
console.log("pleyer 1 venceu?", player1>player2);
console.log("pleyer 2 venceu?", player2>player1);
