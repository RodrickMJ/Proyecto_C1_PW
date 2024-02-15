document.addEventListener("DOMContentLoaded", function() {
  const audio = document.getElementById("myAudio");
  const playPauseBtn = document.getElementById("playPauseBtn");

  playPauseBtn.addEventListener("click", function() {
      if (audio.paused) {
          console.log("Reproduciendo");
          audio.play();
      } else {
          console.log("En pausa");
          audio.pause();
      }
  });
});
