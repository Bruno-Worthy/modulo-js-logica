
const prompt = require("prompt-sync")();

// F19 - Dois ingressos

const entrada1 = prompt("Valor do primeiro ingresso: R$ ");
const entrada2 = prompt("Valor do segundo ingresso: R$ ");

const ingresso1 = Number(entrada1);
const ingresso2 = Number(entrada2);

if (
    entrada1.trim() === "" ||
    entrada2.trim() === "" ||
    !Number.isFinite(ingresso1) ||
    !Number.isFinite(ingresso2) ||
    ingresso1 < 0 ||
    ingresso2 < 0
) {
    console.log("Digite valores válidos.");
} else {
    const total = ingresso1 + ingresso2;

    console.log("Primeiro ingresso: R$ " + ingresso1.toFixed(2));
    console.log("Segundo ingresso: R$ " + ingresso2.toFixed(2));
    console.log("Total: R$ " + total.toFixed(2));
}
