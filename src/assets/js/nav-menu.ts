const button = document.querySelector("#navbar-menu-button");
const menu = document.querySelector("#navbar-menu");

if (button !== null && menu !== null) {
  button.addEventListener("click", (e) => {
    const isOpen = button.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  const setMenuOpen = (open: boolean) => {
    button.setAttribute("aria-expanded", open ? "true" : "false");
    menu.classList.toggle("expanded", open);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  menu.addEventListener("keyup", (e: KeyboardEventInit) => {
    if (e.code === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const isClickInsideElement =
      menu.contains(target) || button.contains(target);
    if (!isClickInsideElement) {
      closeMenu();
    }
  });
}
