


const ler = require("prompt-sync")();
const prompt = require("prompt-sync")();
console.log("Bem vindo a Manhanha-airlines eu serei o seu guinha, no dia de hoje temos 3 promoçôes de viagem");



//entrada
console.log("===Por favor, selecione um dos seguintes destinos===");
console.log(" (1) Casa da grande familia");
console.log(" (2) Wakanda");
console.log(" (3) Frio de Janeiro");
var nro = ler ("Digite seu destino aqui! (っ◔◡◔)っ ");


switch (nro) {
    case "Casa da grande familia":
        msg= "Você vai visitar o Algustinho e o Linelzinho, parabens! tenha uma boa viagem! 👋≧◉ᴥ◉≦";

        break;
    case "Wakanda":
        msg = "Você vai para a cidade mais avançada do continente africano, de um alo pro rei para mim! 👋≧◉ᴥ◉≦ ";

        
        break;
    case "Frio de Janeiro":
        msg = "Você vai surfar no gelo? okay tenha uma boa viagem e leve um agasalho 👋≧◉ᴥ◉≦";

      break;
    default:
        msg = "Você não escolheu nenhum dos 3 destinos, você não vai viajar pq você não é legal 😭 ) ";   
}

console.log (msg)