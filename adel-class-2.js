// const convertStringToCapitalize = (str) => str.at(0).toUpperCase() + str.slice(1);
// console.log(convertStringToCapitalize('cena'));


// const ages = [12,5,6,23,8];
// const result = ages.some(e => e > 15);
// const positive = ages.every(e => e >= 0);

// console.log(positive);


const users = "cena shayan negin shiva maryam narges ali saeed hossein";
let output = users.split(' ').filter(e => {
    return e.length >= 5;
})
console.log(output);
