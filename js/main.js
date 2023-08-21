const navbar = document.getElementById("navbar");
const logo = document.getElementById("logo");
const button = document.getElementById("button");
const links = document.querySelectorAll("links li");
window.addEventListener("scroll", function () {
  navbar.classList.toggle("sticky", window.scrollY > 0);
  logo.classList.toggle("sticky-logo", window.scrollY > 0);
  button.classList.toggle("sticky-button", window.scrollY > 0);
});
