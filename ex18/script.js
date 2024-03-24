// 18. Uma loja de eletrodomésticos estabeleceu as seguintes
// modalidades de pagamento para a venda de suas mercadorias:
// A vista   desconto de 2,5% sobre o preço da tabela.
// 2 a 5 sem desconto ou acrescimo.
// 6 a 10 vezes desconto de 6% sobre o preço da tabela.
// 11 a 15 vezes desconto de 13% sobre o preço da tabela.
// Escreva um algoritmo que armazene o preço de tabela e o número
// de vezes em que o pagamento será feito. Calcule o valor de cada
// parcela e o preço total da compra e imprima no console.

let vezesPagamento = parseInt(prompt("Em quantas vezes quer fazer o pagamento?"));
let valor = 1000;
let desconto;
function calcularParcelas(valor, vezesPagamento) {
    
    if(vezesPagamento === 1){
        desconto = 0.025;
    } else if (vezesPagamento >= 6 && vezesPagamento <= 10) {
        desconto = 0.06;
    } else if (vezesPagamento >= 11 && vezesPagamento <= 15) {
        desconto = 0.13;
    } else {
        desconto = 0.00;
    }

    let comDesconto = valor - (vezesPagamento * desconto);
    let total = comDesconto * vezesPagamento;
    let valorParcela = total / vezesPagamento;


    console.log(`Total a pagar: ${total.toFixed(2)}`);
    console.log(`Valor da parcela: ${valorParcela.toFixed(2)}`);

}

calcularParcelas(valor, vezesPagamento);