const postTemp=document.getElementById('postTemplate');
const xhr =new XMLHttpRequest();
xhr.open('GET','https://jsonplaceholder.typicode.com/posts');
xhr.responseType='json';
xhr.onload=function(){
    const listOfPost=xhr.response;
    for(post of listOfPost){
        
    }
    
}
xhr.send();