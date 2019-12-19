////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Write a function min that takes two arguments and returns their minimum.
//use Math.min
function min(num1, num2) {
return Math.min(num1, num2);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
* Define a recursive function isEven corresponding to this description. 
* The function should accept a single parameter (a positive, whole number) and return a Boolean.
*/
//create parameter num
//return true or false
//if num is odd return false, if num is even return true
//base case num is 1 or less than 0 / num is 0
//if no statments pass, call the function with num - 2
function isEven(num) {
if(num === 1 || num < 0){
  return false;
}
if(num === 0){
  return true;
} else {
  return isEven(num - 2);
}
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
* Next, write a function called countChar that behaves like countBs, 
* except it takes a second argument that indicates the character that is to be counted 
* (rather than counting only uppercase “B” characters). 
* Rewrite countBs to make use of this new function.
*/

function countChars(str, char) {
let count = 0;
for(var i = 0; i < str.length; i++){
  if(str[i] === char){
    count++;
  }
}
return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* Write a function countBs that takes a string as its only argument and returns 
a number that indicates how many uppercase “B” characters there are in the string.
*/
// string as parameter
// look for uppercase B
// return a number 
// use a for loop to iterate over string, start at 0 stop at length, increment 1
function countBs(str) {
let count = 0;  
for(var i = 0; i < str.length; i++){
  if(str[i] === 'B'){
    count++;
  }
}
return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
