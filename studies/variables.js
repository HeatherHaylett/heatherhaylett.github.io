/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
/*
* We declare a variable when we create it. To declare a variable use the keyword var, let, or const
* followed by the variable name. A variable that is not assigned a value will be undefined.
*/
var myName; //use the var keyword to declare myName
console.log(myName); // prints => undefined

// 2. initialization or assignment //
/*
* In Javascript '=' is known as the assignment operator. If we want a variable to hold a 
* value we assign it a value with the assignment operator. We use the term initialize 
* interchangably with assignment.
*/
myName = 'john'; //assign myName to 'john'
console.log(myName); // prints => john

// 3. re-assignment //
/*
* When you re-assign a variable you use the same identifier and assing a new value.
*/
myName = 'heather'; //assign myName to 'heather'
myName = 'bob'; //re-assign myName to 'bob'
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

// 4. var, let, const //
/*
* To hold things in memory we assign them to a variable. There are three variable keywords
* var, let, and const. Each keyword has properties that determine how they can be used.
* Scope tell us where a variable can be used after it has been decleare. 
* Var values are function scoped and let and const values are block scoped meaning they are 
* stuck in the scope of any block scope. Var and let can be re-assigned values while
* const cannot.
*/
var myDog = 'Captain'; //use var to assign and initialize myDog
let myCat = false; //use let to assign and initialize myCat;
const myBird = 'parrot'; //use const to assign and initialize myBird

// 5. Hoisting //
/*
* Before a computer runs the statement of a program, variable declarations and 
* function declarations are taken to the top of the program, otherwise known as
* hoisting. Values declared with var can be referenced before declaration while 
* let and const are not available until the interpreter reaches the line of code
* that has the variable initialization.
*/

var favFood; //the computer searches for variables to hoist
favFood = 'italian'; //the initialization is not brought to the top, only the declaration