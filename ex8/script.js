// 8. Crie uma variável para armazenar o salário do usuário e atribua um
// valor a essa variável. Crie a validação necessária:
// - Caso o salário seja MENOR que R$ 1.903,98, insira no html
// "ISENTO DE IR";
// - caso contrário insira "TRIBUTADO NO IR".

let salario = prompt('Qual seu salario');

if (salario < 1.903,98) {
    console.log("ISENTO DE IR");
} else {
    console.log("TRIBUTADO NO IR");
}