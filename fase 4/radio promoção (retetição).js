/*
indefinida: repete pra sempre, enquanto a expressão é verdade

promoção da radio 93
os primeiros 5 ouvintes que ligarem ganham um boné e camiseta de radio*/

//função de leitura classicca de repetição

const ler = require("prompt-sync")();

var A = 0;

console.log('abc');

while(A < 5) {
    let b = ler ("ouvintes: ");

    console.log ("parabens ", b, "! você é o ganhador do boné Eggselente!");
    A = A+1;
}
