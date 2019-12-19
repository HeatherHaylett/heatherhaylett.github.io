
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a loop that makes seven calls to console.log to output the following triangle:
//use a for loop 
//to work with any number, give the function a num param that will be the less than or equal stopping point
//set triangle as '#' then incrmenet by adding one '#' each loop
//use length property to compare to num param
function triangles(num) {
for (var triangle = "#"; triangle.length <= num; triangle += "#") 
  console.log(triangle);
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
*Write a program that uses console.log to print all the numbers from 1 to 15, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible 
by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/
//use lowercase
//loop through numbers 1 - 15
//i % 3 = nums divs by 3 i % 5 = nums divs by 5 
//start with 3 and 5 
function fizzBuzz() {
for(var i = 1; i <= 15; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log('fizzbuzz');
  } else if (i % 3 === 0){
    console.log('fizz');
  } else if (i % 5 === 0){
    console.log('buzz')
  } else {
    console.log(i);
  }
  }
}


////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/*
* Write a program that creates a string that represents an 8×8 grid, using newline 
characters to separate lines. At each position of the grid there is either 
a space or a "#" character. The characters should form a chessboard.
*/
//set a variable to an empty string
//to create horizantal line of " " and "#" we need to use for loop
//enclose that loop with another for loop to go vertical
//inside for loop should check for even number and add y to change position of characters
//in the outside loop add a break '\n'
function drawChessboard(num) {
var board = '';

for(var y = 0; y < num; y++){
  for(var x = 0; x < num; x++){
    if((x+y) % 2 === 0){
      board += ' ';
    } else {
      board += '#';
    }
  }
    board += '\n';
}
    console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
