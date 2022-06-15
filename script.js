class Calculator {
  construnctor(previousOperandTextElement, currentOperandButtonTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandButtonTextElement = currentOperandButtonTextElement;
    this.clear();
  }

  //Clear all different variables
  clear() {
    this.currentOperation = "";
    this.currentOration = "";
    this.operation = undefined;
  }

  //Delete a single number
  delete() {}

  //click number & add it to the screen
  appendNumber(number) {}

  //clicking number, do particular operation
  chooseOperation(operation) {}

  //take values inside the cal & compute the single value and display
  compute() {}

  //update the values inside the output
  updateDisplay() {}
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]"); // querySelector - for single eliment
const deleteButton = document.querySelector("[data-delete]"); // querySelector - for single eliment
const allClearButton = document.querySelector("[data-all-clear]"); // querySelector - for single eliment
const previousOperandTextElement = document.querySelector(
  "[data-previous-operationoperand]"
); // querySelector - for single eliment
const currentOperandButtonTextElement = document.querySelector(
  "[data-current-operand]"
); // querySelector - for single eliment
