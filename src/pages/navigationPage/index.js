const activeBtn = (pathname) => {
  const btnEl = document.querySelector(`.navigation__link-${pathname}`);
  if (btnEl) {
    btnEl.classList.add("navigation__link-active");
  }
};

export default activeBtn;
