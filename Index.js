// index.js

// Function to play sound
function playSound(soundFile) {
  const audio = new Audio(`${soundFile}.mp3`);
  audio.play();
}

// Detecting button press
const drumButtons = document.querySelectorAll('.drum');
drumButtons.forEach(button => {
  button.addEventListener('click', function() {
    const soundFile = this.getAttribute('data-sound');
    playSound(soundFile);
  });
});

// Detecting keyboard press
document.addEventListener('keydown', function(event) {
  const key = event.key;
  const button = document.querySelector(`.${key}`);
  if (button) {
    const soundFile = button.getAttribute('data-sound');
    playSound(soundFile);
  }
});