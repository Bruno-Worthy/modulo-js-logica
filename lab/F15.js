
const prompt = require("prompt-sync")();

// F15 - Cabe na caixa?

const N = Number(prompt("Diâmetro da bola: "));
const A = Number(prompt("Altura da caixa: "));
const L = Number(prompt("Largura da caixa: "));
const P = Number(prompt("Profundidade da caixa: "));

if (N <= A && N <= L && N <= P) {
    console.log("Cabe");
} else {
    console.log("Não cabe");
}
