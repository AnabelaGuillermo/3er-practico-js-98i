"Use strict";

/* Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y
almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado,
luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

let listaCiudades = [];

do {
  let ciudad = prompt("Ingresa una ciudad:");
  if (ciudad !== null) {
    listaCiudades.push(ciudad);
  } else {
    if (listaCiudades.length === 0) {
      alert("No se escribió ninguna ciudad.");
    }
  }
} while (confirm("¿Deseas ingresar otra ciudad?"));

for (let i = 0; i < listaCiudades.length; i++) {
  document.write(listaCiudades[i] + "<br>");
}

document.write(
  "El arreglo de ciudades tiene " + listaCiudades.length + " elementos."
);
document.write("</br>");

document.write("Elemento 1era posición: " + listaCiudades[0]);

document.write("</br>");

document.write("Elemento 3era posición: " + listaCiudades[2]);

document.write("</br>");

document.write(
  "Elemento última posición: " + listaCiudades[listaCiudades.length - 1]
);

document.write("</br>");

listaCiudades.push("París");
document.write("Agrego elemento en la última posición: " + listaCiudades);

document.write("</br>");

document.write(
  "Nuevo elemento última posición: " + listaCiudades[listaCiudades.length - 1]
);

document.write("</br>");

document.write("Elemento 2da posición: " + listaCiudades[1]);

document.write("</br>");

listaCiudades.splice(1, 1, "Barcelona");
document.write("Sustituyo segundo elemento: " + listaCiudades);
