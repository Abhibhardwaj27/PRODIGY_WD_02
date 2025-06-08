let timer;
let seconds = 0;
let running = false;

const display = document.getElementById("display");
const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateDisplay() {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  display.textContent = `${hrs}:${mins}:${secs}`;
}

startPauseBtn.addEventListener("click", () => {
  if (!running) {
    running = true;
    startPauseBtn.textContent = "Pause";
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  } else {
    running = false;
    startPauseBtn.textContent = "Start";
    clearInterval(timer);
  }
});

resetBtn.addEventListener("click", () => {
  running = false;
  clearInterval(timer);
  seconds = 0;
  updateDisplay();
  startPauseBtn.textContent = "Start";
});
