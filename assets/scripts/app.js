const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function writeLogs(operator, beforeResult, userEnteredValue) {
  const calDescription = `${beforeResult}${operator}${userEnteredValue}`;
  outputResult(currentResult, calDescription);
}

function writeToLogsByObject(operation, prevResult, number, result) {
  const logEntry = {
    operation: operation,
    prevResult: prevResult,
    number: number,
    result: result,
  };
  logEntries.push(logEntry);
  console.log(logEntries);

}


function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  writeLogs("+", initialResult, enteredNumber);
  writeToLogsByObject('+',initialResult,enteredNumber,currentResult);


}

function substract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  writeLogs("-", initialResult, enteredNumber);
  writeToLogsByObject('-',initialResult,enteredNumber,currentResult);

}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  writeLogs("*", initialResult, enteredNumber);
  writeToLogsByObject('*',initialResult,enteredNumber,currentResult);

}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  writeLogs("/", initialResult, enteredNumber);
  writeToLogsByObject('/',initialResult,enteredNumber,currentResult);

}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


