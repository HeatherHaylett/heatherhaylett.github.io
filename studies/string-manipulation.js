/*
* STRING MANIPULATION
*
* 0. String manipulation is the process of modifying a string. 
* Modifying a string can be done with operators or methods.
*/

// 1. With operators //
/*
* We can concatenate or join two strings using the addition operator.
*/
console.log('See you ' + 'soon!'); //prints 'See you soon!'

// 2. With string methods //
/*
* In Javascript strings are primitive datataypes and are treated as objects
* when executing methods. 
*/
var greeting = 'Hello, welcome home!';
console.log(greeting.indexOf('welcome')); // prints 1