let input = ["cena", "BANANA", "Undefind", 32, "Hala madrid"];
// expected output ["CENA", "banana", "UNDEFIND", "HALA MADRID"];

//logic : lowercase => upper , upper => lower , number => del , str[0] upper

const changeStatus = (arr) => {
    return arr.filter(e => !Number.isInteger(e)).
    map((e) => {
        if (e === e.toLowerCase() || e.at(0) === e.at(0).toUpperCase() && e.at(1) !== e.at(1).toUpperCase()) {
        return e.toUpperCase();
        
        }
        if (e === e.toUpperCase()) {
        return e.toLowerCase();
        }
  });
};

console.log(changeStatus(input));
