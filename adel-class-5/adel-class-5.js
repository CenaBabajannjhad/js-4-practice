const formElement = document.querySelector('#form');
const firstInput = document.querySelector('.first-input');
const secInput = document.querySelector('.sec-input');
const userArray = [];

formElement.addEventListener('submit' , e => {
    e.preventDefault();
    let userName = fetchInputValue(firstInput);
    let userAge = fetchInputValue(secInput);
    let person = {name : userName , age : userAge};
    userArray.push(person);
    console.log(userArray);
    resetInputValue(firstInput)
    resetInputValue(secInput)
})
function fetchInputValue(element){
    return element.value.trim();
}
function resetInputValue(element){
    element.value = null
}