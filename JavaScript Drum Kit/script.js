function playAudio(key) {
  const audioElement = document.querySelector(
    `.audio[data-element-id="${key}"]`
  );
  audioElement.currentTime = 0;
  audioElement.play();
}

window.addEventListener("keypress", (e) => {
  const keyPressed = e.key.toUpperCase().charCodeAt();
  const keyElement = document.querySelector(
    `.key[data-element-id="${keyPressed}"]`
  );
  if (keyElement) {
    keyElement.classList.add("click");
    playAudio(keyPressed);
  }
});

const keys = document.querySelectorAll(".key");

for (let item of keys) {
  item.addEventListener("transitionend", function () {
    this.classList.remove("click");
  });
}
