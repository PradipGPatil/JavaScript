const prices = [5, 20,10.99,30];
const tax = 0.12;
const taxajustedPrice=[];

//here we do not get index of the array
for(price of prices){
    taxajustedPrice.push(price *(1+tax))
};




prices.forEach((price,idx,prices)=>{
    priceObj={id:idx,taxAdjPrice:price*(1+tax)}
    taxajustedPrice.push(priceObj);
});

console.log(taxajustedPrice);

//map is nice method to get existing array and new element to the array

const withTaxObj = prices.map((price, idx, prices) => {
    const taxAdjPrice = { index: idx, taxPrice: price * (1 + tax) }
    return taxAdjPrice;
});

console.log(withTaxObj, prices);

// it will sore on basic on number 
console.log(prices.sort())


const newSortedArray= prices.sort((a,b)=>{
    if(a>b){
        return 1;
    }
    else if(a===b){
        return 0;
    }
    else{
        return -1
    }
 });

 console.log(newSortedArray);
 console.log(newSortedArray.reverse());


 const filterArray=prices.filter(price=> price>10);
 console.log(filterArray);

 //if we want to calculate sum

 let sum=0;
prices.forEach(price=>{
    return sum+=price;
});
console.log(sum);

// instead of doing this we have reduce method 

const sumNew=prices.reduce((preval,currVal)=>preval+currVal);
console.log(sumNew);

