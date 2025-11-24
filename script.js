document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // para que anime solo una vez
        }
      });
    },
    {
      threshold: 0.20,      // cuanto visible tiene que estar para que arranque la animación
      rootMargin: "0px 0px -50px 0px", 
    }
  );
  elements.forEach((el) => observer.observe(el));
});