
const prompt = require("prompt-sync")();

// F18 - Um, dois ou três pontos

const entrada = prompt("Digite a pontuação (1, 2 ou 3): ");
const pontos = Number(entrada);

if (entrada.trim() === "" || !Number.isInteger(pontos)) {
    console.log("Pontuação inválida.");
} else if (pontos === 1) {
    console.log("Você marcou 1 ponto!");
} else if (pontos === 2) {
    console.log("Você marcou 2 pontos!");
} else if (pontos === 3) {
    console.log("Você marcou 3 pontos!");
} else {
    console.log("Digite apenas 1, 2 ou 3.");
}
