export function switchLoadFilePopup() {
  const imageBtn = document.querySelector(".profile__avatar-img") as any;
  imageBtn.addEventListener("click", () => {
    const popup = document.querySelector(".loadFile") as any;

    popup.classList.add("popup-active");
  });

  const closeBtn = document.querySelector(".file__btn-close") as any;
  closeBtn.addEventListener("click", () => {
    const popup = document.querySelector(".loadFile") as any;
    popup.classList.remove("popup-active");
  });
}

export function switchChangePasswordPopup() {
  const changeBtn = document.querySelector(".profile__btn_password") as any;
  changeBtn.addEventListener("click", () => {
    const popup = document.querySelector(".changePass") as any;
    popup.classList.add("popup-active");
  });

  const closeBtn = document.querySelector(".password__btn_back") as any;
  closeBtn.addEventListener("click", () => {
    const popup = document.querySelector(".changePass") as any;
    popup.classList.remove("popup-active");
  });
}
