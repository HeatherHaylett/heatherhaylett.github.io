/*
* FUNCTIONS
*
* 0. Functions are a type of data that house reusable code.
* This means the code can be used whenever and for an unlimited amount
* of times. 
*/

// 1. The two phases to using functions: First we must ___? //
// Next we can execute (or two other words for executing a function?) a function by? //
/*
* First we must declare or create a function. Then we can invoke or call the function
* to execute.
*/
function add(x, y){ // declare the function add
    return x + y;
}
add(2, 3); // call or invoke the function 

// 2. What’s the difference between a function’s parameters and arguments PASSED to a function? //
/*
* A functions parameters are placeholders for values in the parentheses. A function can take
* any number of parameters. Parameters should be clearly named so we know what needs to be 
* provided. Arguments passed to a function are inputs or values that are passed to the function when we execute.
*/
function printName(name){ // takes 1 parameter, is asking for a name
    console.log(name)
}
printName('Heather'); //prints Heather to the console.

// 3. What’s the syntax for a NAMED function? //
/*
* The keyword 'function' followed by the name of the function and then parentheses.
* The parameters are inside the parentheses. Following that are curly braces to 
* house the code block that contains an action to execute.
*/
function getDog(animal){ // function keyword then name getDog and parameter in parentheses
    return animal; // action inside code block
}

// 4. How do we assign a function to a variable? //
/*
* We use a variable keyword followed by the function name
* and then the assignment operator. After the assignment operator 
* we use the function keyword, parentheses with parameters, and the code block.
*/
let myDog = function(animal){ // variable keyword and function name myDog then assignment operator
    console.log(animal); // action inside code block
}

// 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. // 
// How do we specify inputs, and how do we specify outputs? //
/*
* A function can take any number of inputs, but will return a single value. By default
* a function will return undefined. We specify inputs with parameters and outputs
* with the return keyword.
*/
function printList(value1, value2, value3){ // this function takes three inputs
    return value1 + value2 + value3; // will return one value, the sum of all arguments
}

// 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true. //
/*
* Scope defines where what variables are accessible and where. The global scope is anything outside
* of a function and the local scope is anything within the function body.
* Functions can acess variables in their parent scope, but parent scopes cannot
* access variables in the child scope.
*/
let a = 3;
function getA(){
    a = 10;
}
console.log(a); // prints 3, looking to the global scope
getA(); // call the function
console.log(a); // once the function is called, prints 10

// 7. Closures: Functions form closures around the data they house. //
// If an object returned from the Function and is held in memory somewhere (referenced), //
// that closure stays ALIVE, and data can continue to exist in these closures! // 
/*
* A closure is when an inner function has access to an outer functions variables.
* A closure can access its own scope, outer function variables (even after the
* outer function returns), and the global scope.
*/

function outerFunc(value5){ // the outer function
    function innerFunc(value6){ // the inner function
        return value5 + value6; // the inner function has access to the outer functions variables
    }
}