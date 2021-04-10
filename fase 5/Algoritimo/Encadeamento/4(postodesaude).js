// O posto de Saúde irá vacinar hoje contra a Covid os cidadãos com 67 anos. Ao entrar, deve ser solicitada a idade, para então exibir as mensagens de direcionamento:
// acima de 67 anos = Por quê não vacinou ainda?
// Abaixo de 67 anos = Volte na próxima semana
// 67 anos completos = Vacinação hoje.

const ler = require("prompt-sync")();

console.log("==Fila da vacina==");
var vacinar = ler("Digite sua idade: ");

if (vacinar == 67)console.log("Pode vacinar hoje! :)");
else
if (vacinar > 67) console.log("Por que não vacinou ainda?!");
else
console.log("Volte semana que vem!");