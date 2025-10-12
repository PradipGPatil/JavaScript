
// we will learn inheritance

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

    let {getFormmatedTitle}=movie;


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

  if ( extraName.trim() === '' || extraValue.trim() === '') {
    return;
  }
  const newMovie = {
    info: {
   
      set title(val){

        if(val.trim()===''){
          
          this._title='DEFAUT VALUE';
          return;
        };
        this_title=val;

      },
 
      get title(){
       return this_title;
      },
      [extraName]: extraValue
    },
    id: Math.random(),
    getFormmatedTitle(){

      console.log(this);

      return this.info.title.toUpperCase();
    }
  }

  
  newMovie.info.title=title;

console.log(newMovie.info.title)

  movies.push(newMovie);
  renderMovie();
};


const searchMovieHandler = ()=>  {

  console.log(this)
  const filterTerm = document.getElementById('filter-title').value;
  renderMovie(filterTerm)


}

addMovieBtn.addEventListener('click', addMovieHandler);
searchMovieBtn.addEventListener('click', searchMovieHandler)

