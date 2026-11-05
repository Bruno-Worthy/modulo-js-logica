// F04 - O resto que decide

const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um numero: "));

if (numero % 2 === 0) {
    console.log("par");
} else {
    console.log("impar");
}
