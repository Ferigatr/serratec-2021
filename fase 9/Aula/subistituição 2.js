// o programa otimista não consegue ver frases negativas. toda vez que um texto possui a palavra "não", ele substitui para "sim


const FRASE = "eu nãoposso, pera, falar não duas vezes numa frase com não";

function otimista(frase) {
    let nova = frase.replace ("não, sim");
    var posicao = nova.indexOF("não");

    if (posicao >= 0) return otimista (nove);

    return nova;
}

let otimismo = otimista(FRASE);

console.log("copo meio vazioi: " + FRASE);
console.log("copo meio cheio: " + otimismo);