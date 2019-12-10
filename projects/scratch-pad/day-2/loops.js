// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
 //use a for loop
 //initialize at 0, stop at array.length, increment by 1
 //inside the code block print values to the console
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
for (var i = 0; i < array.length; i++){
console.log(array[i]);
}
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
 //use a for loop
 //initialize at array.length - 1, stop at 0, decrement by 1
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
for (var i = array.length - 1; i >= 0; i--){
  console.log(array[i]);
}
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
 //use a for in loop
 //create an empty array to push object keys into
 //return teh array
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  var arr = [];
  for(var key in object){
  arr.push(key);  
  }
  return arr;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
 //use a for loop and in the code block print keys to the console
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
 for (var key in object){
   console.log(key);
 } 
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
 //initialize an empty array
 //use bracket notation to access the values of the keys because we don't know the exact name of the keys
 //push those values into the array
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var myArr = [];
  for (var key in object){
  myArr.push(object[key]);
}
  return myArr;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
 //use a for in loop to access the values of the keys 
 //print the values in the code block using bracket notation
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object){
    console.log(object[key]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
 //use the Object.keys() method
 //return the method . length 
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  return Object.keys(object).length
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
 //initialize an empty array and push values in
 //loop over the array backwards
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  var myArr = [];
  for (var key in object){
  myArr.push(object[key]);
}
  //console.log(myArr);
  for(var i = myArr.length - 1; i >= 0; i--){
    console.log(myArr[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
