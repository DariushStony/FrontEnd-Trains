const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operation]");
const equalsButtons = document.querySelector("[data-equals]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const dotButton = document.querySelector("[data-dot]");
const output = document.querySelector(".output-data");

const operations = ["+", "-", "÷", "*"];

numberButtons.forEach((number) => {
    let numberValue = parseInt(number.innerText);

    number.addEventListener("click", () => {
        output.innerText += numberValue;
    });
});

operatorButtons.forEach((operator) => {

    operator.addEventListener("click", () => {
        let outputText = output.innerText;
        let lastItem = outputText.charAt(outputText.length - 1);

        if (operations.includes(lastItem)) {
            output.innerText = outputText.substring(0, outputText.length - 1) + operator.innerText;
        }
        else {
            output.innerText += operator.innerText;
        }
    });

});

allClearButton.addEventListener("click", () => {
    output.innerText = "";
});

deleteButton.addEventListener("click", () => {
    let outputText = output.innerText;
    output.innerText = outputText.substring(0, outputText.length - 1);
});

dotButton.addEventListener("click", () => {
    let outputText = output.innerText;
    let lastItem = outputText.charAt(outputText.length - 1);

    if (lastItem !== ".") {
        output.innerText +=  ".";
    }
   

});

equalsButtons.addEventListener("click", () => {
    let outputText = output.innerText;

    outputText = outputText.replace("÷", '/');

    output.innerText = eval(outputText);
});



// class Calculator {
//     constructor(previousOperandTextElement, currentOperandTextElement) {
//         this.previousOperandTextElement = previousOperandTextElement;
//         this.currentOperandTextElement = currentOperandTextElement;
//         this.clear();
//     }

//     clear() {
//         this.currentOperand = "";
//         this.previousOperand = "";
//         this.operation = undefined;
//     }

//     delete() {

//     }

//     appendNumber(number) {
//         this.currentOperand = this.currentOperand.toString() + number.toString();
//     }

//     chooseOperation(operation) {

//     }

//     compute() {

//     }

//     updateDisplay() {
//         this.currentOperandTextElement.innerText = this.currentOperand;
//     }
// }


// const numberButtons = document.querySelectorAll("[data-number]");
// const operationButtons = document.querySelectorAll("[data-operation]");
// const equalsButton = document.querySelector("[data-equals]");
// const deleteButton = document.querySelector("[data-delete]");
// const allClearButton = document.querySelector("[data-all-clear]");
// const previousOperandTextElement = document.querySelector("[data-previous-operand]");
// const currentOperandTextElement = document.querySelector("[data-current-operand]");

// const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

// numberButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//         calculator.appendNumber(button.innerText);
//         calculator.updateDisplay();
//     });
// });