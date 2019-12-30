// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*
* Use the reduce method in combination with the concat method 
* to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
*/
// flatten takes one param 'arrays'
// reduce uses a current value, previous value, and seed
// use concat method to return one value that is an array
function flatten(arrays) {
return arrays.reduce((flat, current) => flat.concat(current), []);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*
* Write a higher-order function loop that provides something like a for loop statement. 
* It takes a value, a test function, an update function, and a body function. Each iteration, 
* it first runs the test function on the current loop value and stops if that returns false. 
* Then it calls the body function, giving it the current value. Finally, it calls the update function
* to create a new value and starts from the beginning.
*/
// the loop initializes at the start param
// params test update and body are all functions
function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*
* Implement every as a function 
* that takes an array and a predicate function as parameters. 
*/
// takes two params an array and a function
// use a for in loop
function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}



// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
/*
* Write a function that computes the dominant writing direction in a string of text. 
Remember that each script object has a direction property that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
*/ 
// takes one param a string
// created a counted function within the function
function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}


// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
