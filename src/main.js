// document.body.style.backgroundColor = 'red'

const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

function getHours() {
  let time = new Date();
  return time.getUTCHours();
 }

function getMinute() {
  let time = new Date();
  return time.getUTCMinutes();
}

function getSecond() {
  let time = new Date();
  return time.getUTCSeconds();
}
getSecond();

function clock() {
  hours.innerText = getHours();
  minutes.innerText = getMinute();
  seconds.innerText = getSecond();
}

setInterval(() => {
  clock();
}, 1000);
