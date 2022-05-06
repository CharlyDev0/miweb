/* Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b*h/2
    rectángulo = b*h
    círculo = π * r2 (pi * radio al cuadrado) */

let figure = prompt(
  "Introduce la figura para averiguar el área: triangle, rectangle or circle"
);

let base;
let height;
let radius;

switch (figure) {
  case "triangle":
    base = prompt("Introdusca el valor de la BASE.");
    height = prompt("Introdusca el valor de la ALTURA.");
    document.write(`El área del triángulo es ${(base * height) / 2}.`);
    break;

  case "rectangle":
    base = prompt("Introdusca el valor de la BASE.");
    height = prompt("Introdusca el valor de la ALTURA.");
    document.write(`El área del rectángulo es ${base * height}.`);
    break;

  case "circle":
    radius = prompt("Introdusca el valor del Radio.");
    document.write(`El área del círculo es ${Math.PI * Math.pow(radius, 2)}.`);
}
