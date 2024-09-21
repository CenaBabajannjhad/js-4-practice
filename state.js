const formElement = document.querySelector('#form');
const hourInputElement = document.querySelector('#hour');
const minInputElement = document.querySelector('#min');
const hourPlace = document.querySelector('#hour-place');
const minPlace = document.querySelector('#min-place');
let hourInputValue , minInputValue;
// submit event
formElement.addEventListener('submit' , submitHandler);


function submitHandler(e){
    e.preventDefault();

    // get input values
    hourInputValue = getInputValue(hourInputElement);
    minInputValue = getInputValue(minInputElement);
    // calculate input values
    setInterval(() => {
        counterCalc();
    }, 1000);
    // reset input values
    resetInputValue(hourInputElement);
    resetInputValue(minInputElement);
}

// counter calc
function counterCalc(){
// code...
}
// change element textContents
function changeTextContentNodes(element , value){
    element.textContent = value;
}
// get input value
function getInputValue(element){
    return element.value;
}
// reset input value
function resetInputValue(element){
    element.value = null;
}
