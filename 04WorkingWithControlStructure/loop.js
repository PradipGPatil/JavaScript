
const userName='userName';
const pradip={
    [userName]:'Pradip Patil',
    hobbies:['cricket','football']
};


for(const key in pradip){
    // it will print key in object
    console.log(key);
    // if we want to print the value
    console.log(pradip[userName]);
    console.log(pradip.hobbies);
}