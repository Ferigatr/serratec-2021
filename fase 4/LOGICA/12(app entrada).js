//O aplicativo na entrada da loja possui internamente um limite de pessoas que podem estar dentro do estabelecimento ao mesmo tempo. Toda vez que um cliente quiser entrar, o segurança irá preencher a quantidade de pessoas já na loja, e o programa avisará se o cliente pode prosseguir.

//O astrólogo que escreveu o sistema “Zodíaco” acredita que os nascidos sob o signo de Aquário são mais inteligentes que os demais.

const ler = require("prompt-sync")();

//-----------------------------
var quantclient = ler("quantos clientes estão presentes na loja? ");
//quantidade maxima de clientes na loja
quantmax = ler("Qual o limite maximo na loja? ")
//-----------------------------

var total = quantclient <= quantmax;


//-----------------------------

console.log("o cliente esta autorizado para entrar? ", total);