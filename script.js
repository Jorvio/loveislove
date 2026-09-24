// Pequenas animações e interações da página
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".music-card, .paper, .photo, .final-card").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
