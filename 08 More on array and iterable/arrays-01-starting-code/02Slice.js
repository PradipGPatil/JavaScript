const testResult=[5,54.88,33.44,-10];


//includes return true or false
testResult.includes(5);
// it is pointer to the array
const storedResult=testResult;

storedResult.push(99);

console.log(testResult,storedResult);


// if we want to copy the array 
const storedResult2=testResult.slice();

storedResult2.push(88);
console.log(testResult,storedResult2);

// copying the range of the array

const copyResult=testResult.slice(0,2);
console.log(copyResult);

// if we did not define end number it will copy all element
const copyResult2=testResult.slice(0);
console.log(copyResult2);

