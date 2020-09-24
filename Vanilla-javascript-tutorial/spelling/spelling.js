/* spelling
words and phrases from a variable
*/


let contenido = "primero while SeguNdo TerceRo if cuARto Quinto else if  if function";
let filtrado = [];


















// console.log(contenido[0][3]);
// console.log(contenido);
// let otro = contenido.replace(/if/g, "<span id='if' class='if-class'>if</span>");
//  console.log(otro);
function formateando(suString){
    let produ = "";
         produ = suString.replace(/if/g, "<span id='if' class='if-class'>if</span>")
         return produ;

}

console.log(formateando(contenido));

document.getElementById("agregar").innerHTML= `<article> ${formateando(contenido)}  </article`;

