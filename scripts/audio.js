const audio = document.getElementById("playAudio");

window.addEventListener("DOMContentLoaded", () => {
  if (audio) {
    audio.volume = 0.7;
    setTimeout(startAudio, 100);
  }
});
function startAudio() {
  audio
    .play()
    .catch((e) => {
      if (e.name === "NotAllowedError" || e.name === "NotSupportedError") {
        setTimeout(startAudio, 200);
      }
    })
    .then(() => {});
}
