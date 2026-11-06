const prompt = require("prompt-sync")();

// F14 - O preço da estrada

const L = Number(prompt("Comprimento da rodovia: "));
const D = Number(prompt("Distância entre pedágios: "));
const K = Number(prompt("Custo por km: "));
const P = Number(prompt("Valor do pedágio: "));

const custoEstrada = L * K;
const quantidadePedagios = Math.floor(L / D);
const custoPedagios = quantidadePedagios * P;

const total = custoEstrada + custoPedagios;

console.log(total);
