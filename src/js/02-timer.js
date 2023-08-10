
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
  input: document.getElementById('datetime-picker'),
  button: document.querySelector('[data-start]'),
  day: document.querySelector('[data-days]'),
  hour: document.querySelector('[data-hours]'),
  minute: document.querySelector('[data-minutes]'),
  second: document.querySelector('[data-seconds]'),
};
let selectedDate
let intervID = null;

refs.button.addEventListener("click", handleTimerOn);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    selectedDate = selectedDates[0];
    if (selectedDate <= new Date()) {
      Notify.failure('Please choose a date in the future');
      refs.button.disabled = true;
    } else {
      refs.button.disabled = false;
    }
  },
};

flatpickr(refs.input, options);

function handleTimerOn() {
  intervID = setInterval(() => {
    const diffDate = selectedDate - new Date().getTime();
    convertMs(diffDate);
  }, 1000);
  refs.button.disabled = true;
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  refs.day.textContent = `${addLeadingZero(days)}`;
  refs.hour.textContent = `${addLeadingZero(hours)}`;
  refs.minute.textContent = `${addLeadingZero(minutes)}`;
  refs.second.textContent = `${addLeadingZero(seconds)}`;
  
  timerOff();
  console.log({ days, hours, minutes, seconds });  
};

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
};

function timerOff() {
  if (
    refs.day.textContent === '00' &&
    refs.hour.textContent === '00' &&
    refs.minute.textContent === '00' &&
    refs.second.textContent === '00'
  ) {
    clearInterval(intervID);
    Notify.info('The timer is stopped');
  } 
};