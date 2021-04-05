//Alice foi até uma loja de eletrônicos e comprou alguns jogos e um videogame novo, pagando R$ 345,00 por todos os jogos e R$ 1.545,00 pelo videogame. Para o pagamento, o sistema irá apresentar 3 opções de parcelamento e o valor de cada parcela: 3 vezes sem juros, 5 vezes sem juros e em 10 vezes com 1,5% de juros sobre o total da compra.

//inicio
//entrada
var jogo = 345;
var game = 1545
//processamento
var total = jogo + game;
parcela = (total / 3);
//saida
console.log("total de compra: ", total);
console.log("parcelamento em 3 vezes sem juros " + parcela);
parcela = (total / 5);
console.log("parcelamento em 5 vezes sem juros " + parcela);
parcela = ((total / 10) * 1.015);
console.log("parcelamento em 10 vezes com juros de 1,5% " + parcela);

