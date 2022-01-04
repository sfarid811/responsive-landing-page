const navMenu = document.getElementById("nav_menu"),
  toggleMenu_Btn = document.getElementById("toggle_btn"),
  closeMenu_btn = document.getElementById("close_btn");

// SHOW MENU
toggleMenu_Btn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// HIDE MENU
closeMenu_btn.addEventListener("click", () => {
  navMenu.classList.remove("show");
});