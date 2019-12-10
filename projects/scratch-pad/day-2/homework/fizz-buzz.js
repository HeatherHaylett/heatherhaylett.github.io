// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
//we need to loop and initialize at 1, stop at 100, increment by 1
//inside the loop we use conditional statements
//to get multiples of 3 we use modulus 3 === 0
//to get multiples of 5 we use modulus 5 === 0
//multiples of both 5 and 3 we need to have as the first if statement to avoid the loop stopping
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    for(var i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        } else if (i % 3 === 0){
            console.log('Fizz');
        } else if (i % 5 === 0){
            console.log('Buzz');
        } else 
        
        console.log(i);
    }


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}