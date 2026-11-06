
const jogador = {
    nome: "Lia",
    pontos: 340,
    nivel: 3
};

const proximoNivel = jogador.nivel + 1;
const pontosNecessarios = proximoNivel * 100;
const pontosFaltantes = pontosNecessarios - jogador.pontos;

console.log("Jogador: " + jogador.nome);
console.log("Nível: " + jogador.nivel);
console.log(
    "Faltam " + pontosFaltantes +
    " pontos para o nível " + proximoNivel
);
