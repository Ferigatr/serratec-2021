//O restaurante "Self-Service" precisa de um programa para imprimir as etiquetas de "comanda" na pesagem dos pratos. O operador da balança irá digitar o preço do quilo e o total em gramas da refeição, considerando que o prato vazio pesa 465 gramas (tara). A etiqueta irá conter o nome do restaurante, a tara do prato, o preço de 100 gramas, o peso consumido e o valor total.

const prompt = require("prompt-sync")();

//entrada
console.log ("Bem vindo ao restaurante pé de fava")
var valor = prompt ("Dite o valor do prato: ");

//processamento
var valor = (valor);
//valor da grama, 100g = 7.10 reais
pgrama = (7.10);
valordivi = (((valor / pgrama)*100));
vltotal = ((valordivi + 465));
//Saida

console.log( "Etiqueta do pé de fava")
console.log(pgrama + " reais por 100 gramas");
console.log("Quantidade de grama do prato: " + valordivi +"gm");
console.log ("Peso total com o prato: " + vltotal + "gm")

//fim