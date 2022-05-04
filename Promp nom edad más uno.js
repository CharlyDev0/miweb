let nombre = prompt("Ingresa tu nombre");

let edad = prompt("ingresa tu edad");

let frase = document.write(
  `Hola ${nombre}, tienes ${edad} años y el año que viene tendras ${
    parseFloat(edad) + 1
  } años.`
);

frase();
