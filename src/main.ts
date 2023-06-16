import Handlebars from "handlebars";
import {
  switchLoadFilePopup,
  switchChangePasswordPopup,
} from "./pages/profilePage/index.ts";
import activeBtn from "./pages/navigationPage/index.ts";
import {
  loginPage,
  registRationPage,
  profilePage,
  chatPage,
  notFound,
  navigation,
  noAccessPage,
} from "./pages/index.ts";

const renderTmp = (tmp: string, locals?: Record<string, any>) => {
  const root = document.querySelector("#app");
  const template = Handlebars.compile(tmp);

  const navgationTmp: (a?: any) => string = Handlebars.compile(navigation);
  const result = template(locals);

  // это лишнее условие уйдёт, когда проавдёт навигация.
  // продумать, как лучше сделать
  if (window.location.pathname !== "/chat") {
    (root as any).innerHTML = `<main>${result + navgationTmp()}</main`;
  } else {
    (root as any).innerHTML = `${result}<main>${navgationTmp()}</main>`;
  }

  activeBtn(window.location.pathname.replace("/", ""));
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
  if (window.location.pathname === "/registration") {
    renderTmp(registRationPage);
    return;
  }

  if (window.location.pathname === "/chat") {
    renderTmp(chatPage);
    return;
  }

  if (window.location.pathname === "/noAccess") {
    renderTmp(noAccessPage);
    return;
  }

  if (window.location.pathname === "/") {
    window.location.replace("/auth");
    return;
  }

  if (window.location.pathname === "/auth") {
    renderTmp(loginPage);
    const urlData = new URLSearchParams(window.location.search);
    if (
      urlData.get("login") === user.login
      && urlData.get("password") === user.password
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
