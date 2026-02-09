document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill");
  skills.forEach((skill, index) => {
    skill.style.animationDelay = `${index * 0.2}s`;
  });
});
// Toggle menu on click
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});