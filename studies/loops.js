/*
* LOOPS
*
* 0. A loop is a block of code that repeats for a set amount of times.
*/

// 1. Explain while, for, and for-in loops //
/*
* While loops: A while loop is code that will run 'while' a conditional is true.
*/
var myParty = 50;
while(myParty < 100){ // keyword while 
    myParty++; // incrementer to manipulate the conditional and stop the loop
}

/* For loops: A for loop is used whenever our data has a length property.
* A for loop takes a starting condition, stopping condition, and incrementor or decrementor.
* To create a for loop we use the keyword 'for' followed by parentheses.
* In the parentheses the conditionals are seperated by semi-colons (;).
*/

for(var i = 0; i < 5; i++){ // keyword 'for', starting, stopping, and manipulation conditional
    console.log(i); // code that will repeat until stopping condition is no longer true, prints 0 - 4
}

/* For-in loops: For-in loops are used to loop over objects. They refer to keys and the
* object you will be looping over. To create a for-in loop, we start with the keyword
* 'for' followed by parentheses. In the parentheses we just a variable keyword, then key
* which can be a specific name of a key or not, then keyword 'in' and the name of the object.
*/
let myFriends = { // object to loop over
    friend1: 'Haley',
    friend2: 'Tyler',
}
for(var key in myFriends){ // keyword 'for' and in parentheses variable keyword, key, 'in' keyword, and object name 
    console.log(key); // prints name of keys in object, friend1 and friend2
}

// 2. Be able to loop any number of times, forward //
// counting up to some limit, backward counting down to 0. // 
/*
* To loop any number of times forward and backward, we need to use a for loop.
*/
for(var i = 0; i <= 20; i++){ // starts at zero and increments
    console.log(i); // prints 0 - 20
}

for(var i = 20; i >= 0; i--){ // starts at 20 and decrements
    console.log(i); // prints 20 - 0
}

// 3. Loop over an array forwards and backwards. //
/*
* To loop over an array we use a for loop.
*/
let myArr = [1, 2, 3, 4];
for(var i = 0; i < myArr.length; i++){ // start at index 0 and increment to last index
    console.log(myArr[i]); // prints number at index of the number i, 1 - 4
}

let arr = [5, 6, 7, 8];
for(var i = arr.length - 1; i >= 0; i--){ // start at last index and decremenet to 0
    console.log(arr[i]); // prints 8 - 5
}

// 4. Loop over an object. //
/*
* To loop over an object we use a for-in loop.
*/

let myObj = {
    key1: 'home',
    key2: 'away',
    key3: 'lost',
}
for(var key in myObj){
    console.log(myObj[key]); // will print values of keys in myObj
}