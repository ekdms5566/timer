const btnStart = document.querySelector(".btn-start");
const btnPause = document.querySelector(".btn-pause");
const btnReset = document.querySelector(".btn-reset");
const hours = document.querySelector("#hours");
const minutes = document.querySelector("#minutes");
const second = document.querySelector("#second");

let time = 0;

function setZero() {
  if (!hours.value && !minutes.value && !second.value) {
    alert("시간 입력");
  }
  if (!hours.value) hours.value = 0;
  if (!minutes.value) minutes.value = 0;
  if (!second.value) second.value = 0;
  setTime();
}

function setTime() {
  console.log(hours.value + minutes.value + second.value);
  time =
    parseInt(hours.value) * 60 * 60 +
    parseInt(minutes.value) * 60 +
    parseInt(second.value);
  console.log(time);
}

function pauseTimer() {}

function resetTimer() {}

btnStart.addEventListener("click", setZero);
btnPause.addEventListener("click", pauseTimer);
btnReset.addEventListener("click", resetTimer);
