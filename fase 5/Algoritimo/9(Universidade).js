//Os boletos da "Universidade" são emitidos com vencimento no dia 15 do mês. Para os pagamentos 
//recebidos entre os dias 10 a 13, será concedido um desconto na próxima mensalidade. 
//O programa irá receber o número do boleto e o dia do pagamento, e emitir o extrato.

//inicio


const ler = require("prompt-sync")();

desconto_boleto = true;

//Entrada

let dia = ler("Digite o dia de hoje: ");

let boleto_codigo = ler("digite o codigo do boleto, por gentileza: ");

//saida

console.log("Dia de hoje: ", dia);


console.log(" Numero do boleto: ", boleto_codigo);


console.log(" Dia do pagamento: ", parseInt(dia) + 1);

if (dia >= 10 && dia <= 13) {
    console.log("Desconto na proxima mensalidade? ", desconto_boleto);
}
else {
desconto_boleto = false
    console.log("Desconto na proxima mensalidade? ", desconto_boleto);
}


//fim
