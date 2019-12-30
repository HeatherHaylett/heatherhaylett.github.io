/*
* OPERATORS
* 
* 0. Operators perform an action on our data such as an assignment or mathematical operation.
* We distinguish operators based on what they do and how many values they take.
*/

// 1. Assignment Operators //
/*
* An assignment operator is the equal sign '='. The right operand is the value
* assigned to the left operand. We can also use assignment operators as shorthand
* for standard operations such as +=, -=, *=, /=.
*/
var h = 5; //5 is assigned to the variable h
var x = 1;
var y = 2;
x += y; //same as writing x = x + y, 


// 2. Arithmetic Operators //
/*
* Arithmetic operators take numerical data and return a single numerical value.
* Arithmetic operators are addition (+), subtraction (-), multiplication (*),
* and division (/). The addition operator can concat strings as well.
*/
console.log('hello ' + 'heather'); // will print 'hello heather'
console.log(2 * 2); // will print 4

// 3. Comparison Operators //
/*
* Comparison operators check to see if two operands have matching contents.
* One way to compare operands is strictly (===) or loosely (==). A strict comparison requires
* the operands to be the same datatypes. A loose comparison will convert the operands
* to the same type. We can also use the bang operator (!) to compare inequality.
* Another way to compare operands is with the greater (>) and less than (<) operators.
* With the equal sign (=) we can compare greater than or equal and less than or equal.
*/
console.log('5' == 5); // will print true
console.log('5' === 5); // will print false 
console.log(5 > 4); // will print true
console.log(1 <= 1); // will print true

// 4. Logical Operators //
/*
* Logical operators return a boolean based on the operands. Logical operators are and (&&), 
* or (||), and not (!). And: both operations must resolve to true, Or: one of the operands must 
* resolve to true, Not: flips the truthiness of the value.
*/
var m = 5;
var n = 2;
console.log(m > 0 && n > 2); // prints true
console.log(m > 0 || n > 2); // prints true
console.log(!(m > 0 || n > 2)); // prints false

// 5. Unary Operators (!, typeOf, -)
/*
* A unary operater takes one operand and performs an operation. 
*/
let t = 5;
console.log(t++); // prints 6
var x = 5;
console.log(!x); // will print false
console.log(typeof '5'); // will print 'string'
console.log(-'-3'); // will print 3

// 6. Ternary Operator (a ? b : c) //
/*
* The ternary operator takes three operands and can be thought of like 
* a condtitional operator. The syntax is a condition followed by a question
* mark, an expression to execute if true, colon, and then an expression to execute
* if condition is false. 
*/
function getPizza(hungry){
 return (hungry ? 'yes' : 'no');   
}
console.log(getPizza(true)); //prints yes