// count down script

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const targetDate = new Date("2025-11-29T21:30:00");

function updateCountdown() {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    days.textContent = "00";
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
    clearInterval(interval);
    return;
  }

  const d = Math.floor(difference / (1000 * 60 * 60 * 24));
  const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const m = Math.floor((difference / (1000 * 60)) % 60);
  const s = Math.floor((difference / 1000) % 60);

  days.textContent = String(d).padStart(2, "0");
  hours.textContent = String(h).padStart(2, "0");
  minutes.textContent = String(m).padStart(2, "0");
  seconds.textContent = String(s).padStart(2, "0");
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();

// carousel script
var splide = new Splide(".splide", {
  type: "loop",
  speed: 400,
  autoplay: true,
  interval: 3000,
  pauseOnHover: false,
  pauseOnFocus: true,
});
splide.mount();

// audio script
const audio = document.getElementById("audio");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  playButton.classList.toggle("hidden");
  pauseButton.classList.toggle("hidden");
}

document.getElementById("play-button").addEventListener("click", toggleAudio);
document.getElementById("pause-button").addEventListener("click", toggleAudio);

// copy alias button
const copyButton = document.getElementById("copy-alias");

function copyAlias() {
  const alias = "sar.bella";
  navigator.clipboard.writeText(alias).then(() => {
    // alert("Alias copied to clipboard!");
  });
}

document.getElementById("copy-alias").addEventListener("click", copyAlias);

// share button not available script
const shareButton = document.getElementById("share-button");
const shareMessage = document.getElementById("share-message");

shareButton.addEventListener("click", () => {
  shareMessage.classList.remove("h-0");
  shareMessage.classList.remove("h-auto");
  setTimeout(() => {
    shareMessage.classList.add("h-0");
  }, 3000);
});
