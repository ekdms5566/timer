const $btnStart = document.querySelector(".btn-start");
const $btnPause = document.querySelector(".btn-pause");
const $btnReset = document.querySelector(".btn-reset");
const $hours = document.querySelector("#hours");
const $minutes = document.querySelector("#minutes");
const $second = document.querySelector("#second");
let count = null;

function numCheck() {
  if (
    isNaN($hours.value) ||
    isNaN($minutes.value) ||
    isNaN($second.value) ||
    $minutes.value > 60 ||
    $second.value > 60
  ) {
    alert("올바른 숫자를 입력하세요");

    $hours.value = null;
    $minutes.value = null;
    $second.value = null;

    $btnStart.classList.remove("on");
    $btnReset.classList.remove("on");
  } else {
    $btnStart.style.display = "none";
    $btnPause.style.display = "inline-block";

    count = setInterval(startTimer, 1000);
  }
}

function startTimer() {
  if ($hours.value == 0 && $minutes.value == 0 && $second.value == 0) {
    alert("Finish!!");
    resetTimer();
  } else if ($second.value != 0) {
    $second.value--;
  } else if ($minutes.value != 0 && $second.value == 0) {
    $second.value = 59;
    $minutes.value--;
  } else if ($hours.value != 0 && $minutes.value == 0 && $second.value == 0) {
    $minutes.value = 59;
    $second.value = 59;
    $hours.value--;
  }
  $hours.value = $hours.value.padStart(2, "0");
  $minutes.value = $minutes.value.padStart(2, "0");
  $second.value = $second.value.padStart(2, "0");
}

function pauseTimer() {
  clearInterval(count);

  $btnStart.style.display = "inline-block";
  $btnPause.style.display = "none";
}

function resetTimer() {
  clearInterval(count);

  $hours.value = null;
  $minutes.value = null;
  $second.value = null;

  $btnStart.style.display = "inline-block";
  $btnPause.style.display = "none";
  $btnStart.classList.remove("on");
  $btnReset.classList.remove("on");
}

document.querySelectorAll("input").forEach((input) =>
  input.addEventListener("keydown", (e) => {
    if (isNaN(e.target.value)) e.target.value = "";
    $btnStart.classList.add("on");
    $btnReset.classList.add("on");
  })
);

$btnStart.addEventListener("click", numCheck);

$btnPause.addEventListener("click", pauseTimer);

$btnReset.addEventListener("click", resetTimer);
