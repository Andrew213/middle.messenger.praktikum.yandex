export function switchLoadFilePopup() {
  const imageBtn = document.querySelector(".profile__avatar-img");
  imageBtn.addEventListener("click", () => {
    const popup = document.querySelector(".loadFile");
    popup.classList.add("popup-active");
  });

  const closeBtn = document.querySelector(".file__btn-close");
  closeBtn.addEventListener("click", () => {
    const popup = document.querySelector(".loadFile");
    popup.classList.remove("popup-active");
  });
}

export function switchChangePasswordPopup() {
  const changeBtn = document.querySelector(".profile__btn_password");
  changeBtn.addEventListener("click", () => {
    const popup = document.querySelector(".changePass");
    popup.classList.add("popup-active");
  });

  const closeBtn = document.querySelector(".password__btn_back");
  closeBtn.addEventListener("click", () => {
    const popup = document.querySelector(".changePass");
    popup.classList.remove("popup-active");
  });
}
