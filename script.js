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

// Adesivos: aparecem com um "pop" suave quando entram na tela
const decorObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      decorObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll(".decor-item").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 120}ms`;
  decorObserver.observe(el);
});
