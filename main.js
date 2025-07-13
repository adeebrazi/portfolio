const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('open');});

const headings = [
  "Artificial Intelligence & Data Science",
  "Full-Stack Web Developer",
  "UI/UX Designer",
  "Graphics Designer"
];
let headingIndex = 0;
let charIndex = 0;
let isDeleting = false;
const headingEl = document.getElementById("typewriter-heading");
function typeHeading() {
  const currentText = headings[headingIndex];
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }
  headingEl.textContent = currentText.substring(0, charIndex);
  let typeSpeed = isDeleting ? 60 : 100;
  if (!isDeleting && charIndex === currentText.length) {
    typeSpeed = 2000; // pause at full text
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    headingIndex = (headingIndex + 1) % headings.length; // next heading
    typeSpeed = 500;
  }
  setTimeout(typeHeading, typeSpeed);
}
typeHeading();

const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  const icon = themeToggle.querySelector("i");
  if (body.classList.contains("light-theme")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
});