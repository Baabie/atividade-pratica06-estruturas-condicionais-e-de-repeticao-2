// 2. Para o mesmo exercício acima insira mais uma variável a
// condicional, além de saber se o motorista tem 18 anos ou mais,
// temos que saber também se ele é habilitado para dirigir. Caso ele
// tenha idade maior ou igual a 18 anos e possua habilitação, insira no
// html “Pode dirigir” caso contrário imprima “Não pode dirigir”.

let idade = parseInt(prompt("Qual sua idade ?"));
let habilitado = prompt("Habilitado?") === "sim";

function verificarCarteira(idade, habilitado) {
    if (idade >= 18 && habilitado) {
        console.log("Você pode dirigir");
    } else {
        console.log("Não pode dirigir");
    }
}


let podeDirigir = verificarCarteira(idade, habilitado);