let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const clock = document.getElementById("clock");
const laps = document.getElementById("laps");

function updateTime() {
  const time = Date.now() - startTime + elapsedTime;
  const hours = Math.floor(time / (1000 * 60 * 60)).toString().padStart(2, "0");
  const minutes = Math.floor((time / (1000 * 60)) % 60).toString().padStart(2, "0");
  const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, "0");
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

function startStopwatch() {
  if (isRunning) return;
  isRunning = true;
  startTime = Date.now();
  timerInterval = setInterval(updateTime, 1000);
}

function pauseStopwatch() {
  if (!isRunning) return;
  isRunning = false;
  clearInterval(timerInterval);
  elapsedTime += Date.now() - startTime;
}

function resetStopwatch() {
  clearInterval(timerInterval);
  isRunning = false;
  startTime = 0;
  elapsedTime = 0;
  clock.textContent = "00:00:00";
  laps.innerHTML = "";
}

function lapTime() {
  if (!isRunning) return;
  const lap = document.createElement("div");
  lap.textContent = clock.textContent;
  laps.appendChild(lap);
}
