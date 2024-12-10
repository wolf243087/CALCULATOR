let display = document.getElementById('display');

// Append values to the display when buttons are clicked
function appendToDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Evaluate the expression in the display
function calculateResult() {
    try {
        display.value = eval(display.value); // eval() is used to evaluate arithmetic expressions
    } catch (error) {
        display.value = 'Error';
    }
}
