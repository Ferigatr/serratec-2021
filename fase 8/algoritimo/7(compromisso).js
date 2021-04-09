//O programa “Compromissos” gere
//lembrete indexof procura pelo indice, ele pode seguir a ordem do cadastro, ou retorna o indice colocado/ ordem de cadastro
//trocar o var1 = var 1 por push 
const prompt = require("prompt-sync")();
console.log("-=== SUA AGENDA DO MÊS ===-");

compromissos = []

compromissos_dia = []

menu_opcao = 1

while(menu_opcao != 0) {

menu_opcao = prompt('DIGITE 1 PARA CADASTRAR / 2 PARA CONSULTAR / 0 PARA SAIR ');

    switch (menu_opcao){
    case '1':
        // LOOP DE CADASTRO
        descricao = prompt("Digite a descrição do compromisso: ");
        dia = prompt("Informe o dia do compromisso: ");

        compromissos.push(descricao);
        compromissos_dia.push(dia);
        break;

    case '2':
        // LOOP DE CONSULTA
        dia = prompt("Digite o dia que deseja consultar apontamentos: ");

        if(compromissos_dia.indexOf(dia) != -1) {
            indice = compromissos_dia.indexOf(dia);
            descricao = compromissos[indice];

            console.log('- APONTAMENTOS DO DIA ', dia, ' -');
            console.log(descricao);
            
        } else {
            console.log("Não existem apontamentos para o dia informado. ");
        }
        break;
    default:
        console.log('SAINDO...');
        break;
    }
}