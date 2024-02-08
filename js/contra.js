document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("myAudio");
    const playPauseBtn = document.getElementById("playPauseBtn");
  
    playPauseBtn.addEventListener("click", function() {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    });
  });
  