"use strict";

let perfectNumbers = [];

function isPerfectNumber(num) {
  if (num <= 1) return false;

  let sum = 0;


  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }

  
  if (sum === num) {
    perfectNumbers.push(num);
    return true;
  }

  
  return false;
};

