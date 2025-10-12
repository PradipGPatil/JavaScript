const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCESSOR = 'SCESSOR'
const userDefaultChoice = ROCK;
let isgameRunning = false;


const RESULT_DRAW = 'DRAW';
const USER_WIN = 'USER WIN';
const COMPUTOR_WIN = 'COMPUTOR WIN'

const btn = document.getElementById('Start_game_btn');

const getUserChoice = () => {
    const userSelection = prompt(`Enter between ${ROCK}, ${PAPER}, ${SCESSOR}`).toUpperCase();
    if (userSelection != ROCK && userSelection != PAPER && userSelection != SCESSOR) {
        alert(`we choice for you ${ROCK}`)
        return;
    }
    return userSelection;
};

let computorSelection;
const getComputorChoice = () => {

    // math random return value betwee 0.1 to 0.9
    const value = Math.random();
    if (value < 0.3) {
        computorSelection = ROCK;
        return computorSelection;
    }
    else if (value < 0.6) {
        computorSelection = PAPER;
        return computorSelection;
    }
    else {
        computorSelection = SCESSOR;
        return computorSelection;
    }
}

// here if user do not pass any value then select user default value
const getWinner = (uChoice, cChoice = userDefaultChoice) => {
    if (uChoice == cChoice) {
        return RESULT_DRAW
    }
    else if (
        uChoice == ROCK && cChoice == PAPER ||
        uChoice == PAPER && cChoice == SCESSOR ||
        uChoice == SCESSOR && cChoice == ROCK
    ) {
        return USER_WIN;
    }
    else {
        return COMPUTOR_WIN;
    }
}

btn.addEventListener('click', () => {
    // avoid if user click multiple time the button
    if (isgameRunning) {
        return;
    }
    isgameRunning = true;
    const user = getUserChoice(); // here we will get undefined
    const computor = getComputorChoice();
    let result;
    if (user) {
        result = getWinner(user, computor);
    }
    else {
        result = getWinner(user);
    }

    alert(`you chose ${user || userDefaultChoice} and computor choice ${computor} so ${result} win`);
    isgameRunning = false;


});

// REST argument not related to game

const combine = (resultHandler, operation, ...numbers) => {

    // created function inside function which has scopt ot local function only
    const validInput = (number) => {
        return isNaN(number) ? 0 : number;
    }
    let sum = 0;

    for (const num of numbers) {
        if (operation == 'SUM') {
            sum += validInput(num);
        }
        else {
            sum -= validInput(num);
        }

    }
    //created callback own function
    resultHandler(sum);
};

const showResult = (result, messageText) => {
    alert(messageText + ' ' + result)
}

combine(showResult,'ADD', 1, 2, 5, 10, 'sad');
combine(showResult,'SUBTRACT',10,-5,-1,)


// const substract=function(resultHandler){
//         let sum = 0;

//     for (const num of arguments) { // not recomment but it was used before es6
//         sum -= num;
//     }
//     resultHandler(sum)
// }
// ;
// substract(showResult,10,-5,-1,)