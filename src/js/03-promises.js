import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', onPromise);

function onPromise(event) {
  event.preventDefault();
  const { delay, step, amount } = event.target;
  let delayValue = Number(delay.value);
  let stepDelay = Number(step.value);
  let amountValue = Number(amount.value);
  for (let position = 1; position <= amountValue; position++) {
    createPromise(position, delayValue);
    delayValue += stepDelay;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  promise
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
