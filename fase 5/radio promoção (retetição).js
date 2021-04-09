/*
indefinida: repete pra sempre, enquanto a expressão é verdade

promoção da radio 93
os primeiros 5 ouvintes que ligarem ganham um boné e camiseta de radio*/

//função de leitura classicca de repetição

const ler = require("prompt-sync")();

let senhacarta;

do{
    let alo = ler("ligando pra você: ");
    senhacarta = alo =='93show';
}   while (!senhacerta);
console.log ("parabens! vc ganhou");
