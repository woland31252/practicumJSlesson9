const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let timerID = null;

startBtn.addEventListener("click", handleStart);
function handleStart() {
    timerID = setInterval(() => {document.body.style.backgroundColor = getRandomHexColor();}, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false
    console.log("START!!!")
}
stopBtn.addEventListener("click", handleStop);
function handleStop() {
    clearInterval(timerID);
    startBtn.disabled = false;
    stopBtn.disabled = true;
    console.log("STOP!!")
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}