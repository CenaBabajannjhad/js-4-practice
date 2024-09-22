const formElement = document.querySelector('#form');
const hourInputElement = document.querySelector('#hour');
const minInputElement = document.querySelector('#min');
const hourPlace = document.querySelector('#hour-place');
const minPlace = document.querySelector('#min-place');
const secPlace = document.querySelector('#sec-place');
let hourInputValue , minInputValue , secValue;
// submit event
formElement.addEventListener('submit' , submitHandler);


function submitHandler(e){
    e.preventDefault();

    // get input values
    hourInputValue = getInputValue(hourInputElement);
    minInputValue = getInputValue(minInputElement);
    secValue = 59;
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
    changeTextContentNodes(secPlace , secValue);
    changeTextContentNodes(minPlace , minInputValue);
    changeTextContentNodes(hourPlace , hourInputValue);

    // sec
    if(secValue === 0){
        secValue = 59;
    }else{
        secValue--;
    }
    // min
    if(secValue === 0 && minInputValue > 0){
        minInputValue--;
    }
    // hour
    if(minInputValue === 0 && hourInputValue > 0){
        hourInputValue--;
        minInputValue = 59;
    }

    if(hourInputValue === 0 && minInputValue === 0){
        alert('time finished');
    }

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
