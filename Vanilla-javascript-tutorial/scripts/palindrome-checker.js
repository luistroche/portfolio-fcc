function palindrome(a){
    var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var spelledWord = a.replace(/\s+/g, '').toLowerCase().split("");
    var filteredWord = [];
    for(var e = 0; e < spelledWord.length; e++){
        abc.map(function(x){
        if(spelledWord[e] == x){
          filteredWord.push(spelledWord[e]);
        }//if
        
      });
    }//for
      if (filteredWord.join() == filteredWord.reverse().join()){
      return true;
    }else {
      return false;
          }
  }
  
  
  
  palindrome("eye");