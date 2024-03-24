// 11. Utilizando Switch, faça um programa que pergunte em que turno
// você estuda. Peça para digitar “M” para matutino ou “V” para
// vespertino ou “N” para noturno. Mostre um alerta com a mensagem
// “Bom dia!” ou “Boa tarde” ou “Boa Noite” ou “Valor inválido”,
// conforme o caso.

let turnoHorario = prompt(
    "Em que turno do dia você estuda ? , M (matutino) ou V (vespertino) ou N (noturno)"
).toLowerCase();
let turnos;

function turnoDoDia(turno) {
    switch (turno) {
    case 'm':
        turnos = "Matutino";
        break;
    case 'v':
        turnos = "Vespertino";
        break;
    case 'n':
        turnos = "Noturno";
    break;
        default:
        alert("Valor inválido");
    }
    
}

turnoDoDia(turnoHorario);
console.log("Seu turno é: " + turnos);