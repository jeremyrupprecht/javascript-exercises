const repeatString = function(stringToRepeat, repeats) {

    if (repeats < 0) {
        return "ERROR";
    }

    repeatedString = "";
    for (let i = 0; i < repeats; i++) {
        repeatedString += stringToRepeat;
    }
    return repeatedString;

};

// Do not edit below this line
module.exports = repeatString;
