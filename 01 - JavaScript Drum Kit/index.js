document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("keydown", bangTheDrum);

  const KEYS = document.querySelectorAll(".key");
  KEYS.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );
});

function bangTheDrum() {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (!audio) {
    return;
  } else {
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }
}

function removeTransition(e) {
  if (e.propertyName != "transform") return;

  this.classList.remove("playing");
}
