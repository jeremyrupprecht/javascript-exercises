const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS"
    }
    if (typeof(n) === "string") {
        n = +n;
    }
    // Iterative solution

    // 1, 1, 2, 3,
    let prev1 = 1;
    let prev2 = 0;
    let sum = prev1 + prev2;
    for (let i = 1; i < n; i++) {
        sum = prev1 + prev2;
        prev2 = prev1
        prev1 = sum
    }
    return sum

    // Recursive solution
};

// Do not edit below this line
module.exports = fibonacci;
