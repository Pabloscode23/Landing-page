document.addEventListener("DOMContentLoaded", (event) => {
  let mobile_btn = document.querySelector(".navbar__mobile-btn");
  let mobile_menu = document.querySelector(".menu-mobile");
  let btnClose = document.querySelector(".menu-mobile__close");

  let showHiddenMenu = () => {
    let show = document.querySelector(".menu-mobile--show");
    //con punto
    if (show) {
      //sin punto
      mobile_menu.classList.remove("menu-mobile--show");
    } else {
      mobile_menu.classList.add("menu-mobile--show");
    }
  };

  btnClose.addEventListener("click", showHiddenMenu);
  mobile_btn.addEventListener("click", showHiddenMenu);

  window.addEventListener("resize", () => {
    let windowWidth = parseInt(document.body.clientWidth);

    if (windowWidth >= 1000) {
      mobile_menu.classList.remove("menu-mobile--show");
    }
  });

  let menuItem = document.querySelectorAll(".menu-mobile__item");
  menuItem.forEach((item) => {
    item.addEventListener("click", (event) => {
      let submenu = item.lastElementChild;

      if (submenu.className === "menu-mobile__submenu-mobile") {
        if (submenu.style.display === "block") {
          submenu.style.display = "none";
        } else {
          submenu.style.display = "block";
        }
      }
    });
  });
});
