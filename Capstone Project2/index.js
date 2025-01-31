function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        var fibonacci = [];
        //Write your code here:
        
        if (n === 1){
            fibonacci = [0];
        }
        else if (n === 2){
            fibonacci = [0, 1];
        }
        else {
            fibonacci = [0, 1];
            
            while (fibonacci.length < n){
             
                let newPush = fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2];
                fibonacci.push(newPush);
            }
           
        }
        return fibonacci
    
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    console.log(fibonacciGenerator(1));
    console.log(fibonacciGenerator(2));
    console.log(fibonacciGenerator(15));
    function fibonacciGenerator (n) {
        //Do NOT change any of the code above 👆
            var fibonacci = [];
            //Write your code here:
            
            if (n === 1){
                fibonacci = [0];
            }
            else if (n === 2){
                fibonacci = [0, 1];
            }
            else {
                fibonacci = [0, 1];
                
                for (var i = 2 ; i <n ; i++){
                    fibonacci.push(fibonacci[fibonacci.length-1] + fibonacci[fibonacci.length-2]);
                    
                }
                  
                }
                return fibonacci
            }
           
        
