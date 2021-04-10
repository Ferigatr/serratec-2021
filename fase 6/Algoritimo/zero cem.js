/*
O programa “de zero a cem” mostra na tela todos os números desse intervalo, 
mesmo trabalhando com limites de início e fim da repetição definida de 1 a 10.
*/

const ler = require("prompt-sync")();

const LIMITE = 100;
var total = -1;
var cliente;


while (total < LIMITE)
{
     total++;
     console.log(total);
}