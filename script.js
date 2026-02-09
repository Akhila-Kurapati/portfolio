document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill");
  skills.forEach((skill, index) => {
    skill.style.animationDelay = `${index * 0.2}s`;
  });
});
