"use strict";


{
  const divisibleBy3 = [];
  const divisibleBy5 = [];
  const divisibleBy3And5 = [];

  for (let i = 1; i <= 45; i++) {
    if (i % 3 === 0) divisibleBy3.push(i);
    if (i % 5 === 0) divisibleBy5.push(i);
    if (i % 3 === 0 && i % 5 === 0) divisibleBy3And5.push(i);
  }

  console.log(divisibleBy3);
  console.log(divisibleBy5);
  console.log(divisibleBy3And5);
}






