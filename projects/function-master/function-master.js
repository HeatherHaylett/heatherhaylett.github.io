//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// takes an object return to array 
// object.values returns an array
function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// return all keys in a string seperated by space
// object.keys returns property names
// join will modify array to string and we need a space
function keysToString(object) {
return Object.keys(object).join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// return values from object in a string with space
// object to array to use for loop to check for string values
// set empty array literal to push string elements in
// return array to string seperated with space
function valuesToString(object) {
  var arr = Object.values(object);
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
      if(typeof arr[i] === 'string'){
          newArr.push(arr[i]);
      }
  }
  return newArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// return array if array, object if object
// Array.isArray return 'array' else return object

function arrayOrObject(collection) {
if(Array.isArray(collection) === true){
    return 'array';
}
    return 'object';
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take string and capitilize first letter
// use charAt and toUpperCase
// add rest of string with slice
function capitalizeWord(string) {
return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
// capitalize whole string of words
// string to array and loop through then capitalize each word 
// initialize array literal to push new elements then join as string
function capitalizeAllWords(string) {
let arr = [];
let capital = string.split(' ');
//console.log(capital);
for(let i = 0; i < capital.length; i++){
    arr.push(capital[i].charAt(0).toUpperCase() + capital[i].slice(1));
}
    return arr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//take an object with name property and return string 'Welcome, 'name'!'
//capitalize the name
function welcomeMessage(object) {
let name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
return 'Welcome ' + name + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// an object has name and species return name is a species as a string
// use template literals to write one line of code
// name and species are uppercase
function profileInfo(object) {
return `${object.name.charAt(0).toUpperCase()}${object.name.slice(1)} is a ${object.species.charAt(0).toUpperCase()}${object.species.slice(1)}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// look for noises array
// if true return array as string 
// if false return 'there are no noises'
// conditional statement using has own property and checking length
function maybeNoises(object) {
if(object.hasOwnProperty('noises') && object.noises.length >= 1){
    return object.noises.join(' ');
} 
    return 'there are no noises';
    
}
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// take a string and look for word
// return true if word is in string else return false
// string.split to array to check using index
// use includes as array method
function hasWord(string, word) {
    //console.log(string, word);
    let arr = string.split(' ');
return (arr.includes(word)) ? true : false;
}
//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//add name to object friends array and return the object
// use dot notation to add name 
// then return object
function addFriend (name, object) {
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// check if name exists in friend array of object
// use ternary statment to check for array, check length, and check if it includes name
function isFriend(name, object) {

return (object.hasOwnProperty('friends') && object.friends.length > 0 && object.friends.includes(name)) ? true : false;

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// return a list of names that given name is not friends with
// return a new collection, initialize an empty array
// can't be themselves as friend, skip if name equals name
// if the name exists inside the array, skip
// if the name does not exist in the array, push to new array
// loop through array if elemtent i.friends does not include element i.name push to nonFriends
// loop through array and push all names into new array
function nonFriends(name, array) {
    console.log(name, '!!!', array);
    let nonFriends = [];
    for(var i = 0; i < array.length; i++){
        if(array[i].name !== name && !(array[i].friends.includes(name))){
            nonFriends.push(array[i].name);
        }
     
}
        return nonFriends;
}
//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// update the key property on object with new value
// if key does not exist, create it
// use bracket notation then return object
function updateObject(object, key, value) {
    object[key] = value;
    return object;
}
//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// if properties are in array, remove from object 
// we need to get property names and loop through array to check for match
// loop through array then loop through object to find if there is match
function removeProperties(object, array) {
//console.log(object, array)
for(var i = 0; i < array.length; i++){
    for(var key in object){
        if(key === array[i]){
            delete object[key];
        }
    }
}
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// return array with duplicates removed
// create empty array
// loop through array
// check if indexOf array at element i exists in new array, if not, push element
function dedup(array) {
let arr = [];
for(var i = 0; i < array.length; i++){
    if(arr.indexOf(array[i]) < 0){
        arr.push(array[i]);
    }    
}
    return arr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}