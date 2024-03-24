/* 3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
número de 1 a 7 e imprimir no console o dia da Semana. Para este
exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
por diante. Caso o número recebido não esteja neste intervalo
imprimir “Dia não reconhecido”. */

function diaDaSemana (dias) {
    const diasSemana = [1, 2, 3, 4, 5, 6, 7,];
    if (dias === 1 ) {    
        console.log("Domingo")
    } else if (dias === 2 ) {
        console.log("Segund")
    } else if (dias === 3) {
        console.log("Terça")
    } else if (dias === 4) {
        console.log("Quarta")
    } else if (dias === 5) {
        console.log("Quinta")
    } else if (dias === 6) {
        console.log("Sexta")
    } else if (dias === 7) {
        console.log("Sábado")
    } else {
        console.log("Dia não reconhecido")
    }
}

let diaDesejado = parseInt(prompt('Digite um número de 1 a 7:  '));
diaDaSemana(diaDesejado);

/*-----------------------------------------------------------------------------*/


// function diaDaSemana (dias) {
//     const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

//     if (dias >= 1 && dias <= 7) {
//         console.log(diasSemana[dias - 1]);
//     } else {
//         console.log("Dia não reconhecido");
//     }
// }

// let diaDesejado = parseInt(prompt('Digite um número de 1 a 7:  '));
// diaDaSemana(diaDesejado);

/*-----------------------------------------------------------------------------*/


// function semana(dia) {
//     const dias = [
//         'Domingo',
//         'Segunda',
//         'Terça',
//         'Quarta',
//         'Quinta',
//         'Sexta',
//         'Sábado',
//     ]

//     return dias[dia -1] || 'Dia Invalido'
// }

// console.log(semana(2))