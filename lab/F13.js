const prompt = require("prompt-sync")();

// F13 - A área sob encomenda

function area(base, altura) {
    return base * altura;
}

const base = Number(prompt("Digite a base: "));
const altura = Number(prompt("Digite a altura: "));

if (
    !Number.isFinite(base) ||
    !Number.isFinite(altura) ||
    base <= 0 ||
    altura <= 0
) {
    console.log("Digite medidas válidas.");
} else {
    const resultado = area(base, altura);
    console.log("Área: " + resultado.toFixed(2));
      }
