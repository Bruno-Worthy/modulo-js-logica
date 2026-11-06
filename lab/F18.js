
const prompt = require("prompt-sync")();

// F18 - Um, dois ou três pontos

const D = Number(prompt("Digite a distância: "));

if (D <= 800) {
  console.log(1);
} else if (D <= 1400) {
  console.log(2);
} else {
  console.log(3);
}
