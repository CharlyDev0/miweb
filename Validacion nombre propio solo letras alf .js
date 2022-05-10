// 19. Programa una función que valide si un nombre ingresado es válido. Por ejemplo miFuncion ("Carlos Roselló") devolvera verdadero.

const ValidarNombre = (nombre = "") => {
  if (!nombre) return console.warn("No ingresaste ningun nombre.");
  if (typeof nombre !== "string")
    return console.error(
      `El valor "${nombre}" ingresado, NO es una cadena de texto.`
    );

  // /^(no puede haber nada antes y despues )$   (de la A  "-" la Z )(\s acepta espacios en blanco)(comodin "g" busca en todos los caracteres)
  let expReg = /^[A-za-zÑñÁáÉéÍíÓóÚúü\s]+$/g.test(nombre);

  return expReg
    ? console.info(`"${nombre}",es un nombre válido.`)
    : console.warn(`"${nombre}",No es un nombre válido.`);
};

ValidarNombre();
ValidarNombre(3);
ValidarNombre("Carlos Roselló");
ValidarNombre("carlos Roselló, 49");
