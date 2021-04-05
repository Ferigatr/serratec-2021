//Em tempos de pandemia, só é permitido entrar em templos religiosos pessoas de máscara. Na portaria deve ser medida a temperatura à distância, e o valor não deve ultrapassar 37,5º.

//uso de mascaras
const prompt = require("prompt-sync")();

var A, B, T;
A = "Sim";
B = prompt("esta usando mascara? responda com 'Sim' ou 'Nao': ");
T = prompt("Qual a temperatura? ");

//---------------------------------------------

var resultado = A == B && T <= 37.5;
console.log("Usa marcara: ", B);
console.log("Temperatura: ", T);
console.log("Autorizar a entrada ?", resultado)