const defaultValue = 10;
let currentResult = 0;
currentResult = currentResult + 10 * 3;

let operationDescription = "" + currentResult + "+10*3";

function add(num1, num2) {
  const result = num1 + num2;
  return result;
}

currentResult = add(5, 5);

outputResult(currentResult, operationDescription);
