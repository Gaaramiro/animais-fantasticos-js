import outsideClick from "./outsideclick.js";

export default class MenuMobile {
  constructor(menuButton, menuList, events) {
    // define o toutchstart e click como padrao, caso o user nao defina.
    if (this.events === undefined) {
      this.events = ["touchstart", "click"];
    } else {
      this.events = events;
    }
    this.menuButton = document.querySelector(menuButton);
    this.menuList = document.querySelector(menuList);
    this.activeClass = "active";
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.add(this.activeClass);
    this.menuButton.classList.add(this.activeClass);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.activeClass);
      this.menuButton.classList.remove(this.activeClass);
    });
  }
  addMenuMobileEvents() {
    this.events.forEach((evento) =>
      this.menuButton.addEventListener(evento, this.openMenu)
    );
  }

  init() {
    if (this.menuButton && this.menuList) {
      this.addMenuMobileEvents();
    }
    return this;
  }
}
