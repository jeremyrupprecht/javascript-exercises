const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(inputArr) {
	return inputArr.reduce((sum, number) => sum + number, 0);
};

const multiply = function(inputArr) {
	return inputArr.reduce((sum, number) => sum * number, 1);
};

const power = function(a ,b) {
  return a**b;
};

const factorial = function(n) {
  // interative version
/*   if (n == 0) {
    return 1
  }
  let sum = 1;
  while (n > 0) {
    sum *= n;
    n -= 1;
  }
  return sum */

  // recursive version
  if (n == 0) {
    return 1
  }
  return n * factorial(n-1)
};



// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
