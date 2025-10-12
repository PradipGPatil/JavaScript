
// used object liternal notation to create objec
const person = {

    // this are property of the object
    name: 'pradip',
    age: 30,
    hobbies: ['sport', 'leaning'],
    // function inside the object are called method
    great() {
        alert('Hi there');
    }
};

console.log(person.name);

// we want to add some property to the object

person.isAdmin=true

// we can update any peroper
person.age=31

console.log(person);
// if we try to access property which does not exit will print undefinec
console.log(person.isSuperAdmin);


//deleting peroperty fro the object
delete person.age
console.log(person)


