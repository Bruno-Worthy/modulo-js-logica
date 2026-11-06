
const prompt = require("prompt-sync")();

// F17 - Dentro ou fora da linha

const entrada = prompt("Digite um número: ");
const numero = Number(entrada);

if (entrada.trim() === "" || !Number.isFinite(numero)) {
    console.log("Número inválido.");
} else if (numero >= 10 && numero <= 50) {
    console.log("Dentro do intervalo!");
} else {
    console.log("Fora do intervalo!");
}
