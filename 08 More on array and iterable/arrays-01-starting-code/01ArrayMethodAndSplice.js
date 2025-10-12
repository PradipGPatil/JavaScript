const hobbies=['cooking','sport'];

// push will place element at the end of the array
hobbies.push('reading');
console.log(hobbies);

//insert element at the fist of the array
hobbies.unshift('Runnig');
console.log(hobbies);


//remove the last element
hobbies.pop();
console.log(hobbies);

// remove first element from the array
hobbies.shift();
console.log(hobbies);

// inserting element at index and remove any element at this index
hobbies[1]='coding';
console.log(hobbies);

//here i have array of lenght of 5 and if we insert the elemtn
//hobbies[5]='chess';
//console.log(hobbies,hobbies[4]);

// splice method available on real array not like array like object that the reason we want to convert 
// array like object into array buy using Arrays.from()

// splice modify original array
// it tell start with 1 index, remove 0 element and add 'GOOD food'
hobbies.splice(1,0,'Good food');
console.log(hobbies);

hobbies.splice(0,1);
console.log(hobbies);


// if we did not mention anything i will delete all element from the array
hobbies.splice();
console.log(hobbies);

// negative index will remove last element
const removedEl=hobbies.splice(-1,1);
console.log(hobbies);
console.log('Removed element ',removedEl)

