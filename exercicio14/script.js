/* 14. Leia um número, utilizando WHILE multiplique este número por 3
enquanto a soma seja menor que 500 e no final mostre qual o
último valor */


let numero = 10;
let soma = 0; 
let  mult = 3;

while(soma < 500){
    soma += numero
    numero *= mult
    console.log('Número:' , numero, "Soma:" , soma)
}

console.log('Ultimo: ' , numero)