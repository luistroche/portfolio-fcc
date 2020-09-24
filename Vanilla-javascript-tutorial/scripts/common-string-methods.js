let stringTestOne = "Este es un string que tiene como objetivo ser testeado por diferentes funciones de metodos strings. ";
let stringTestDos = "El segundo String. Uno Dos Tres Cuatro Cinco Seis Siete Ocho Nueve Diez.";
let cons = console.log;
console.log(stringTestOne);
console.log(stringTestDos);

//charAt()
// The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
cons(stringTestDos.charAt(3));

// charCodeAt()
// The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

cons(stringTestDos.charCodeAt(3));

// concat()
// The concat() method concatenates the string arguments to the calling string and returns a new string.
 
cons(stringTestOne.concat(stringTestDos));

// endsWith()
// The endsWith() method determines whether a string ends with the characters of a specified string, returning true or false as appropriate.

cons(stringTestOne.endsWith("strings"));





