/*
- Los operadores logicos realizan 
una comparacion booleana
*/
/*
        Operador    |       Función
            &&      |   Compara dos expresiones y restorna verdadero si todas las expresiones son verdaderas.
            ||      |  Con que almenos una expresion sea verdadera las demas daran como resultado verdadero.
            !       |   Negacion, niega toda la expresion
*/

let numeroUno = 10
let numeroDos = 30
let resultado = numeroUno == numeroUno && numeroUno == 10
console.log(resultado)
resultado = 15 == 15 && 15 === "15"
console.log(resultado)
resultado = 24 == 24 || 24 == 15
console.log(resultado)
resultado = !true
console.log(resultado)
console.log(!false)
