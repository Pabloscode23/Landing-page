window.addEventListener("DOMContentLoaded", () => {
  let switcher = document.querySelector(".switcher__btn");
  let light = document.querySelector(".switcher__btn-icon-light");
  let dark = document.querySelector(".switcher__btn-icon-dark");

  switcher.addEventListener("click", () => {
    let head = document.head;

    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "./assets/css/dark.css";
    link.id = "theme-dark";
    let themeDark = document.querySelector("#theme-dark");

    if (themeDark) {
      head.removeChild(themeDark);
      light.style.display = "block";
      dark.style.display = "none";
    } else {
      head.appendChild(link);
      light.style.display = "none";
      dark.style.display = "block";
    }
  });
});
