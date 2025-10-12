
// we want to display user entered key value here instead of title

const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');

const movies = []


// we will find movieList element and display based on length of the movie

// renderMovie function we are considering 
// if did not pass any argument then take default argument as ''
const renderMovie = (filter = '') => {
  const movieList = document.getElementById('movie-list');
  if (movies.length === 0) {
    movieList.classList.remove('visible')
  }
  else {
    movieList.classList.add('visible');
  };

  movieList.innerHTML = '';

  //'' empty value is consider as false or 
  //false,0,'',null, undefined and NAN are the false value

  // so my condition is if filter is '' then consider as movie
  const filterMovie = !filter ? movies : movies.filter(movie =>
    //hwer we are chaning so i avoid unnecessary code 
    movie.info.title.includes(filter)
  )

  filterMovie.forEach((movie, idx, movies) => {
    const li = document.createElement('li');
    // we can not access this extraname from the another function because of the scope
    // to avoid the we can create extraname as global variable 
    // but probleam is that extraname will contain latest value each time user click on add movie button
    // so it will print the latest value
    // li.textContent = movie.info.title+ '-'+movie.info[extraName];

    let text = movie.info.title + '-';

    // we have for in loop to get proparty inside the objec

    for (const key in movie.info) {
      if (key != 'title') {
        text = text + `${key}:${movie.info[key]}`
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
    id: Math.random()
  }

  movies.push(newMovie);
  renderMovie();
};

// add function for search movie
// it should trigger render movie function

const searchMovieHandler = () => {
  const filterTerm = document.getElementById('filter-title').value;
  renderMovie(filterTerm)


}

addMovieBtn.addEventListener('click', addMovieHandler);
searchMovieBtn.addEventListener('click', searchMovieHandler)

