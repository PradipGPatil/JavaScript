
// c
const person = {

    // this are property of the object
    'first Name': 'pradip',
    age: 30,
    hobbies: ['sport', 'leaning'],
    // function inside the object are called method
    great() {
        alert('Hi there');
    },
    1.5:'Hello'
};

// any key e.g name is behind the scene is converted in to the string

// this will give error becasue it will try to find age variable
//console.log(person[age])

console.log(person['first Name'])

console.log(person[1.5]);


// this will sort on the basic on number 
// but in regular string name it will keep sorting as it is
const Person2={
    5:'Name',
    1:'age'
};

console.log(Person2);



const person3={
    name:'person3'
};

const userName='person3';

// it will find vaiable username which has value person3
console.log(person[userName]);


// consider we get some input from the user and we want to save it as the ke

const userChoseKeyName='level';

// similar way it will try to find variable userchosekyname and it will replcae the value
const person4={
    [userChoseKeyName]:5

};

console.log(person4);

