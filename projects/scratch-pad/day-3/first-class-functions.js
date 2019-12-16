// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
 //use a conditional statement to compare a given value and given base
 //return a function
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //console.log(base);
    return function greaterThan2(value){
        if(value > base){
            return true;
        }
            return false;
    
    }
   
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
 //return a function declaration that uses conditional statement
 //to compare if valuse is less than base
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function lessThan(value){
        if(value < base){
            return true;
        }
            return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
 //return a function with parameter of a string
 //the function should use conditional statement with 
 //charAt index 0 to compare first character of string to the startsWith value
 //use toUpperCase to make case insensitive -- on both values
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    return function startsWithChar(str){
        let startsWithUp = startsWith.toUpperCase();
        let newStr = str.toUpperCase();
        if(newStr.charAt(0) === startsWithUp){
            return true;
        }
            return false;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
 //return a function declaration that takes a string as the parameter
 //use string.length - 1 to access last character
 //use to lowercase on both values to make case insensitive
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    return function endsWithChar(str){
        let char = endsWith.toLowerCase();
        let myStr = str.toLowerCase();
        if(myStr.charAt(myStr.length - 1) === char){
            return true;
        }
            return false;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
 //we need to modify the given array of strings and return a new array
 //initialize an empty array to collected modified strings
 //loop through given array and apply modify function
 //then push to new array
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    let arr = [];
    for(var i = 0; i < strings.length; i++){
        var newStrings = modify(strings[i]);
        arr.push(newStrings);
    }
    return arr;
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
 //initialize an empty array to collect strings
 //loop through strings array and apply test function
 //push strings that pass test to a new array
 //if the new array length equals the strings length return true
 //
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    let arr = [];
    for(var i = 0; i < strings.length; i++){
        if(test(strings[i]) === true){
            arr.push(strings[i]);
        }
    }
    if(arr.length === strings.length){
        return true;
    }
        return false;

    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}