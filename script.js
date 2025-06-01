const fullText = "Hi there, my name is James Patrick. I am a full-stack software developer, currently working on my personal website. Coding is really fun, and I'm glad you have joined me in this journey.";

function playMusic() {
  document.getElementById("bg-music").play();
  document.getElementById("enter-btn").style.display = "none";

  const typedText = document.getElementById("typed-text");
  let index = 0;
  const speed = 65;

  function type() {
    if (index < fullText.length) {
      typedText.textContent += fullText.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      document.getElementById("continue-link").classList.remove("hidden");
      document.getElementById("continue-link").classList.add("visible");
    }
  }

  document.getElementById("intro-container").classList.remove("hidden");
  document.getElementById("intro-container").classList.add("visible");
  type();
}

function toggleAudio() {
  const audio = document.getElementById("bg-music");
  const button = document.getElementById("audio-toggle");

  if (audio.paused) {
    audio.play();
    button.textContent = "🔊 Mute";
  } else {
    audio.pause();
    button.textContent = "🔈 Unmute";
  }
}

const quotes = [
  "Coding is a journey, not a destination.",
  "Believe in yourself, code your dreams.",
  "Every bug is an opportunity to learn.",
  "The best way to predict the future is to create it.",
  "Strive for progress, not perfection."
];

let quoteIndex = 0;
let quoteText = "";
let quoteSpeed = 100;

function typeQuote() {
  const typedQuote = document.getElementById("typed-quote");
  const currentQuote = quotes[quoteIndex];
  
  if (quoteText.length < currentQuote.length) {
    quoteText += currentQuote.charAt(quoteText.length);
    typedQuote.textContent = quoteText;
    setTimeout(typeQuote, quoteSpeed);
  } else {
    setTimeout(() => {
      quoteText = "";
      quoteIndex = (quoteIndex + 1) % quotes.length;
      setTimeout(typeQuote, 1000);
    }, 2000);
  }
}

function showQuote() {
  document.getElementById("quote-container").classList.remove("hidden");
  document.getElementById("quote-container").classList.add("visible");
  typeQuote();
}

window.onload = () => {
  setTimeout(showQuote, 2000);
};