document.addEventListener('DOMContentLoaded', () => {
  const animateButtons = document.querySelectorAll('.animate-click');

  animateButtons.forEach(button => {
    button.addEventListener('click', () => {
      button.classList.add('animate__animated', 'animate__flip');

      button.addEventListener('animationend', () => {
        button.classList.remove('animate__animated', 'animate__flip');
      }, { once: true });
    });
  });
});
