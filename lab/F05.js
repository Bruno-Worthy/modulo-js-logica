
const prompt = require("prompt-sync")();

let preco = Number(prompt("Preco da compra: "));
let valor = Number(prompt("Valor entregue: "));

if (valor > preco) {
    let troco = valor - preco;
    console.log("Troco: R$ " + troco.toFixed(2));
} else if (valor < preco) {
    let falta = preco - valor;
    console.log("Faltam R$ " + falta.toFixed(2));
} else {
    console.log("Pagamento exato");
}
