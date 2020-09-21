/*freecodecamp tutorial: Basic JavaScript: Use Recursion to Create a Range of Numbers
https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers
*/
document.getElementsByTagName("title")[0].innerHTML = "Use Recursion to Create a Range of Numbers";
document.querySelector("h1").innerHTML = "Use Recursion to Create a Range of Numbers";
// var elementoH1 = document.getElementsByTagName("h1#htitle");
// console.log(elementoH1);
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
console.log(rangeOfNumbers(4, 4));
