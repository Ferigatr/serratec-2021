//O “mini DP” aumentou seus cálculos. Agora, considere a jornada de 
//trabalho semanal de um funcionário, que é de 40 horas. O funcionário que
//trabalhar mais de 40 horas receberá hora extra, cujo cálculo é o valor da 
//hora regular com um acréscimo de 50%. Considerando que o mês possui 4 
//semanas exatas, e que a entrada de horas será um valor maior que a jornada normal.

const ler = require('prompt-sync')();

painel_comando = ler(" Apete 1 para o salario liquido ou qualquer outra tecla para sair");

console.log( "-=== Bem vindo no mini DP eu serei o seu guia===-");

if(painel_comando == "1"){
    var horaextra = ler("Digite o valor das horas EXTRAS trabalhadas  durante a semana: ");
    var valor = ler("valor da hora: ");
    var inss = ler("digite o % do inss ");
    inss = ( parseInt(inss)/100)


    var salarioBase = 40 * valor;
    var valorHorasExtras = horaextra * (valor * 1.5);
    //inss ñ entra na hora extra
    var descontoInss = salarioBase * inss;
    var salarioLiquido = salarioBase + valorHorasExtras - descontoInss;

    
    console.log("salario base sem inss: ", salarioBase);
    console.log("Hora extra: ", valorHorasExtras);
    console.log("5 de inss em decimal: ", inss);
    console.log("salario liquido: ", salarioLiquido);

}

else {
    console.log("tenha um bom dia");
};