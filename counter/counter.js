const formElement = document.querySelector('#form');
const hourInputElement = document.querySelector('#hour');
const minInputElement = document.querySelector('#min');
const restBtn = document.querySelector('#rest-btn');
const hourPlace = document.querySelector('#hour-place');
const minPlace = document.querySelector('#min-place');
const secPlace = document.querySelector('#sec-place');
let restHandlerStatus = false;
let hourInputValue , minInputValue , secValue , counterInterval ;
// submit event
formElement.addEventListener('submit' , submitHandler);


function submitHandler(e){
    e.preventDefault();

    // show rest btn
    restBtn.style.visibility = 'visible';
    restBtn.addEventListener('click' , restHandler);
    // get input values
    hourInputValue = getInputValue(hourInputElement);
    minInputValue = getInputValue(minInputElement);
    secValue = 5;
    // calculate input values
    counterInterval = setInterval(() => {
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

    if(secValue > 0){
        secValue--;

    }else if(secValue === 0 && minInputValue > 0){
        minInputValue--;
        secValue = 5;

    }else if(minInputValue === 0 && hourInputValue > 0){
        hourInputValue--;
        minInputValue = 5;

    }else{
        clearInterval(counterInterval);
        console.log('finished');
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
// rest counter handler
// there is a bug , user just can one time rest
function restHandler(){
    restHandlerStatus = !restHandlerStatus;

    if(restHandlerStatus){
        clearInterval(counterInterval);
    }else{
        setInterval(() => {
            counterCalc()
        }, 1000);
    };
}