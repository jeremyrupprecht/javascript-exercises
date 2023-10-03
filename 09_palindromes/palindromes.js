const palindromes = function (str) {
    str = str.toLowerCase().replace(/[\.,?!\s]/g, "")
    // Use the Two Pointers algorithm
    let l = 0
    let r = str.length-1
    while (l < r) {
        if (str[l] !== str[r]) {
            return false
        }
        l += 1
        r -= 1
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
