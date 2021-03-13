/*
Programar el juego del "Número Mágico" en el que se define un número y el usuario trata de adivinarlo, 
si el número que ingresó el usuario es menor, 
imprimir la pista "El número mágico es mayor", 
si el número que ingresó el usuario es mayor, 
imprimir la pista "El número mágico es menor",
*/

let numeroMagico = 50;
numeroMagico = parseInt(numeroMagico);

let oportunidades = 5;
oportunidades = parseInt(oportunidades)

for (let i =0; i < 5; i++){
    let numero = prompt("Ingrese un número:");
numero  = parseInt(numero);
    if(numero < numeroMagico){
        console.log("El numero es menor que el numero magico")
    }else if(numero > numeroMagico){
        console.log("El numero es mayor que el numero magico")
    }else if(numero == numeroMagico){
        console.log("Felicidades lo encontraste")
    }
}