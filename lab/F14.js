
const prompt = require("prompt-sync")();

// F14 - O preço da estrada

const distancia = Number(prompt("Distância em km: "));
const precoKm = Number(prompt("Preço por km: R$ "));

if (
  !Number.isFinite(distancia) ||
  !Number.isFinite(precoKm) ||
  distancia < 0 ||
  precoKm < 0
) {
  console.log("Valores inválidos.");
} else {
  const total = distancia * precoKm;
  console.log("Valor da viagem: R$ " + total.toFixed(2));
}
