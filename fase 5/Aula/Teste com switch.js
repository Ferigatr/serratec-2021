const ler = require("prompt-sync")();

console.log("== pessoas na sala ==");;

//entrada
var nro = ler ("quantas pessoa temos na sala");

switch (nro) {
    case "1":
        msg= "Não da para começar a aula com uma pessoa";
        break;
    case "2":
        msg = "ja da para formar uma dupla";
        break;
    case "3":
        msg = "comecem fazendo exercicio digestivo";
        break;
    default:
        msg = "bora começar!";   
}

console.log (msg)