const openMenu = document.querySelector(".nav-togle");
const menus = document.querySelector(".nav-list");
const iconMenu = document.querySelector(".fa-solid");

openMenu.addEventListener("click", () => {
  menus.classList.toggle("active");
  iconMenu.classList.toggle("fa-xmark");
});

document.querySelectorAll(".nav-list").forEach((n) => {
  n.addEventListener("click", function () {
    menus.classList.toggle("active");
    iconMenu.classList.toggle("fa-xmark");
  });
});

