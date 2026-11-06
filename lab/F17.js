const prompt = require("prompt-sync")();

// F17 - Dentro ou fora da linha

const X = Number(prompt("Digite X: "));
const Y = Number(prompt("Digite Y: "));

if (X >= 0 && X <= 432 && Y >= 0 && Y <= 468) {
  console.log("Dentro");
} else {
  console.log("Fora");
}
