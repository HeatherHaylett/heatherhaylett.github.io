/*
* DATATYPES
*
* 0. The term datatypes refers to the type of values we can assign to variables. 
* Datatypes can either be simple or complex.
*/

// 1. Number //
/*
* Numeric data holds the value of a number.
* Javascript recognizes positive, negative, and decimal numbers.
*/
var myAge = 28; //myAge is assigned the number datatype 28

// 2. String //
/*
* String data holds the value of a string of characters. The computer will recognize
* a string when it is enclosed with single '' or dobule quotes "". A number with quotes
* will be read as a string.
*/
var herAge = '25'; //herAge is assigned the string datatype 25

// 3. Boolean //
/*
* There are two possible values for the boolean datatype, true or false.
*/
var isFemale = true; //isFemale is assigned the boolean datatype true

// 4. Array //
/*
* An array is a collection of values that can be stored as one. We use brackets [ ]
* to create an array. Array's can hold any datatype and are zero-indexed meaning the first
* value in the array is index 0. Seperate the listed data with commas. 
*/

var jungleAnimals = [ 'monkey', 'frog', 'panther']; //jungleAnimals is assigned to array that contains strings

// 5. Object //
/*
* An object is a collection of values that are stored as key:value pairs. We use curly braces {}
* to create an object. The key, followed by a colon, labels the value and the key name should be associated to the value.
*/

var newPizza = {
    toppings: 'cheese',
    size: 'large',
    price: '15',
}

// 6. Function //
/*
* A function is a block of code that will perform a specified task. To have the task
* execute, the function must be invoked or called. To create a function we use the keyword
* function followed by a name for the function, paretheses to hold parameters, and then curly braces.
* To invoke a function we use the function name followed by parentheses with or without arguments.
* Parameters are place holders for arguments or values that the function will take when it is 
* invoked. Functions generally return a value which is reached with the code word 'return'.
* If there is no return statement in a function it will default to the value undefined.
*/

function add( x){ //declaring a function
    return x + 1; //a return statement that performs an action
}
add(4); //will return x which is now 5

// 7. Undefined //
/*
* If a variable has been declared but not assigned a value the datatype will be undefined.
* Undefined is a falsy value.
*/
var x; //The variable x is the datatype undefined

// 8. null //
/*
* The null datatype refers to when a variable points to no object or nonexistant value.
* Null is a falsy vaue and is also an assigned value.
*/
var z = null; 
console.log(z); //prints null

// 9. NaN //
/*
* The NaN datatype stands for not-a-number. Math functions that fail will return NaN.
* NaN is falsy value.
*/
function checkNumber(x){
    if(isNaN(x)){
        return NaN;
    }
        return x;
}
checkNumber('number') //will return NaN because 'number' is a string

// 10. Infinity and -Infinity //
/*
* The datatype Infinity reperesents a value greater than any other number
* and -Infinity is a value less than any other number.
*/
console.log(Infinity * 4); //prints Infinity 

// 11. What is the difference between primitive/simple and complex datatypes? //
/*
* Simple types of data have a definite size when stored in memory and they cannot
* store or collect other values. Simple datatypes are immutable and copied by value.
* Complex types of data have an indefinite size and can store multiple values.
* Complex datatypes are mutable and copied by reference.
*/
var str = 'string'; //string is a simple datatype
var arr = [ 1, 2, 3]; //an array is a complex datatype that holds multiple numbers

// 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. //
// What does that mean and how are they different? //
/*
* Primitive values are copied by value which means the data value itself is copied over.
* Complex values that are copied by reference point to a space in memory.
*/

var myHouse = 'blue'; // declare and initilize myHouse with a value of blue
var herHouse = myHouse; // assign herHouse the value of myHouse
herHouse = 'red'; //changing the value of herHouse does not change the value of myHouse
console.log(myHouse); //will print blue

