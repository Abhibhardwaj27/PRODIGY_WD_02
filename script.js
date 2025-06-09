let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;
let analogAngle = 0;
let analogInterval;

const clock = document.getElementById("clock");
const laps = document.getElementById("laps");
const hand = document.getElementById("analog-hand");

function updateTime() {
  const time = Date.now() - startTime + elapsedTime;
  const hours = Math.floor(time / (1000 * 60 * 60)).toString().padStart(2, "0");
  const minutes = Math.floor((time / (1000 * 60)) % 60).toString().padStart(2, "0");
  const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, "0");
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

function rotateAnalogHand() {
  analogAngle += 6; // 6 degrees per second
  hand.style.transform = `rotate(${analogAngle}deg)`;
}

function startStopwatch() {
  if (isRunning) return;
  isRunning = true;
  startTime = Date.now();
  timerInterval = setInterval(updateTime, 1000);
  analogInterval = setInterval(rotateAnalogHand, 1000);
}

function pauseStopwatch() {
  if (!isRunning) return;
  isRunning = false;
  clearInterval(timerInterval);
  clearInterval(analogInterval);
  elapsedTime += Date.now() - startTime;
}

function resetStopwatch() {
  clearInterval(timerInterval);
  clearInterval(analogInterval);
  isRunning = false;
  startTime = 0;
  elapsedTime = 0;
  analogAngle = 0;
  clock.textContent = "00:00:00";
  hand.style.transform = "rotate(0deg)";
  laps.innerHTML = "";
}

function lapTime() {
  if (!isRunning) return;
  const lap = document.createElement("div");
  lap.textContent = clock.textContent;
  laps.appendChild(lap);
}
