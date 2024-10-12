const numbers = Array.from({length : 50} , (_ , i) => i % 2 === 0 ? i : i * 3 );
let result = numbers.sort((a , b) => a - b)

console.log(result);
