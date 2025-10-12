const testResult=[5,54.88,33.44,5,-10];

// it will create new array
const concatresult=testResult.concat([2.99,1.99]);
concatresult.push(8);
console.log(concatresult,testResult);



// if push the element 
//testResult.push([1,2]);
console.log(testResult);

// search from left
console.log(testResult.indexOf(5));

//search from right and find first element
console.log(testResult.lastIndexOf(5)); 

// index of and last index of work for the premitive value like string , number , boolean 
// index of use strict equality=== to compare 
// but object for us looks same but it has diff memory address

const personData=[{name:'pradip'},{name:'matt'}];

// it will try to find object  but persondata is reference for the array
console.log(personData.indexOf({name:'pradip'}));

