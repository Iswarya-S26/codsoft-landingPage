const nav = document.getElementsByTagName("nav")[0];

window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 60);
  console.log("hi");
});
