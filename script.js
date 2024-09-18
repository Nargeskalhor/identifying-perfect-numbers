"use strict";
const perfectNumbers = [];
const isPerfectNumber = function (positive) {
  let sum = 0;
  for (let i = 1; i < positive; i++) {
    if (positive % i === 0) {
      sum += i;
    }
  }

  if (sum === positive) {
    perfectNumbers.push(positive);
    return true;
  } else {
    return false;
  }
};
isPerfectNumber(23);
isPerfectNumber(6);
isPerfectNumber(24);
console.log(perfectNumbers);
