// 17. Escreva um algoritmo que armazene o número total de eleitores de
// um município, o número de votos brancos, nulos e válidos. Calcular
// e escrever o percentual que cada um representa em relação ao
// total de eleitores. O algoritmo deve fazer uma validação para que as
// porcentagens dos votos armazenados (brancos, nulos e válidos)
// respeitem o limite do número total de eleitores, ou seja, garantir que
// a soma dos votos brancos, nulos e válidos não seja maior que o
// número total de eleitores.

let totalEleitores = Number(prompt("Digite o total de eleitores"));
let votosBrancos = Number(prompt("Digite o total de votos brancos"));
let votosNulos = Number(prompt("Digite o total de votos nulos"));
let votosValidos = Number(prompt("Digite o total de votos validos"));

let porcentagemVotosBrancos = (votosBrancos / totalEleitores) * 100;
let porcentagemVotosNulos = (votosNulos / totalEleitores) * 100;
let porcentagemVotosValidos = (votosValidos / totalEleitores) * 100;

console.log(
    `Porcentagem de votos brancos: ${porcentagemVotosBrancos.toFixed(2)}%`,
);
console.log(
    `Porcentagem de votos nulos: ${porcentagemVotosNulos.toFixed(2)}%`,
);
console.log(
    `Porcentagem de votos validos: ${porcentagemVotosValidos.toFixed(2)}%`,
)