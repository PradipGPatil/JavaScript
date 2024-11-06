const button = document.querySelector('button');
const output = document.querySelector('p');

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((success) => {
      resolve(success);
    }, (err) => {
      reject(err);
    })
  })
  return promise;
}

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done !');
    }, duration);

  })
  return promise;
}

async function trackUserHandler() {
  let positionData;
  let posData;
  let timerData;
  try {
    posData = await getPosition();
    timerData = await setTimer();

  }
  catch (err) {
    console.log(err);
  }

  console.log(posData, timerData);

  //   getPosition()
  //   .then((posdata) => {
  //     positionData = posdata;
  //     return setTimer(2000)
  //   })

  //   .catch(
  //     err => {
  //       console.log(err);
  //       return 'on we go !';
  //     }

  //   )
  //   .then(data =>
  //     console.log(data, positionData)
  //   );
  setTimer(1000).then(() => console.log('timer done !'));
  console.log('getting postion !');
}

button.addEventListener('click', trackUserHandler);
Promise.race([
  getPosition(),
  setTimer(1000)
])
  .then(data => {
    console.log(data);
  })

Promise.all([[
  getPosition(),
  setTimer(1000)
]])
  .then(data => {
    console.log(data);
  }

  );


// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
