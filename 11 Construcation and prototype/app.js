
// this is modern way to crete the class
// class Person{
// name='Max'

// constructor(){
//     this.age=30
// };

// greet(){
//     console.log("Hi my name is "+this.name+ "  my age is "+this.age);
// }
// };


// but their is anohter way to create the constuctore function


function Person(){
    // when we create the object behind the scene line no 21 and 27 code beging added
    // this={};
    this.age=30;
    this.name  ='Max2';
    this.greet=()=>{
      console.log("Hi my name is "+this.name+ "  my age is "+this.age);  
    };
    // return this;
}

// for this function we need create the object otherwise it will not work
const person=new Person();
person.greet();

// javascript find does the object has tostring method if no then go to the prototype 
// this chaing will run upto global object
console.log(person.toString());
console.log(person.__proto__);

console.dir(person);