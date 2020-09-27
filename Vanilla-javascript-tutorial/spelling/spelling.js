/* spelling
words and phrases from a variable
*/


let contenido = "primero while SeguNdo TerceRo { if cuARto Quinto else if  if function";

var rangeOfNumbersTutorial =
` function rangeOfNumbers(startNum, endNum) {  
   </br>  if (startNum === endNum){ 
   </br>  return [startNum 
   </br> }else{ 
   </br> let numeros = rangeOfNumbers(startNum, endNum -1); 
   </br> numeros.push(endNum); 
   </br> return numeros; 
   </br> } 
   </br> } 
   
   </br> console.log(rangeOfNumbers(1, 5)); 
   </br> console.log(rangeOfNumbers(6, 9)); 
   </br> console.log(rangeOfNumbers(4, 4));
   </br> var ` ;


















// console.log(contenido[0][3]);
// console.log(contenido);
// let otro = contenido.replace(/if/g, "<span id='if' class='if-class'>if</span>");
//  console.log(otro);
function formateando(suString){
    let produ = "";
        produ = suString.replace(/if/g, "<span id='if' class='if-class'>if</span>");
        produ = produ.replace(/else/g, "<span id='if' class='if-class'>else</span>");
        produ = produ.replace(/while/g, "<span id='while' class='while-class'>while</span>");
        produ = produ.replace(/{/g, "<span id='brackets' class='brackets-class'> &#123 </span>");
        produ = produ.replace(/}/g, "<span id='brackets' class='brackets-class'> &#125 </span>");
        produ = produ.replace(/let/g, "<span id='funct' class='funct-class'>let</span>");
        produ = produ.replace(/function/g, "<span id='funct' class='funct-class'>function</span>");
        return produ;

    }
         
        


console.log(formateando(contenido));

document.getElementById("agregar").innerHTML= `<article> ${formateando(rangeOfNumbersTutorial)} </article`;

