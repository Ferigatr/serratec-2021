
const ler = require("prompt-sync")();

var primeiro = 0;

while (primeiro < 10)
 {
    var nome = ler("ouvinte: ");
    console.log("parabens", nome, "! Você ganhou um boné.")
    primeiro++;

}

console.log("[leifert] votação encerrada");