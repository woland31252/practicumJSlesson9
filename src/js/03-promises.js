
const form = document.querySelector(".form");
const button = document.getElementById("btn");

form.addEventListener("submit", onPromise);

function onPromise(event) {
  event.preventDefault();
  const { delay, step, amount } = event.currentTarget;
  let delayValue = Number(delay.value);
  let stepDelay = Number(step.value);
  let amountValue = Number(amount.value);
  for (let position = 1; position <= amountValue; position++);
  createPromise(position, delayValue);
  delayValue += stepDelay
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
};

