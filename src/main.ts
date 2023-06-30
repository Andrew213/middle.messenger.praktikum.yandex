/* eslint-disable no-param-reassign */
import { switchLoadFilePopup, switchChangePasswordPopup } from "./pages/profilePage/index.ts";
import Block from "./Block.ts";
import LoginPage from "./pages/loginPage/index.tmpl.ts";
import registrationPage from "./pages/registrationPage/index.tmpl.ts";
import ChatPage from "./pages/chatPage/index.tmpl.ts";
import ProfilePage from "./pages/profilePage/index.tmpl.ts";
import navigation from "./pages/navigationPage/index.tmpl.ts";
import notFoundPage from "./pages/notFoundPage/index.tmpl.ts";
import noAccessPage from "./pages/noAccessPage/index.tmpl.ts";

const user = {
  email: "supermail@yandex.ru",
  login: "superlogin",
  first_name: "Jango",
  second_name: "Bango",
  display_name: "Andrew",
  phone: "+99999999999",
  password: "111111",
};

function renderPage(query: string, block: Block) {
  const root = document.querySelector(query);

  root?.appendChild(block.getContent());
  block.dispatchComponentDidMount();
}

renderPage("#app", navigation);

document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname === "/registration") {
    renderPage("#app", registrationPage);

    return;
  }

  if (window.location.pathname === "/chat") {
    renderPage("#app", new ChatPage());

    return;
  }

  if (window.location.pathname === "/noAccess") {
    renderPage("#app", noAccessPage);
    return;
  }

  if (window.location.pathname === "/") {
    renderPage("#app", LoginPage);
    return;
  }

  if (window.location.pathname === "/login") {
    renderPage("#app", LoginPage);
    const urlData = new URLSearchParams(window.location.search);
    if (urlData.get("login") === user.login && urlData.get("password") === user.password) {
      window.location.replace("/chat");
    }
    return;
  }

  if (window.location.pathname === "/profile") {
    renderPage("#app", ProfilePage);
    switchChangePasswordPopup();
    switchLoadFilePopup();
    return;
  }

  renderPage("#app", notFoundPage);
});
