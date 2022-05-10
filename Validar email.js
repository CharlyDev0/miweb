// 20. Programa una función que valide si un email ingresado es válido.

const ValidarEmail = (email = "") => {
  if (!email) return console.warn("No ingresaste ningun email.");
  if (typeof email !== "string")
    return console.error(`El valor "${email}" ingresado, NO es un email.`);

  let expReg =
    /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(
      email
    );

  // La expresión regular que uso para el email en este video /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

  return expReg
    ? console.info(`"${email}",es un email válido.`)
    : console.warn(`"${email}",No es un email válido.`);
};
ValidarEmail();
ValidarEmail(34);
ValidarEmail("esq,fav,@hotmail");
ValidarEmail("esquinafavorita@hotmail.com");
