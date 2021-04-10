// o programa otimista não consegue ver frases negativas. toda vez que um texto possui a palavra "não", ele substitui para "sim


const FRASE = "eu não serei um bom programador.";

function otimista(frase) {
    let nova = frase.replace ("não, sim");
    return nova;
}

let otimismo = otimista(FRASE);

console.log("copo meio vazioi: " + FRASE);
console.log("copo meio cheio: " + otimismo);