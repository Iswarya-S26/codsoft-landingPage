const nav = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 60);
});

let menu = document.getElementById("menu-icon");
let navbar = document.querySelector(".navbar-ul");

menu.addEventListener("click", function () {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
  console.log("hi");
});
