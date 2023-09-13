/*

Problem solving scratch (keep this for reference), the actual comments
are displayed below this section. Note that this section should be 
deleted (or moved to another file) if anyone else wants to read this code

1. write out question in english: write a function that takes an array
   and a varying list of arguments then removes these other arguments 
   from that array

2. ask questions:
    UI                          none
    Inputs                      an array and an certain number of elements to 
                                remove from the array
    Outputs                     the original array, but excludign the specified elements
    How to get from inputs      search the array for each element and remove it, then return
    to outputs                  the final array

3. pseudocode

    1. save the arguments to a list
    2. loop over the arguments to remove list
    4. loop over the array for each argument
    5. if the argument is found, remove it from the array
       and break
    6. once the end of the arguments array is reached, return the 
       filtered array
*/

/* 
   This function takes an array as it's first argument and 
   any number of other arguments that are to be removed 
   from the array
*/
const removeFromArray = function() {
    let arrayToRemoveFrom = arguments[0];
    // for each argument after the array
    for (let i = 1; i < arguments.length; i++) {
        // for each element in the array
        let o = 0;
        while (o < arrayToRemoveFrom.length) {
            if (arrayToRemoveFrom[o] === arguments[i]) {
                arrayToRemoveFrom.splice(o, 1);
                break;
            }
            o++;
        }
    }
    return arrayToRemoveFrom;
};

// Do not edit below this line
module.exports = removeFromArray;
