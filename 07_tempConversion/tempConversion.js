/*
  These functions convert temperature integers from Fahrenheit to Celsius,
  and vice versa
*/

// Fahrenheit to Celsius formula: xC = 5/6 * (xF − 32)
const convertToCelsius = function(fahrenheitNumber) {
  let unRoundedCelciusNumber = (5/9) * (fahrenheitNumber - 32);
  return Math.round(unRoundedCelciusNumber  * 10) / 10;
};

// Celsius to Fahrenheit formula: xF = (xC * 9/5) + 32
const convertToFahrenheit = function(celciusNumber) {
  let unRoundedFahrenheitNumber = (celciusNumber * (9/5)) + 32;
  return Math.round(unRoundedFahrenheitNumber  * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
