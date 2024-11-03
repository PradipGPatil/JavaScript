const btn = document.querySelector('button');

// const buttonClickHandler=event=>{
//     // event.target.disabled=true;
//     console.log(event);
// }

// const anotherButtonClickHandler=function(){
//     console.log('another function');
// }

// btn.onclick=btnFunction;
// btn.onclick=anotherFunction;

// btns.forEach(b=>{
//     b.addEventListener('click',buttonClickHandler);
// });
// // btn.addEventListener("click",buttonClickHandler);

// setTimeout(() => {
//     btn.removeEventListener('click',buttonClickHandler);
// }, 2000);

// window.addEventListener('scroll',(event)=>{
// console.log(event);
// });


const formElement = document.querySelector('form');

formElement.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event)
})

btn.addEventListener('click', (event) => {
    event.stopPropagation();
    console.log("clicked button !");
    console.log(event);
});

const div = document.querySelector('div');
div.addEventListener('click', event => {
    console.log('clicked div');
    console.log(event);
});


const items = document.querySelectorAll('li');
const list = document.querySelector('ul');
// items.forEach(i=>{
//     i.addEventListener('click',event=>{
//         event.target.classList.toggle('highlight');
//     });
// })

list.addEventListener('click', event => {
    // event.target.classList.toggle('highlight');
    event.target.closest('li').classList.toggle('highlight');
    formElement.submit();
}
);