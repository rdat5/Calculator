const numText = document.querySelector('.numbers');
const numButtons = document.querySelectorAll('.container button');

let displayValue = "";

let operand = "";
let operation = "";
let calcFinished = false;

updateDisplay();

numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.getAttribute('data-type'))
        {
            case "num":
                if (!displayValue.includes("Don't"))
                {
                    displayValue += button.textContent;
                }
                updateDisplay();
                break;
            case "cls":
                displayValue = "";
                operand = "";
                operation = "";
                updateDisplay();
                break;
            case "op":
                if (operation === "")
                {
                    operation = button.textContent;
                }

                if (operand === "" && displayValue !== "")
                {
                    operand = displayValue;
                    displayValue = "";
                }
                else if (operand !== "" && displayValue !=="")
                {
                    let answer = operate(operation, parseInt(operand), parseInt(displayValue));        
                    displayValue = answer;
                    operand = displayValue;
                    updateDisplay();
                    displayValue = "";
                    operation = button.textContent;
                }
                break;
            case "eq":
                if (operand !== "" && displayValue !== "")
                {
                    let answer = operate(operation, parseInt(operand), parseInt(displayValue));
                    displayValue = answer;
                    operand = "";
                    operation = "";
                    updateDisplay();
                }
                break;
        }
    });
});

function updateDisplay()
{
    numText.textContent = displayValue;
}

function add(a, b)
{
    return round(a + b, 12);
}

function subtract(a, b)
{
    return round(a - b, 12);
}

function multiply(a, b)
{
    return round(a * b, 12);
}

function divide(a, b)
{
    if (b === 0)
    {
        return "Don't do that";
    }
    else
    {
        return round(a / b, 12);
    }
}

function round(number, decimalPlaces)
{
    const factorOfTen = Math.pow(10, decimalPlaces)
    return Math.round(number * factorOfTen) / factorOfTen;
}

function operate(operator, a, b)
{
    let result;

    switch (operator)
    {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "⨯":
            result = multiply(a, b);
            break;
        case "÷":
            result = divide(a, b);
            break;
    }

    return result;
}