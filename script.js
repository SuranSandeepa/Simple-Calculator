class Calculator {
  construnctor(previousOperandTextElement, currentOperandButtonTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandButtonTextElement = currentOperandButtonTextElement;
    this.clear();
  }

  //Clear all different variables
  clear() {
    this.currentOperation = "";
    this.previousOperation = "";
    this.operation = undefined;
  }

  //Delete a single number
  delete() {
    this.currentOperation = this.currentOperation.toString().slice(0, -1);
  }

  //click number & add it to the screen
  appendNumber(number) {
    if (number === "." && this.currentOperation.includes(".")) {
      return;
    }
    this.currentOperation =
      this.currentOperation.toString() + number.toString();
  }

  //clicking number, do particular operation
  chooseOperation(operation) {
    if (this.currentOperation === "") {
      return;
    }
    if (this.previousOperation !== "") {
      this.compute();
    }
    this.operation = operation;
    this.previousOperation = this.currentOperation;
    this.currentOperation = "";
  }

  //take values inside the cal & compute the single value and display
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperation);
    const current = parseFloat(this.currentOperation);
    if (isNaN(prev) || isNaN(current)) {
      return;
    }
    switch (this.operation) {
      case "+":
        computation = prev + current;
        break;
      case "-":
        computation = prev - current;
        break;
      case "*":
        computation = prev * current;
        break;
      case "÷":
        computation = prev / current;
        break;
      default:
        return;
    }
    this.chooseOperation = operation;
    this.operation = undefined;
    this.previousOperation = "";
  }

  //update the values inside the output
  updateDisplay() {
    this.currentOperandButtonTextElement.innerText = this.currentOperation;
    this.previousOperandTextElement.innerText = this.previousOperation;
  }
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

const calculator = new calculator(
  previousOperandTextElement,
  currentOperandButtonTextElement
);

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay(); //updated always click buttons
  });
});

operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay(); //updated always click buttons
  });
});

equalsButton.addEventListener("click", () => {
  calculator.compute();
  calculator.updateDisplay();
});

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});
