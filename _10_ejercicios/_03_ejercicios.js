/*
Imprimir la sucesión fibonacci el número de veces que indicó el usuario
*/

let numero = prompt("Digite un numero: ")
numero = parseInt(numero)

let a = 0;
let b = 1;
let c;

for(let i = 0; i <= numero; i++){
    c = a;
    a = b;
    b = c + b;
    console.log(c);
}