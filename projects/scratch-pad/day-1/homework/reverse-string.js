// #!/usr/bin/env node

'use strict';

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a 
 *  String as its only input and returns a new String 
 *  representing the input String reversed.  For example:
 *  
 *      reverseString('hello');  // => 'olleh'
 * 
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know 
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */
//create an empty array to collect letters in reverse order
//use a for loop through string then push to empty array
//use push method
//concatenate string with + operator
function reverseString(input) {
    // YOUR CODE GOES BELOW HERE //
    var arr = []; 
    for(let i = input.length - 1; i >= 0; i--){
    var char = input.charAt(i);
    arr.push(char);
    console.log(arr);
    }
    return arr.join('');
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}