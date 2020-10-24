//Declare variable
const source = [
  "./audio/Running.m4a",
  "./audio/Walking.m4a",
  "./audio/Complete.m4a",
];
const audio = document.querySelector("audio");
const start = document.querySelector("div");

//Create function play audio
function playAudio(src) {
  audio.src = source[src];
  audio.currentTime = 0;
  audio.play();
}

//Setup Timer
function setupTimer(event) {
  const current = new Date().getTime();
  const timer = setInterval(function () {
    let now = new Date().getTime();
    let distance = now - current;
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector("p").innerHTML = minutes + "m " + seconds + "s ";

    const countTime = Math.floor(distance / 1000);
    if (
      countTime === 1 ||
      countTime === 60 * 3 ||
      countTime === 60 * 6 ||
      countTime === 60 * 9 ||
      countTime === 60 * 12
    ) {
      playAudio(0);
    } else if (
      countTime === 60 ||
      countTime === 60 * 4 ||
      countTime === 60 * 7 ||
      countTime === 60 * 10 ||
      countTime === 60 * 13
    ) {
      playAudio(1);
    } else if (countTime === 60 * 15) {
      playAudio(2);
      clearInterval(timer);
    }
  }, 1000);
  start.removeEventListener("click", setupTimer);
}

//Setup event listener
start.addEventListener("click", setupTimer);
