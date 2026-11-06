
const prompt = require("prompt-sync")();

// F15 - Cabe na caixa?

const objeto = Number(prompt("Tamanho do objeto: "));
const caixa = Number(prompt("Tamanho da caixa: "));

if (!Number.isFinite(objeto) || !Number.isFinite(caixa) || objeto <= 0 || caixa <= 0) {
    console.log("Digite valores válidos.");
} else if (objeto <= caixa) {
    console.log("O objeto cabe na caixa!");
} else {
    console.log("O objeto não cabe na caixa!");
}
