const animatedText = document.querySelector('.animated-text');
const texts = ["Let's dream with us", "furuCRM", "Merry Christmas"];
let currentIndex = 0;

animatedText.addEventListener('animationiteration', () => {
  animatedText.textContent = texts[currentIndex];
  currentIndex = (currentIndex + 1) % texts.length;
});
