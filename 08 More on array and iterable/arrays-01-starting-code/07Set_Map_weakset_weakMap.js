
// sets are usefull we need to maganger uniquesness 

const ids=new Set([1,2,3,]);
// set will make sure it will have duplicate value
// we have add 2 but as theri alredy 2 it will not all it again
ids.add(2);
console.log(ids)

// return true or false value
console.log(ids.has(3));

const ids2=new Set(['Hi','From','sets']);

for (const id of ids2.entries()){
    console.log(id);
};

// to delted specific value
if(ids2.has('Hi')){
ids2.delete('Hi');
}

console.log(ids2)
