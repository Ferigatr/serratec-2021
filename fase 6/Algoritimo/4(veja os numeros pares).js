const ler = require("prompt-sync")();



mensagem = ""
contador = 1;

  for (i=2; i%2==0;i=i+2) {
  
    mensagem += i;
    
    if(contador %5 == 0) {
      opcao = ler("Deseja continuar a execução? S/N");
      if(opcao == "S") {
        mensagem += ".";
        console.log(mensagem);
        mensagem = "";
      }
      else {
        console.log("adeus")
        break;
      }
    }
    else {mensagem += ", ";}
    

    contador = contador + 1;
  }