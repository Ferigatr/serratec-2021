//O programa “mini departamento pessoal” lê a quantidade de horas trabalhadas por um funcionário em um mês, o valor que ele recebe por hora e o percentual de desconto para o INSS, e calcula:

//inicio

const prompt = require("prompt-sync")();

//entrada
var salarioh = prompt ("Qual o valor de Salario hora? ");
var hr = prompt ("quantidade de horas trabalhadas: ")
var inss = prompt ("qual o desconto do inss? ");
//processamento
var salarioh = (salarioh);
var hr = (hr);

var sb = (salarioh * hr)
var inss2 = (inss/100)
var desc = (sb * inss2)
var sl = (sb - desc)
//Saida
console.log("Contracheque");
console.log ("Salario bruto: " + sb);
console.log ("Valor do desconto: " + inss);
console.log ("Salario liquido: " + sl);
//fim