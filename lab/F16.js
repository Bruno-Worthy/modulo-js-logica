
const prompt = require("prompt-sync")();

// F16 - Quantos bolos inteiros?

const farinha = Number(prompt("Quantidade de farinha (g): "));
const farinhaPorBolo = Number(prompt("Farinha necessária por bolo (g): "));

if (
    !Number.isFinite(farinha) ||
    !Number.isFinite(farinhaPorBolo) ||
    farinha < 0 ||
    farinhaPorBolo <= 0
) {
    console.log("Quantidade inválida.");
} else {
    const bolos = Math.floor(farinha / farinhaPorBolo);

    if (bolos >= 1) {
        console.log("Você consegue fazer " + bolos + " bolo(s) inteiro(s).");
    } else {
        console.log("Não há farinha suficiente para fazer um bolo inteiro.");
    }
}
