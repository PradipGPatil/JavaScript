const addMovieBtn = document.getElementById('add-movie-btn');
const searchMovieBtn = document.getElementById('search-btn');

const movies = []


// we will find movieList element and display based on length of the movie
const renderMovie = () => {
  const movieList = document.getElementById('movie-list');
  if (movies.length === 0) {
    movieList.classList.remove('visible')
  }
  else {
    movieList.classList.add('visible');
  };

  movieList.innerHTML = '';

  movies.forEach((movie, idx, movies) => {
    const li = document.createElement('li');
    li.textContent = movie.info.title;
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
}

addMovieBtn.addEventListener('click', addMovieHandler);

