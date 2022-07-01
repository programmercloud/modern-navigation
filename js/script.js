const app = (() => {
  let body;
  let menu;
  let menuItems;

  const init = () => {
    body = document.querySelector("body");
    menu = document.querySelector(".menu-icon");
    menuItems = document.querySelector(".nav__list-item");

    applyListeners();
  };

  const applyListeners = () =>{
    menu.addEventListener('click', () => body.classList.toggle('nav-active'));
  };

  init();
})();
