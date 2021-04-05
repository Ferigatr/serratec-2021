//Indique o resultado das expressões relacionais abaixo. Utilize uma variável para atribuir a sentença, e então exibir na tela o resultado booleano. Declare as variáveis a seguir e, para os símbolos, faça as substituições.
//x: 6.0; y: 2; z: 4.000; a: 8; b: 7.5; c: 12
//M: maior que; m: menor que; MI: maior ou igual; mi: menor ou igual;
//mod: resto; <>: diferente
//Dica: Para algumas operações será necessário o uso de parênteses.
//x - y M a
//x - y * a M c mod y
//y <> c
//x * y <> c
//c mod y mi y mod c
//a m b
//z / a + x * y - 5 MI b
//c * z + 2 = a * x + y
//c = z + b
//y * 2 <> 7 - b

var x=6.0;
var y = 2;
var z = 4.000;
var a = 8;
var b = 7.5;
var c = 12;

console.log("x - y é maior que a?")
console.log((x-y)>a);

console.log("x - y * a é maior que c mod y?")
console.log(((x-y)*a)>(c%y));

console.log("y é diferente de c?")
console.log(y!=c);

console.log("x vezes y é diferente de c?")
console.log((x*y)!=c);

console.log("resto de c/y é menor ou igual a resto de y/c?")
console.log((c%y)<=(y%c));

console.log("a é menor que b?")
console.log(a<b);

console.log("z dividido por a mais x vezes y - 5 é maior ou igual a b?")
console.log(((((z/a)+x)*y)-5)>=b);

console.log("c vezes z mais 2 é igual a vezes x mais y")
console.log((c*z+2)==(a*x+y));

console.log("c é igual a z mais b?")
console.log(c==(z+b));

console.log("y vezes 2 é diferente de 7 - b?")
console.log((y*2)!=(7-b));