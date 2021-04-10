/*
No programa “Conto nos dedos”, a criança diz até qual número quer contar, 
e os números aparecem na tela em sequência. 
Ela vai experimentar vários números, até que digite um zero para parar de contar.
*/


const ler = require("prompt-sync")();


var LIMITE;
LIMITE = ler("Digite um numero: ")

var total = 0;
var cliente;


while (total < LIMITE)
{
     total++;
     console.log(total);
}