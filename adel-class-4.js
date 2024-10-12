const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const resultPlace = document.querySelector('p');

// make input empty
const resetInput = element => {
    element.value = null;
}

buttonElement.addEventListener('click' , () => {
    let inputValue = Number(inputElement.value);
    resultPlace.textContent = 2024 - inputValue;
    // change body background color
    document.body.style.backgroundColor = 'green';
    // change font size result
    resultPlace.style.fontSize = '2rem'
    // reset input
    resetInput(inputElement)
})


