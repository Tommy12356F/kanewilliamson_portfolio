const numbers = document.querySelectorAll(".number");
function animateCounters() {
  numbers.forEach((num) => {
    const target = +num.dataset.target;
    let current = 0;

    const increment = target / 100;

    const update = () => {
      current += increment;

      if (current < target) {
        num.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        num.textContent = target;
      }
    };

    update();
  });
}
let hasAnimated = false;

const aboutSection = document.querySelector(".about");

const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting && !hasAnimated) {
      animateCounters();
      hasAnimated = true;
    }
  },
  { threshold: 0.5 }
);

observer.observe(aboutSection);
