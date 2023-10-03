const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS"
    }
    if (typeof(n) === "string") {
        n = +n;
    }
    // Iterative solution
/*
    let prev1 = 1;
    let prev2 = 0;
    let sum = prev1 + prev2;
    for (let i = 1; i < n; i++) {
        sum = prev1 + prev2;
        prev2 = prev1
        prev1 = sum
    }
    return sum */

    // Recursive solution
    if (n < 2) {
        return n
    }
    return fibonacci(n -1) + fibonacci(n - 2)
};

// Do not edit below this line
module.exports = fibonacci;
