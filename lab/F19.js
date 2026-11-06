
const prompt = require("prompt-sync")();

// F19 - Dois ingressos

const idade1 = Number(prompt("Idade da primeira pessoa: "));
const idade2 = Number(prompt("Idade da segunda pessoa: "));

function preco(idade) {
  if (idade <= 17) {
    return 14;
  } else if (idade <= 59) {
    return 28;
  } else {
    return 18;
  }
}

const total = preco(idade1) + preco(idade2);

console.log(total);
