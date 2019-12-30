////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
* Write a range function that takes two arguments, start and end, 
* and returns an array containing all the numbers from start up to (and including) end.
*/
// give start and end parameters
//use a third parameter that changes depending on if start is less than end
// use a for loop that starts at start, end at end, increment by 1
// create empty array then push numbers in
function range(start, end, step = start < end ? 1 : -1) {
  let array = [];
  //return empty array if one value in range
  if(start === end){
    return array;
  }
  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
* write a sum function that takes an array of numbers 
* and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.
*/
//takes an arr, returns sum
//use reduce 
function sum(arr) {
return arr.reduce(function(a,b){
  return a + b;
}, 0)
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//  reverseArray, takes an array as argument and produces 
// a new array that has the same elements in the inverse order.

//loop through array then use unshift to push to new array
function reverseArray(arr) {
let newArr = [];
for(var i = 0; i < arr.length; i++){
newArr.unshift(arr[i]);
}
return newArr;
}
////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
*reverseArrayInPlace, does what the reverse method does: 
it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.
*/

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//takes an array as a parameter
// build a nested set of objects, return list
// set list to null
// loop through array 
function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//create empty array
// loop through node that points to sublist
function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// take value and list as params
// return an object with values
function prepend(value, list) {
return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//takes list and num as params
//use recurision with num - 1
function nth(list, num) {
  if (!list) return undefined;
  else if (num == 0) return list.value;
  else return nth(list.rest, num - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
*Write a function deepEqual that takes two values and returns true only 
if they are the same value or are objects with the same properties, 
where the values of the properties are equal when compared with a recursive call to deepEqual.
*/
// null will return object
// start with true return of deeply equal
//if the length of keys of both a and b are not the same return false
// loop through keys
function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
