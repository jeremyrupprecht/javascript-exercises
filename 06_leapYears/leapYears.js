/*
    This function determines whether or not a given year is a leap year.
    Leap year critera: the year
        1. is divisible by four
        2. but is not divisible by 100
        3. unless it's divisbile by 400

*/
const leapYears = function(year) {
    let isLeapYear = false;
    // 1.
    if (year % 4 === 0) {
        isLeapYear = true;
        // 2.
        if (year % 100 === 0) {
            isLeapYear = false;
            // 3.
            if (year % 400 === 0) {
                isLeapYear = true;
            }
        }
    }
    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
