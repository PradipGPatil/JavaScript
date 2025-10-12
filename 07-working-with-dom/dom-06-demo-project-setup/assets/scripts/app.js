
const addMovieBtn = document.querySelector('header').querySelector('button');
const model = document.querySelector('#add-modal');
const backdropEl = document.querySelector('#backdrop');
const cancleModleBtnEl = model.querySelector('.btn--passive');
const addMovieBtnEl = cancleModleBtnEl.nextElementSibling;
const userInput = document.querySelectorAll('input');
const emptyMovieEl = document.querySelector('#entry-text');
const moviesList = document.querySelector('#movie-list');
const movies = []

const updateUi = () => {
    if (movies.length === 0) {
        emptyMovieEl.style.display = 'block';
    }
    else {
        emptyMovieEl.style.display = 'none';
    }
}

const renderNewMovies = (title, imageurl, rating) => {
    const newMov = document.createElement('li');
    newMov.className = "movie-element";
    newMov.innerHTML = `
<div class="movie-element__info">
<h2> ${title}</h2>
<p>${rating}</p>
</div>
<div class="movie-element__image">
<img src=${imageurl} >
</div>
`;
    moviesList.append(newMov);


};

const backDropHandler = () => {
    backdropEl.classList.toggle('visible');
}

const modelHandler = () => {
    model.classList.toggle('visible');
    backDropHandler();
}

const clearUserInputHandler = () => {
    for (const userIn of userInput) {
        userIn.value = '';
    }
}

const cancleMovieBtnHandler = () => {
    modelHandler();
    clearUserInputHandler();
}

const addMovieHandler = () => {
    const userEnteredMovieTitle = userInput[0].value;
    const userEnteredUrl = userInput[1].value;
    const userEnteredRating = userInput[2].value;
    if (userEnteredMovieTitle.trim() === "" || userEnteredUrl.trim() === "" || userEnteredRating.trim() === "" ||
        +userEnteredRating < 1 || +userEnteredRating > 5) {
        alert('please enter valid input or rating between 1 to 5');
        return;
    }
    const newMovie = {
        title: userEnteredMovieTitle,
        url: userEnteredUrl,
        rating: userEnteredRating
    };
    movies.push(newMovie);
    console.log(movies);
    modelHandler();
    clearUserInputHandler();
    updateUi();
    renderNewMovies(newMovie.title, newMovie.url, newMovie.rating);

}

addMovieBtn.addEventListener('click', modelHandler);

backdropEl.addEventListener('click', backDropHandler);

cancleModleBtnEl.addEventListener('click', cancleMovieBtnHandler);
addMovieBtnEl.addEventListener('click', addMovieHandler)