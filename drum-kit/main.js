window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log("🚀 ~ file: main.js ~ line 7 ~ audio", audio);
});
