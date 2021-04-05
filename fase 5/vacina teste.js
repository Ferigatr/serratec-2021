/*

vacina
pergunte a idade, sendo 67 anos, pode vacinar hoje.
se inferios, avisar que volta semana q vem
sendo superior, pq não vacinou.

*/

//repetir sempre que precisa de leitura

const ler = require("pompt-sync")();

console.log("== fila da vacina covid ==");

console.log("digite sua idade");

const idade_dia = 67;

var dia = idade == idade_dia;
var passou = idade > idade_dia;

var msg;
//n terminado

