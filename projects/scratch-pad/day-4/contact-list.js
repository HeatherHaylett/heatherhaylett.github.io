// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
//return an object with three key:value pairs
function makeContact(id, nameFirst, nameLast) {
    let obj = {
        id: id,
        nameFirst: nameFirst,
        nameLast: nameLast,
    };
    //console.log(obj, '??????');
    return obj;
    
} 

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     //contacts is an array literal
     //add an object to the contact list array with the makeContact function
     //take a full name string and add to list if found, or undefined if not
     //loop through the contact list and search for fullName
     //create a variable that concatenates nameFirst and nameLast
     
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
             return contacts.push(contact);
        },
        findContact: function(fullName){
            //console.log(contacts, '!!!!!!');
            for(var i = 0; i < contacts.length; i++){
                var wholeName = contacts[i].nameFirst + ' ' + contacts[i].nameLast;
                //console.log(wholeName);
                if(fullName === wholeName){
                    return contacts[i];
                }
                    
            }
            return undefined;
        },   
        removeContact: function(contact){
         //removeContact(contact): takes a contact object to be removed from the contact-list.
         //loop through contact list to match contact object then remove if found
         for(var i = 0; i < contacts.length; i++){
             if(contacts[i] === contact){
                 contacts.splice(i, 1);
             }
        }
        },
        printAllContactNames: function(){
        //return a string of all contacts with full names seperated with a line break
        //loop through contacts list and print full name with a break
        //define fullName
        //last full name has no new line character after it
        //conditional statement for last fullname
        let wholeName = '';
        for(var i = 0; i < contacts.length - 1; i++){
            wholeName += contacts[i].nameFirst + ' ' + contacts[i].nameLast  + '\n';
           
        }
         return wholeName += contacts[contacts.length - 1].nameFirst + ' ' + contacts[contacts.length - 1].nameLast;
    },
};
}



// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
