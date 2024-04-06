"Use strict";

/* Escribir el código de una función a la que se pasa como parámetro un número entero
y devuelve como resultado una cadena de texto que indica si el número es par o impar.
Mostrar por pantalla el resultado devuelto por la función. */

function parImpar() {
  let numero = parseInt(prompt("Ingrese un número entero:"));
  if (isNaN(numero)) {
    alert("No es un número.");
  } else if (numero % 2 === 0) {
    document.write("El número es par.");
  } else {
    document.write("El número es impar.");
  }
}

parImpar();
