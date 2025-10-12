const personData=[{name:'pradip'},{name:'matt'}];

// pradip will be same reference value 
const pradip=personData.find((person,idx,persons)=>{
 return person.name='pradip';
});

pradip.name='anna';


// it return the same object from the array
console.log(pradip,personData);

const mattIndex=personData.findIndex((person,idx,personData)=>{
    return person.name==='matt';
});

console.log(mattIndex);