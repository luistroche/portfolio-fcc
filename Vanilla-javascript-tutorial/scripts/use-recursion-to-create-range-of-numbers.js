/*freecodecamp tutorial: Basic JavaScript: Use Recursion to Create a Range of Numbers
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers
*/
document.getElementsByTagName("title")[0].innerHTML = "Use Recursion to Create a Range of Numbers";
document.querySelector("h1").innerHTML = "Use Recursion to Create a Range of Numbers";
// var elementoH1 = document.getElementsByTagName("h1#htitle");
// console.log(elementoH1);
/*
function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum){
    return [startNum];
  }else{
    let numeros = rangeOfNumbers(startNum, endNum -1);
    numeros.push(endNum);
    return numeros;
  }

}
console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));*/



/*var contenido=
"function rangeOfNumbers(startNum, endNum) {  \n" + "</br> " +
" if (startNum === endNum){ \n" + " </br> " +
" return [startNum \n" + " </br> " +
"}else{ \n" + " </br> " +
"let numeros = rangeOfNumbers(startNum, endNum -1); \n" + " </br> " +
"numeros.push(endNum); \n" + " </br> " +
"return numeros; \n" + " </br> " +
"} \n" + " </br> " +
"} \n \n" + " </br> " +
"console.log(rangeOfNumbers(1, 5)); \n" + " </br> " +
"console.log(rangeOfNumbers(6, 9)); \n" + " </br> " +
"console.log(rangeOfNumbers(4, 4));\n" + " </br> " +

*/


var contenido =
`function rangeOfNumbers(startNum, endNum) {  
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
   </br> ` ;

// document.getElementById("codigo").innerText = contenido;
// console.log(document.getElementById("codigo"));

document.getElementById("codigo").innerHTML = '<article> '+ contenido +' </article';
