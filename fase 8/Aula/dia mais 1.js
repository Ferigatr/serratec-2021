//O programa “Compromissos” gerencia a sua agenda do mês. Você pode digitar um compromisso, informando o dia e a descrição do evento, e consultar se existe algum apontamento para determinado dia.

const ler = require("prompt-sync")();
function maisUm (x) {
    return Number(x) + 1;


}

let numero = ler ("qual seu numero? ")

let r = maisUm(numero)

console.log ("proximo numero é ", r)