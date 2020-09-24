/* spelling
words and phrases from a variable
*/


let contenido = [`primero SeguNdo TerceRo cuARto Quinto`];
let contenido1 = contenido;
let filtrado = [];


















console.log(contenido[0][3]);
filtrado.push(contenido[0][3]);
console.log(filtrado + `<--`);
console.log(contenido);
for( var i = 0; i < contenido.length; i++){
    console.log(contenido[0][i]);
    if (contenido1[0][i] == ["a", "b", "c", "m"]) {
        console.log(`-->${contenido1[0][i]}<--`);

    }else{

        console.log(contenido[0][i]);

    }
}