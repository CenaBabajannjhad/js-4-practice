const users = [
    "ali",
    "negin",
    "narges",
    "hossein",
    "cena",
    "shayan",
    "maryam",
    "shiva",
    "abbas",
  ];
const arraySlicer = (arr , start = 0 , end = undefined) => {
    return arr.slice(start , end);
}
console.log(arraySlicer(users , 2)); // as 2 from end of lists
console.log(arraySlicer(users , 1 , 6)); // as 1 from 6



const numbers2 = [25, -5,-5,-5, 0, 69, -36, 9, 63, -12, 5];
const removeNegativeNumbers = arr => {
    for(let i = 0 ; i < arr.length ; i++){
        if(arr.at(i) < 0){
            arr.splice(i, 1);
            i--;   //here
        }
    }

    return arr;
};

console.log(removeNegativeNumbers(numbers2));



const reverseWords = (word) => {
    let letters = word.split('');
    letters.reverse();
    letters = letters.join('');
    letters = letters.split(' ');
    letters.reverse();
    return letters;
}

console.log(reverseWords('hello world , i am cena'));










const numbers1 = [25, -500, -5, 0, 69, -36, 9, 630, -12, 5];
const result = [];

numbers1.forEach(e => {
    if(e > 0){
        if(e % 2 === 0){
            result.push(Math.sqrt(e));
        }
        if(e % 2 !== 0){
            result.push(e * 2);
        }

    }else{
        if(e % 2 === 0){
            result.push(e ** 2);
        }
        if(e % 2 !== 0){
            result.push(Math.sin(e));
        }
    }
})

console.log(result);