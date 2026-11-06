
const prompt = require("prompt-sync")();

// F16 - Quantos bolos inteiros?

const A = Number(prompt("Xícaras de farinha: "));
const B = Number(prompt("Quantidade de ovos: "));
const C = Number(prompt("Colheres de leite: "));

const bolosFarinha = Math.floor(A / 2);
const bolosOvos = Math.floor(B / 3);
const bolosLeite = Math.floor(C / 5);

const total = Math.min(bolosFarinha, bolosOvos, bolosLeite);

console.log(total);
