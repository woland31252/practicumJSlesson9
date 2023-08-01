const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerID = null;

startBtn.addEventListener("click", handleStart);
function handleStart() {
    timerID = setInterval(getRandomHexColor(), 1000);
    console.log("START!!!")
}
stopBtn.addEventListener("click", handleStop);
function handleStop() {
    clearInterval(timerID);
    console.log("STOP!!")
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}