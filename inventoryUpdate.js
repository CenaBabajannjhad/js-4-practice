const inventory = ["mouse", "keyboard", "monitor", "laptop", "printer"];
const searchTerm = "laptop";


// a function make check the array if have laptop add it into end of array , if it's dosen't exits add laptop in end of array
const inventoryUpdate = (arr , searchValue) => {
    let indexOfSearchValue = arr.indexOf(searchValue);

    // if searchTerm exist
    if(indexOfSearchValue >= 0){
        let product = arr.splice(indexOfSearchValue , 1);
        arr.push(...product);
        return arr;

    }else{ //or not exist
        arr.push(searchValue);
        return arr;
    }
}
console.log(inventoryUpdate(inventory , searchTerm))
// updated array
const theFirstThree = inventory.slice(0 , 3);
const theLastTwo = inventory.slice(3 , inventory.length)
const joinNewArrays = theFirstThree.concat(theLastTwo).join(' ; ')
console.log(joinNewArrays);
