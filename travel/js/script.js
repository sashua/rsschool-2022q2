(() => {
  backdrop = document.querySelector("[data-backdrop]");
  menu = document.querySelector("[data-menu]");
  menuOpenBtn = document.querySelector("[data-menu-open]");
  menuCloseBtn = document.querySelector("[data-menu-close]");
  menuLinks = document.querySelectorAll("[data-menu-link]");

  menuOpenBtn.addEventListener("click", openMenu);
  menuCloseBtn.addEventListener("click", closeMenu);
  backdrop.addEventListener("click", closeMenu);
  for (link of menuLinks) {
    link.addEventListener("click", closeMenu);
  }

  function openMenu() {
    backdrop.classList.add("is-shown");
    menu.classList.add("is-shown");
  }

  function closeMenu() {
    backdrop.classList.remove("is-shown");
    menu.classList.remove("is-shown");
  }
})();
