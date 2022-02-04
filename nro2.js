console.log("Ejercicio nro 2"); // Titulo del script

// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

let texto = prompt("Ingrese una cadena de texto"); //Asigna el valor ingresado en la variable texto
let corte = prompt("Ingrese un número donde se cortará la cadena"); // Asigna el valor ingresado en la variable corte

function cortaTexto(str, num) {
  let largo = Number(str.length); // Asigna el largo de la cadena como número a la variable largo

  if (num > largo) {
    // Comprara valores numéricos
    alert("El numero de corte es mayor que la longitud de la cadena de texto");
  } else {
    alert("Cadena de texto cortada: " + str.slice(0, num)); //Recorta el texto en la posición indicada
  }
}

cortaTexto(texto, corte); // Llama a función
