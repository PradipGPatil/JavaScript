const person1={name:'Pradip'}
const person2={name:'Rajani'}

// map can used to attech extra information to existing object and you do not want to modify existing object


// here person1 is key and another array is value
const personData=new Map([[person1,[{date:'yesterday',price:10.99}]]]);


personData.set(person2,[{date:'two week ago',price:20.20}]);
console.log(personData);

console.log(personData.get(person1));   


// we can print all object

for(const entery of personData.entries()){
    console.log(entery);
}