/*
    This function takes two numbers, and returns the sum of every number
    between(and including) them
*/

const sumAll = function(num1, num2) {

    // validate for negative and non-number parameters
    if (typeof num1 != 'number' ||
        typeof num2 != 'number' ||
        num1 < 0 || 
        num2 < 0) {
            return "ERROR";
     }
    // num1 should hold the smaller number
    // for the loop to work
    if (num1 > num2) {
        temp = num1;
        num1 = num2;
        num2 = temp;
    }
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
        sum += i;
        
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
