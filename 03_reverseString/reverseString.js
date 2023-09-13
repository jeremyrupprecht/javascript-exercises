/* This function reverses a string, this is done by repeatedly taking the last
   character of the initial string and placing it at the end/tail of a new empty
   string. This is done for every character in the initial string.
   
   example:     initial string      reversed string

                "hello"      ->      ""
                "hell"       ->      "o"
                "hel"        ->      "ol"
                "he"         ->      "oll"
                "h"          ->      "olle"
                ""           ->      "olleh"
*/
const reverseString = function(stringToReverse) {

    let initialCharacterArray = stringToReverse.split("");
    let reversedCharacterArray = [];

    while (initialCharacterArray.length > 0) {
        let lastChar = initialCharacterArray.pop();
        reversedCharacterArray.push(lastChar);
    }   
    return reversedCharacterArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
