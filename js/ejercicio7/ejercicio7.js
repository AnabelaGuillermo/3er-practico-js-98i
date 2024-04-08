"Use strict";

/* Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla,
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados
del 1 al 10 del número elegido por el usuario. */

function generarTabla() {
  let numero = parseInt(prompt("Ingrese un número:"));

  if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.");
    return;
  }

  let tabla = "<h2>Tabla de Multiplicar del " + numero + "</h2>";
  tabla += "<table border='1'><tr><th>Número</th><th>Resultado</th></tr>";

  for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    tabla +=
      "<tr><td>" + numero + " x " + i + "</td><td>" + resultado + "</td></tr>";
  }

  tabla += "</table>";

  document.write(tabla);
}

generarTabla();
