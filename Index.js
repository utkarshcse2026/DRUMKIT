const drums = document.querySelectorAll('.drum');

drums.forEach((drum) => {
  drum.addEventListener('click', (e) => {
    const sound = drum.getAttribute('data-sound');
    playSound(sound);
  });
});

function playSound(sound) {
  const audio = new Audio(`sounds/${sound}.mp3`);
  audio.play();
}