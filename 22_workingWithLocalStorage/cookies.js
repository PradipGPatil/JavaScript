const storeBtn=document.getElementById('store-btn');
const retriveBtn=document.getElementById('retrieve-btn');
const userId='pradip1';
const user={
    name:'pradip',
    dept:'mech'
}



storeBtn.addEventListener('click',()=>{
 document.cookie=`userId=${userId};max-age=2`
 document.cookie=`user=${JSON.stringify(user)}`
})


retriveBtn.addEventListener('click',()=>{
// console.log(document.cookie.split(';'));

// removing extrac strorage
const cookieData=document.cookie.split(';');
const data=cookieData.map(i=>{
    return i.trim();
});
console.log(data[1].split('=')[1]) // get user value
})