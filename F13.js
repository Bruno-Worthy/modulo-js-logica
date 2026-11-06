
const prompt = require("prompt-sync")();

let largura = Number(prompt("Digite a largura: "));
let comprimento = Number(prompt("Digite o comprimento: "));

if (
  !Number.isFinite(largura) ||
  !Number.isFinite(comprimento) ||
  largura <= 0 ||
  comprimento <= 0
) {
  console.log("Digite medidas válidas.");
} else {
  let area = largura * comprimento;
  console.log("Área:", area);
}
