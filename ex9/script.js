// 9. Informe um valor a uma variável e imprima no console se o número
// é primo.

let numero = Number(prompt("Digite um número"));

for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        console.log("Número não primo");
        break;
    } else if (i === numero - 1) {
        console.log("Número primo");
    }
}