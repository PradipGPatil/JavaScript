
const section = document.querySelector('section');
const button = document.querySelector('button');

// this will overide the classname property becasue inline style has high priority
// section.style.background='blue';


// classname user to remove or add new css class
// section.className = 'red-bg'

button.addEventListener('click', () => {
//  if(section.className =='red-bg visible'){
//         section.className = "red-bg invisible";
//     }
//     else if(section.className == "red-bg invisible"){
//         section.className = 'red-bg visible';
//     }
    // instead of doing aboe code we have classlist of each node
 section.classList.toggle('invisible');

  

});