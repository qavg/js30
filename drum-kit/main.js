window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  console.log(key);
  key.classList.add("playing");
});

function removeTransition(e) {
  //   console.log(e);
  if (e.propertyName !== "transform") return;
  console.log(
    "🚀 ~ file: main.js ~ line 16 ~ removeTransition ~ e.propertyName",
    e.propertyName,
  );
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => {
  key.addEventListener("transitionend", removeTransition);
});
