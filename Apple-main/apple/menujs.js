var menu = document.querySelector(".menu");
var list = document.querySelector(".nav-list");

menu.addEventListener("click", () => {
  menu.classList.toggle("clicked");

  list.classList.toggle("list");
});
