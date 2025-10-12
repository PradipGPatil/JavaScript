const array=[1,2,3];
console.log(array);

//another way of creating array
// here we can add new or without add new it will create array
const moreArray=new Array(1,5,);
console.log(moreArray);


// if we pass only 1 value it will create array of the length which we sepcific

const moreArray2=new Array(5);
console.log(moreArray2);

// this is used to convert array like object to the array
const anotherWay=Array.from('Hi');
console.log(anotherWay)

// consider we get nodlist and want to convert into array

const liItems=document.querySelectorAll('li');
console.log(liItems);

//now converted this array like object into the array 
const liItemsArray=Array.from(liItems);
console.log(liItemsArray);


// any type of data can be stored in array
const data=[1,'pradip'];
console.log(data[1]);

const data1=[[1,5,10],[2,4,6]];

 for(const data of data1){
    for(const el of data){
        console.log(el);
    }
 }