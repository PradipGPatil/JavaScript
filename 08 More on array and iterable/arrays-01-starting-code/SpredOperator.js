// const nameFragment=['pradip','patil'];

// const copiedNameFrag=[...nameFragment];
// nameFragment.push('Mr');
// console.log(nameFragment,copiedNameFrag);

// // this method is useful  because it take list of argument not a array
// const number=[4,6,10,5];
// console.log( Math.min(...number));

// const person=[{name:'pradip',age:30},{name:'matt',age:26}];
// person[0].age=31;
// const copedPerson=[...person];
// // it will print same becasue we are coping the address
// console.log(person,copedPerson);


// object destucnturing

const person1={
    name:'pradip',
    age:30,
    hobbies:['sport','learning']
};

const person2={...person1};
person2.age=31;

console.log(person1,person2);

// if we change hobbies array , as object destructuring not doing deep clone it will change both
person2.hobbies.push('hard work');
console.log(person1,person2);

// if we need that to be copy we need to do manually 

const person3={...person1,age:33,hobbies:[...person1.hobbies]};

person3.hobbies.push('hello');
console.log(person1,person3);

// we have another method to clone the object

const person4=Object.assign({},person1);
person4.name='Matt',
console.log(person1,person4);
