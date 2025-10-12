
// if use strict mode this will refer to the undefinec 
// arrow function does not know strict mode
//"use strict"


// introduction to this property

// this keyword refer to whatever is called function

const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');

const movies = []



const renderMovie = (filter = '') => {
  const movieList = document.getElementById('movie-list');
  if (movies.length === 0) {
    movieList.classList.remove('visible')
  }
  else {
    movieList.classList.add('visible');
  };

  movieList.innerHTML = '';

  const filterMovie = !filter ? movies : movies.filter(movie =>

    movie.info.title.includes(filter)
  )

  filterMovie.forEach((movie, idx, movies) => {
    const li = document.createElement('li');
    const {info,...otherProps}=movie;
    console.log(otherProps);

    // const {title:movieTitle}=info;
    let {getFormmatedTitle}=movie;

    // bind method is helful here to check who to bind this keyword

    // here we are telling this inside the function should bind to the movies
    //ind perper the function for future execution and return new function object
    //getFormmatedTitle=getFormmatedTitle.bind(movie);

    // here we can use call
    
    // here to call getformmateTitle is no one responsible to call this function 
    // so we will get error for undefined title 
    // 

    // here i changed to call, which will get executed right away and tell to whom this should refer to
    let text = getFormmatedTitle.call(movie) + '-';


    for (const key in info) {
      if (key != 'title') {
        text = text + `${key}:${info[key]}`
      }

    }
    li.textContent = text;
    movieList.append(li);
  })
}


const addMovieHandler = () => {

  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
    return;
  }
  const newMovie = {
    info: {
      title,
      [extraName]: extraValue
    },
    id: Math.random(),
    getFormmatedTitle(){
      // this here will refer to the window object in no strict mode
      console.log(this);
      // here we need to add this becasue without this it will try to find'info' in our code 
      // may behaviou uncertaily
      return this.info.title.toUpperCase();
    }
  }

  movies.push(newMovie);
  renderMovie();
};


const searchMovieHandler = ()=>  {
  // for browser this will refer to hoever responsible to call function here button is responsible
  //if it is normal function so here to this is bound to function
  // if we change this function to the arrow function 
  console.log(this)
  const filterTerm = document.getElementById('filter-title').value;
  renderMovie(filterTerm)


}

addMovieBtn.addEventListener('click', addMovieHandler);
searchMovieBtn.addEventListener('click', searchMovieHandler)

