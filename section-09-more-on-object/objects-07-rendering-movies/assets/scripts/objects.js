const addMoviesBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

const movies = [];

const renderMovie = () => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  }
  else{
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';
}

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const name = document.getElementById('extra-name').value;
  const value = document.getElementById('extra-value').value;

  if (title.trim() === "" || name.trim() === "" || value.trim() === "") {
    return;
  }

  const newMovies = {
    info: {
      // her title we have create hard codeed key but for name and value 
      title,
      [name]: value,

    },
    id: Math.random()

  }

  movies.push(newMovies);
  console.log(newMovies);


}

addMoviesBtn.addEventListener('click', addMovieHandler)

