function add(num1, num2) {
    return num1 + num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function divide(num1, num2) {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
  }

function operate(operator, num1, num2) {
    switch (operator) {
      case "+":
        return add(num1, num2);
      case "-":
        return subtract(num1, num2);
      case "*":
        return multiply(num1, num2);
      case "/":
        return divide(num1, num2);
      default:
        throw new Error(`Unknown operator: ${operator}`);
    }
  }

function updateDisplay(number) {
  let resultElement = document.getElementById('result');
  if (resultElement.value === '0') {
    resultElement.value = number;
  } else {
    resultElement.value += number;
  }
}

function handleNumberClick(number) {
  currentNumber = !currentNumber ? number : currentNumber += number;
  updateDisplay(number);
  if (!currentOperator) {
    currentResult = parseFloat(currentNumber);
  } else {
    currentResult = operate(currentOperator, currentResult, parseFloat(currentNumber));
  }
}

function handleOperatorClick(operator) {
  currentOperator = operator;
  updateDisplay(currentOperator);
  currentNumber = null;
  console.log(`Operator ${currentOperator} is clicked`)
}
 
// Calculator 
const operatorButtons = ["+", "-", "*", "/"];
let currentNumber = null;
let currentResult = null;
let currentOperator = null; 

const buttons = document.querySelectorAll('.button');
let display = document.getElementById('result');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    let val = button.value;
    
    if (operatorButtons.includes(val)) {
      handleOperatorClick(val); 
    } else if (val === "=") {
      display.value = null;
      updateDisplay(currentResult);
    } else {
      handleNumberClick(val);    
    }
  })
})
