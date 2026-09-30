// Prevent zooming in and out using Ctrl + Mouse Wheel or Ctrl + Plus/Minus/Zero
// 1. Prevent Ctrl + Wheel zoom
document.addEventListener(
  "wheel",
  function (e) {
    if (e.ctrlKey) {
      e.preventDefault();
    }
  },
  { passive: false },
);

// 2. Prevent Ctrl + Plus, Ctrl + Minus, and Ctrl + Zero shortcuts
document.addEventListener("keydown", function (e) {
  if (
    e.ctrlKey &&
    (e.key === "=" || e.key === "-" || e.key === "+" || e.key === "0")
  ) {
    e.preventDefault();
  }
});

// Button functonality
const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};
