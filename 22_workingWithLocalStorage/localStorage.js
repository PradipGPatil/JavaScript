const storeBtn=document.getElementById('store-btn');
const retriveBtn=document.getElementById('retrieve-btn');
const userId='pradip1';
const user={
    name:'pradip',
    dept:"mech"
}


storeBtn.addEventListener('click',()=>{
    // localStorage.setItem('userId',userId);
    sessionStorage.setItem('userId',userId)
    localStorage.setItem('user',JSON.stringify(user))
})


retriveBtn.addEventListener('click',()=>{
    // const id=localStorage.getItem('userId');
    const id=sessionStorage.getItem('userId');
    if(id){
        console.log('id is '+id);
        console.log(JSON.parse(localStorage.getItem('user')));
    }else{
        console.log('id not found');
    }
})