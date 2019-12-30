/*
* STRING MANIPULATION
*
* 0. String manipulation is the process of modifying a string. 
* Modifying a string can be done with operators or methods.
*/

// 1. With operators //
/*
* We can concatenate or join two strings using the addition operator.
* We can also use the shorthand assignment operators such as (+=).
*/
console.log('See you ' + 'soon!'); //prints 'See you soon!'
var greeting = 'hi';
var name = ' Heather';
console.log(greeting += name); // will print 'hi Heather'

// 2. With string methods //
/*
* In Javascript strings are primitive datataypes and are treated as objects
* when executing methods. 
*/
var greeting = 'Hello, welcome home!';
console.log(greeting.indexOf('welcome')); // prints 1

var string = 'goodbye';
console.log(string.charAt(0)); // prints 'g'

var first = 'first ';
var second = 'second';
console.log(first.concat(second)); // prints 'first second'

var dog = 'Captain'
console.log(dog.endsWith('n')); // prints 'true'

var dog = 'Captain'
console.log(dog.startsWith('n')); // prints 'false'

var dog = 'Captain'
console.log(dog.split('')); // prints [ 'C', 'a', 'p', 't', 'a', 'i', 'n' ]

