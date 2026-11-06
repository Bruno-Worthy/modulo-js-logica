
const prompt = require("prompt-sync")();

// F20 - O prêmio da semana

const entrada = prompt("Quantos pontos você fez na semana? ");
const pontos = Number(entrada);

if (
    entrada.trim() === "" ||
    !Number.isInteger(pontos) ||
    pontos < 0
) {
    console.log("Digite uma pontuação válida.");
} else if (pontos >= 150) {
    console.log("Parabéns! Você ganhou o prêmio OURO!");
} else if (pontos >= 100) {
    console.log("Parabéns! Você ganhou o prêmio PRATA!");
} else if (pontos >= 50) {
    console.log("Parabéns! Você ganhou o prêmio BRONZE!");
} else {
    console.log("Você ainda não atingiu a pontuação para ganhar um prêmio.");
}
