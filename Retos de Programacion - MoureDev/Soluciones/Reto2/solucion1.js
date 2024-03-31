function contarLetras(palabras) {
    return palabras.split("");
    //split-> hace que se salte las palabras 
  }
  
  function anagramas(palabra1, palabra2) {
    palabra1 = palabra1.toLowerCase();
    palabra2 = palabra2.toLowerCase();
    //toLowerCase-> convierte en minusculas las palabras
  
    let texto1 = contarLetras(palabra1);
    let texto2 = contarLetras(palabra2);
  
    let estado = false;
  
    texto1.forEach((element) => {
      if (!texto2.includes(element)) {
        //includes-> incluye una palabra dentro del elemento actual
        estado = true;
        return false;
      }
      return true;
    });
  
    console.log(estado ? "no es un anagrama" : "es un anagrama");
  }
  
  anagramas("Perro", "orrep");