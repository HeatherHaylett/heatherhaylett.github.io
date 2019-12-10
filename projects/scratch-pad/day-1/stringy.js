// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
 //use the length method
function length(string) {
    // YOUR CODE BELOW HERE //
    
    return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
 //use the toLowerCase method
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //

    return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
 //use the toUpperCase method
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    return string.toUpperCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
 //enforce lowercase with toLowerCase
 //use the g switch to search for all spaces in string
 //set a variable to space with g switch
 //use the replace method to add dashes where there are spaces in a string
 //return the str variable
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    var str = string.toLowerCase();
    var space = ' ';
    
    return str.replace(/ /g, '-');
    // console.log(str);
  
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 //We want to look at the character at index zero of the first word in the string.
 //if that character matches a given single character return true
 //need to access first word AND first letter 
 //use a conditional statement with charAt method
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    let str = string.split();
    var newChar = char.toUpperCase();
    //console.log(str[0].charAt(0));
    if(str[0].charAt(0) === newChar){
        return true;
    }
        return false;
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
 //use the split method to get an array 
//set the array to a new variable
//access the last elemenet of the array wich is the last character of the input string
//use toLowerCase() method to make case insensitive
//use conditional statement to compare last character and given character

function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    let str = string.split('');
    console.log(str);
    let newStr = str[str.length - 1];
    var newChar = char.toLowerCase();
    //console.log(str[0].charAt(0));
    if(newStr === newChar){
        return true;
    }
        return false;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
 //set a new value to the strings concatenated with the + operator
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var myStr = stringOne + stringTwo;
    return myStr;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
 //create a new variable that joins the array elemenents
 //return variable as new string
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    var newStr = args.join('');
    return newStr;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
 //use string.length method to find length of two strings
 //use comparison operater in a conditional statement
 //return stringOne if true else return false
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    if(stringOne.length > stringTwo.length){
        return stringOne;
    }
        return stringTwo;


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
 //use a conditional statement 
 //we can compare strings using comparison operators
 //B is greater than A 
 //first check if stringOne is higher in the alphabet than stringTwo
 //if true return 1, if false return -1, return 0 if they are equal
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
if(stringOne > stringTwo){
    return -1;
} else if (stringOne < stringTwo){
    return 1;
} else {
    return 0;
}

    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
  //use a conditional statement 
 //we can compare strings using comparison operators
 //B is greater than A 
 //first check if stringOne is lower in the alphabet than stringTwo
 //if true return -1, if false return 1, return 0 if they are equal
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
if(stringOne < stringTwo){
    return -1;
} else if (stringOne > stringTwo){
    return 1;
} else {
    return 0;
}

    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
