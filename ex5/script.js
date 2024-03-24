/* Utilizando FOR, percorra os números de 1 a 10 e imprima no console
os números pares. */

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numeroPares = numero.filter(numero => numero %2 === 0);

console.log(numeroPares);