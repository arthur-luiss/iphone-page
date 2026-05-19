// ── SCROLL REVEAL ──
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 100);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);
reveals.forEach((el) => observer.observe(el));

// ── FORM SUBMIT ──
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector(".btn-submit-form");
  const original = btn.textContent;
  btn.textContent = "Solicitação enviada ✓";
  btn.style.background = "#0a84ff40";
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.style.background = "";
    btn.disabled = false;
    e.target.reset();
  }, 3500);
}