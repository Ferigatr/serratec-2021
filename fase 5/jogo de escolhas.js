const ler = require("prompt-sync")();

var primeiro = 0;

while (primeiro < 3)
{
    let nome = ler("Digite seu nome: ");
    let resposta = ler("Qual melhor radio da regiao? ");

    if(resposta == "terefm")
    console.log("parabens", nome, "! Você ganhou um boné.");
    else 
    console.log("Não foi dessa vez");
}

console.log("[leifert] votação encerrada");