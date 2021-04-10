function guiche(numero, valor) {
    console.log ("boleto", numero, ": pagamentoi recebido.", valor);
}

const ler = require("pormpt-sync")();

var boleto = ler ("digite o boleto meu queridinho lindão :*");
guiche(boleto, 33.5)
