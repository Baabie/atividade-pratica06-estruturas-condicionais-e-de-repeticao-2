let numero = Number(prompt('Digite um número positivo'));

for (let i = 1; i <= numero; i++) {
    if(i % 2 !== 0) {
        document.write(`${i}<br>`)
    }
}