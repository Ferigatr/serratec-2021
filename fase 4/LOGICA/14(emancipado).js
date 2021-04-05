//É considerado “Emancipado” qualquer pessoa a partir de 21 anos, ou o indivíduo do sexo masculino a partir dos 18 anos. Crie um programa para atestar a emancipação do cidadão segundo o ano do seu nascimento.

const prompt = require("prompt-sync")();

var sexo = prompt("Qual seu sexo? responda com 'M' ou 'F': ");
var ano = prompt("Qual o ano de nascimento? ");

var idade = 2021 - ano;
console.log("Sexo: ", sexo);
console.log("Ano do nacimento: ", ano)
if (idade >= 21) {
    emancipado = true;
} else if (idade >= 18 && sexo == 'M') {
    console.log("Sim");
    emancipado = true;
} else {
    console.log('Não');
    emancipado = false;
}

console.log ("Cidadão emancipado?", emancipado);
