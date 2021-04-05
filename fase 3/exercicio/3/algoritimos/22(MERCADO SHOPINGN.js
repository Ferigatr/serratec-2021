//É muito comum vermos promoções em mercados e shoppings relacionadas ao valor das compras. Se a Alice fez suas compras em um shopping cuja promoção era que a cada R$ 190,00 em compras ela ganhava um cupom, quantos cupons ela ganhou?

//inicio

const prompt = require("prompt-sync")();

//entrada
var x = prompt ("Digite o total do valor de comprar feito no shopping");

//processamento
var x = ( x);
y = x / 190

//Saida
console.log("Sua compra foi de ", x, "você tem direito a ", Math.trunc(y), " cupons" );

//fim