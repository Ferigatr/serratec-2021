//A finalidade do sistema "Triagem" é ajudar o hospital a identificar os 
//pacientes vulneráveis a infecções. O enfermeiro irá digitar o nome do 
//paciente, e “marcar” se o “paciente foi vacinado”. Após as entradas, 
//receberá a avaliação na tela.


//inicio
const ler = require("prompt-sync")();

vacina = false

//entrada

let nome = ler("Digite o nome: ");

let resposta = ler("Já foi vacinado? Responda S para sim e N para não ");

//saida
if(resposta == "S"){

    console.log("== Triagem ==");

    console.log("Sujeito a infecção? ", vacina);
}
//anotação, n preciso colocar o false ou true em "", e lembrar de não colocar em maiusculo 
else {
    console.log("== Triagem ==");
    vaina = true

    console.log("Sujeito a infecção? ", vacina);

}

//fim