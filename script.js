document.getElementById("year").textContent = new Date().getFullYear();

const contactLink = document.querySelector('a[href="#contacts"]');
const contactSection = document.getElementById("contacts");

if (window.location.hash === "#contacts") {
  history.replaceState(null, "", window.location.pathname + window.location.search);
  window.scrollTo(0, 0);
}

contactLink?.addEventListener("click", (event) => {
  event.preventDefault();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  contactSection?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
});
