/*
* CONTROL FLOW
*
* 0. Control flow is how we specify which actions happen at which time.
* We make decisions based on the result of true or false questions.
* We ask these decision making questions with conditional If statements 
* and else-if/else chains.
*/

// 1. If //
/*
* An if statement uses the keyword if followed by parentheses which hold the 
* conditional statement that will resolve to true or false. If the test condition is 
* true, the action in the following code flock will run.
*/
var weather = 'sunny';
if(weather === 'sunny'){
    console.log('get some ice cream');  // prints 'get some ice cream'
}

// 2. Else-if //
/*
* The else if chain gives us the ability to test more than one option. 
* The keyword else comes after the closing curly brace from the code block
* associated with the first conditional statement.
*/
var weather = 'sunny';
if(weather === 'sunny'){
    console.log('get some ice cream');  // prints 'get some ice cream'
} else {
    console.log('get a jacket'); //does not reach this code
}

// 3. Else //
/*
* A default else at the end of a conditional statement will preform an action
* if none of the conditions are true.
*/
var weather = 'cloudy';
if(weather === 'sunny'){
    console.log('get some ice cream');  // resolves to false, does not print
} else {
    console.log('get a jacket'); // prints 'get a jacket'
}

// 4. Switch //
/*
* A switch statement takes an input expression and checks if it matches a 
* case clause. If it's a match, the statment associated with that case will
* execute. A break statement will end the case. A switch statment starts with 
* the keyword switch followed by parentheses then code block that uses the keyword
* case and a semicolon and finally an action to run if the case clause is matched.
*/
var name = 'Haley';

switch(name){
    case 'Rachel': // does not match 
    console.log('hi Rachel'); // does not print
    break;
    case 'Max': // does not match 
    console.log('hi Max');  // does not print
    break;
    case 'Haley': //matches 
    console.log('hi Haley'); // prints 'hi Haley'
    break;
}