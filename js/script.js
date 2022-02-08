const numText = document.querySelector('.numbers');
const numButtons = document.querySelectorAll('.container button');

let displayValue = "";

updateDisplay();

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(button.getAttribute('data-type'))
        if (displayValue.length < 12 && 
            button.getAttribute('data-type') === "num")
        {
            displayValue += button.textContent;
            updateDisplay();
        }
    });
});

function updateDisplay()
{
    numText.textContent = displayValue;
}

function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    return a / b;
}

function operate(operator, a, b)
{
    let result;

    switch (operator)
    {
        case "add":
            result = add(a, b);
            break;
        case "subtract":
            result = subtract(a, b);
            break;
        case "multiply":
            result = multiply(a, b);
            break;
        case "divide":
            result = divide(a, b);
            break;
    }

    return result;
}