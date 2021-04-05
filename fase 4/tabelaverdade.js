//tabela de felicidade

var A, B;

//Usuario 1 "é feliz";

A = "feliz";
//Usuario 2 "é feliz";
B = "feliz";

//ambos

var turma;

//relacional
var af= A == "feliz";//true
var bf = B == "feliz";//false

console.log("a é feliz?", af);
console.log("b é feliz?", bf);

//&& é o "mesmo que" Ambos, o da esquerda e o dadireita
turma = af &&  bf;
console.log("a turminha do barulho esta feliz? ", turma);