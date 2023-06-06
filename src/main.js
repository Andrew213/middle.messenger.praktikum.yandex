import Handlebars from "handlebars";
import {
  switchLoadFilePopup,
  switchChangePasswordPopup,
} from "./pages/profilePage/index.js";

import {
  loginPage,
  registRationPage,
  profilePage,
  mainPage,
  notFound,
} from "./pages/index.js";

const renderTmp = (tmp, locals) => {
  const root = document.querySelector("#app");
  const template = Handlebars.compile(tmp);
  const result = template(locals);
  root.innerHTML = result;
};

const user = {
  email: "supermail@yandex.ru",
  login: "superlogin",
  first_name: "Jango",
  second_name: "Bango",
  display_name: "Andrew",
  phone: "+99999999999",
  password: "111111",
};

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname === "/create") {
    renderTmp(registRationPage);
    return;
  }

  if (window.location.pathname === "/chat") {
    renderTmp(mainPage);
    return;
  }

  if (window.location.pathname === "/") {
    renderTmp(loginPage);
    const urlData = new URLSearchParams(window.location.search);
    if (
      urlData.get("login") === user.login &&
      urlData.get("password") === user.password
    ) {
      window.location.replace("/chat");
    }
    return;
  }

  if (window.location.pathname === "/profile") {
    renderTmp(profilePage, user);
    switchLoadFilePopup();
    switchChangePasswordPopup();
    return;
  }

  renderTmp(notFound);
});
