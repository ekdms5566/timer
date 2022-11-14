const $btnStart = document.querySelector(".btn-start");
const $btnPause = document.querySelector(".btn-pause");
const $btnReset = document.querySelector(".btn-reset");

const $hours = document.querySelector("#hours");
const $minutes = document.querySelector("#minutes");
const $second = document.querySelector("#second");

const $input = document.querySelectorAll("input");

let count;

// $input.forEach((input) =>
//   input.addEventListener("keydown", (e) => putInput(e))
// );

$input.forEach((input) =>
  input.addEventListener("keydown", (e) => {
    if (isNaN(e.target.value)) e.target.value = "";
    $btnStart.classList.add("on");
    $btnReset.classList.add("on");
  })
);

$btnStart.addEventListener("click", numCheck);

$btnReset.addEventListener("click", () => {});

// // input 입력 시 숫자 체크 및  버튼 on
// function putInput(e) {
//   console.log(e.target.value);
//   if (isNaN(e.target.value))
//     e.target.value = e.target.value.match(/^[0-9]/g, "");
//   if (e.key >= 0 && e.key <= 9) {
//     if (e.target.value.length >= 2) e.target.value = e.target.value.slice(0, 2);

//     $btnStart.classList.add("on");
//     $btnReset.classList.add("on");
//   }
// }

function numCheck() {
  if (isNaN($hours.value) || isNaN($minutes.value) || isNaN($second.value))
    alert("숫자를 입력하세요");
  else {
    $btnStart.style.display = "none";
    $btnPause.style.display = "inline-block";

    count = setInterval(startTimer, 100);
  }
}

function toMs() {
  console.log($hours.value * 60 * 60 + $minutes.value * 60 + $second.value);
}

function startTimer() {
  let num =
    parseInt($hours.value * 60 * 60) +
    parseInt($minutes.value * 60) +
    parseInt($second.value);
  $second.value--;
  if (parseInt($second.value) === 0) {
    $second.value = 59;
    $minutes.value--;
    console.log("1분지남");
    // if (parseInt($minutes.value) === 0 && parseInt($second.value) === 0) {
    //   clearInterval(count);
    // }
  }
  console.log(num);
  if (num <= 0) {
    stopTimer();
  }
  // if문 다시 만들기
}

function stopTimer() {
  console.log("제발 멈춰주겄어?");
  clearInterval(count);
}

// 마지막에 try - catch 문으로 변경
// numCheck도 catch문에 넣기 (에러 관련 다 catch 문으로)
