// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-heatherhaylett");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
//input: array output: number
//use filter
//
var maleCount = function(array) {
    let result = array.filter(function(elem){
        return elem.gender === 'male'
    });
    return result.length;
};

//find number of female customers using reduce
//input array output number
//reduce takes a seed, array, and callback function
//start seed at 0, use seed as prevVal and elem to access gender
var femaleCount = function(array) {
    let result = array.reduce(function(seed, elem){
        return  seed += elem.gender === 'female';
    }, 0);
    return result;
};

//find the oldest customers name
//input array, output string, use reduce
//use seed and elem
//if curr elem age is greater return, otherwise move to next elem
//final return should be name of customer
var oldestCustomer = function(array){
    let result = array.reduce(function(oldest, cust){
        if(oldest.age > cust.age){
            return oldest;
        }
            return cust;
    }, 0);
    return result.name;
};

//find the youngest customers name
//input array, output string
//use seed and elem
//if curr elem age is less return, otherwise move to next elem
//final return should be name of customer
var youngestCustomer = function(array){
    let result = array.reduce(function(youngest, cust){
        if(youngest.age < cust.age){
            return youngest;
        }
            return cust;
    }, 0);
    return result.name;
};

//find the average balance of all customers
//input: array output: number
//reduce will take a seed and element
//get rid of $ and , using regexp
//add the balance key of customer to seed and divide by two
//parseInt will return an integer

var averageBalance = function(array){
    let result = array.reduce(function(seed, cust){
    var regp = /[$,]+/g;  
        return (seed += (parseFloat(cust.balance.replace(regp, ''))))
    }, 0);
    let average = result / array.length;
    //console.log(average);
    return  average;
};

//find how many customers name begin with a given letter
//input: array, letter output: number
// filter will apply a func and return array of vlaues that pass true
// force char and first letter to lowercase before comparison
//retrun length of result for number
var firstLetterCount = function(array, char){
  
    let result = array.filter(function(elem, i, coll){
        var newChar = char.toLowerCase();
        var custChar = elem.name.charAt(0).toLowerCase();
        //console.log(elem.name.charAt(0));
        if(custChar === newChar){
            return elem;
        }
    }); 
            return result.length;
};

//Find how many friends of a given customer have names that start with a given letter
//take array customer letter, output: number
//friends of a person is an array of objects
//use filter to create an array containing just given customer object
//set friends array of given cust to new var and use for loop 
//use toLowerCase()
//return length of array to get a number
var friendFirstLetterCount = function(array, cust, char){
        //console.log(cust);
        let result = array.filter(function(elem, i, coll){
            if(elem.name === cust){
                return cust;
            }
        });
        let charCount = result[0].friends;
        //console.log(charCount);
        let arr = [];
        for(var h = 0; h < charCount.length; h++){
            var newChar = char.toLowerCase();
         
            if(charCount[h].name.charAt(0).toLowerCase() === newChar){
                arr.push(charCount[h]);
            }
        }
        return arr.length;
};

// Find the customers' names that have a given customer's name in their friends list
// input: array, name output: array
// we want to return an array of names
// we need to look at friends array, use filter 
// set variable to element.friends
// set variable to elem.name
// set array literal variable outside of filter function
// loop through friends array and look for cust match, if found push to array
// return array
var friendsCount = function(array, cust){
    var arr = [];
    let result = array.filter(function(elem, i, coll){
            let search = elem.friends;
            let found = elem.name;
            
            //console.log(elem.friends);
            for(let h = 0; h < search.length; h++){
                if(search[h].name === cust){
                    arr.push(found);
                }
            }
    });
            return arr;
};

// Find the three most common tags among all customers' associated tags
//input: array (custs) output: array (tags)
// create an object to track tag names and number of times they appear
//reduce to get one array of object
var topThreeTags = function(custs){
    let result = custs.reduce(function(prevCust, currCust){
    let arrOfTags = currCust.tags;
    _.each(arrOfTags, function(tag){
    //if tag exists, increment it's occurence
    if(prevCust[tag]) {//if it's in the seed 
        prevCust[tag]++;
    } else {
    prevCust[tag] = 1;
    } //if it does not exist, add the new property
    });
    return prevCust;
    }, {});
    //create new variable to hold nested arrays to be sorted
    let holder = [];
    _.each(result, function(value, key){
        holder.push([key, value]);
    });
    //now we want to sort holder array using sort method
    holder.sort(function(a, b){
        return b[1] - a[1];
    });
    //use slice to slice off first three tag array
    var top3 = holder.slice(0, 3);
    let final = top3.map(function(nestedArray){
        return nestedArray[0];
    })
    return final;
};

//Create a summary of genders
//input: array output: object
//use reduce
var genderCount = function(custs){
    //create an object to collect key:value pairs
    let genders = {};
    //set accumulator to a counter of three values
    let acc = [0, 0, 0];
    //reduce callback function will take accumulator and elem
    _.reduce(custs, function(acc, elem){
        //conditional statesments to check for gender then add to accumulator
        if(elem.gender === 'female'){
            acc[0] += 1;
            return acc;
        } else if(elem.gender === 'male'){
            acc[1] += 1;
            return acc;
        } else if(elem.gender === 'non-binary'){
            acc[2] += 1;
            return acc;
        }
            return acc;
}, acc);
    //add property to genders object
    genders.female = acc[0];
    genders.male = acc[1];
    genders['non-binary'] = acc[2];
    //return genders object
    return genders;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
