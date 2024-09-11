let str1 = 'hello my name is cena';
let str2 = 'I am front end dev';

// charAt()
console.log(str1[1]);
console.log(str1.charAt(1));

// concat() **
console.log(str1 + str2);
console.log(str1.concat(str2));

//endsWith
console.log(str1.endsWith('cena'));

//includes **
console.log(str1.includes('cena'))

//indexOf **
console.log(str1.indexOf('cena'))

//lastIndexOf
console.log(str1.lastIndexOf('a'))

//repeat
console.log(str1.repeat(5))

// slice **
console.log(str1.slice(17 , 21)) //cena

// splite **
console.log(str1.split(' '))

//trim **
console.log(str1.trim())