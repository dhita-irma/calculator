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

  function appendNumber(number) {
    let resultElement = document.getElementById('result');
    if (resultElement.value === '0') {
      resultElement.value = number;
    } else {
      resultElement.value += number;
    }
  }
 
// Calculator 
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log(`Button ${button.value} is clicked`);
    appendNumber(button.value);
  })
})
