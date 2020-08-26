 let isNumber = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
   

    function randomNum(min, max) {
         let random = Math.floor(min + Math.random() * (max +1 - min));
         console.log(random)
         
    
    function numberFunc(random) {
       let question =  prompt ("число от 1 до 100")
        if (question === null) {
            return false;
        }
         else if (!isNumber(question)) {
                  alert ("Введи число!")
                  numberFunc(random);
        }
       else {
        question = +question
           if (question > random) {
               alert("Загаданное число меньше")
               numberFunc(random);
               
           }
           else if (question < random) {
               alert ("Загаданное число больше")
               numberFunc(random);
           }
           else {
               alert("Вы угадали!")
           }
          
       }
  
    }


        numberFunc(random)
}
        randomNum(1,100)
 
    
  