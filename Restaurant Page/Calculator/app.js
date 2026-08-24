const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equals");
const display = document.querySelector(".display");
const clearBtn = document.querySelector(".clear");

let firstNumber = "";
let currentOperator = null;
let shouldResetDisplay = false;
let isFinished = false;

numberButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (isFinished) {
      display.textContent = e.target.value;
      isFinished = false;
      return;
    }

    if (display.textContent == "0" || shouldResetDisplay) {
      display.textContent = e.target.value;
      shouldResetDisplay = false;
    } else {
      display.textContent += e.target.value;
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (firstNumber !== "" && currentOperator !== null && !shouldResetDisplay) {
      secondNumber = display.textContent;
      let result = operator(firstNumber, currentOperator, secondNumber);
      display.textContent = result;
      firstNumber = result;
      isFinished = false;
    }

    firstNumber = display.textContent;
    currentOperator = e.target.value;
    shouldResetDisplay = true;
  });
});

equalButton.addEventListener("click", () => {
  let secondNumber = display.textContent;
  let result = operator(firstNumber, currentOperator, secondNumber);
  display.textContent = result;
  currentOperator = null;
  isFinished = true;
});

clearBtn.addEventListener("click", () => {
  display.textContent = "0";
  firstNumber = "";
  currentOperator = null;
  shouldResetDisplay = false;
  isFinished = false;
});

function formatResult(number) {
  const num = Number(number);

  if (isNaN(num)) return "Error";
  if (!isFinite(num)) return "Infinity";

  // Check if the number is huge or extremely tiny (where scientific notation applies)
  if (Math.abs(num) >= 1e12 || (Math.abs(num) < 1e-6 && num !== 0)) {
    // toExponential(1) gives 1 decimal place: "3.6e+30"
    // toExponential(2) gives 2 decimal places: "3.56e+30"
    return num.toExponential(1);
  }

  // Round normal numbers to avoid long decimal places
  return Math.round(num * 10000) / 10000;
}

function operator(a, operator, b) {
  let num1 = Number(a);
  let num2 = Number(b);
  let res;

  switch (operator) {
    case "+":
      res = num1 + num2;
      break;
    case "-":
      res = num1 - num2;
      break;
    case "*":
      res = num1 * num2;
      break;
    case "/":
      res = num2 === 0 ? "Error" : num1 / num2;
      break;
    default:
      return b;
  }

  return formatResult(res);
}
