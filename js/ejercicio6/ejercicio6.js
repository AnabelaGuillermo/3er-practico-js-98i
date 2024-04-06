"Use strict";

/* Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:
Input:
lado A = 24
lado B = 5
*/

function calcularPerimetro(ladoA, ladoB) {
  return 2 * (ladoA + ladoB);
}

let ladoA = parseInt(prompt("Ingresa el valor del lado A del rectángulo:"));
let ladoB = parseInt(prompt("Ingresa el valor del lado B del rectángulo:"));

let perimetro = calcularPerimetro(ladoA, ladoB);

document.write("Lado A: " + ladoA + "</br>");
document.write("Lado B: " + ladoB + "</br>");
document.write("El perímetro es: " + perimetro);
