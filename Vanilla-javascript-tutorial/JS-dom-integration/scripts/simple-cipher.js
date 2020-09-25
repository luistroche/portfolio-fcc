function rot13(str){
    var frase ="";
    var e = 0;
    
    while(e < str.length){
      if(str.charCodeAt(e)< 65){
        frase = frase + String.fromCharCode(str.charCodeAt(e));
        e++;
      }else if(str.charCodeAt(e) <= 77){
  
        frase = frase + String.fromCharCode(str.charCodeAt(e)+13);
        e++;
      }else if(str.charCodeAt(e) <= 90){
  
        frase = frase + String.fromCharCode(str.charCodeAt(e)-13);
        e++;
      }else{
  
        frase = frase + String.fromCharCode(str.charCodeAt(e));
        e++;
      }
      
      
  
    }//end while
    return frase;
  }//end traductor function