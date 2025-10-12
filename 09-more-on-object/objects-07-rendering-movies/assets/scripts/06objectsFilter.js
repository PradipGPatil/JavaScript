
// we will learn about getter and setter

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
      //setter - expect the value 
      set title(val){

        if(val.trim()===''){
          // _ tell it will accessible to external function
          this._title='DEFAUT VALUE';
          return;
        };
        this_title=val;

      },
      // getter 
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

  // here setter will trigger whenever we assign the value 
  newMovie.info.title=title;
  // getter will trigger whenever we try to get the value
  // javascript allow us to take as the normal property
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

