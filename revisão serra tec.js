//na estatistica ibge o serratec gostaria de saber o total de homens e mulheres na durma

const prompt = require("prompt-sync")();

//processamento 

var m = 0;
var f = 0;

//for (inicialização; condição e incremento)

for (var i = 0; i <35; i++){
    var aluno prompt("aluno, digite M ou F: ")
    if (aluno =="F") f++
    if(aluno == "M") m++
}

prompt ("aluno, digite m ou f: ");

console.log("total de homens: ", m);
console.log("total de mulheres: ", f)