/* eslint-disable no-param-reassign */
import { switchLoadFilePopup, switchChangePasswordPopup } from "./pages/profilePage/index.ts";
import registrationPage from "./pages/registrationPage/index.tmpl.ts";
import ChatPage from "./pages/chatPage/index.tmpl.ts";
import profilePage from "./pages/profilePage/index.tmpl.ts";
import notFoundPage from "./pages/notFoundPage/index.tmpl.ts";
import noAccessPage from "./pages/noAccessPage/index.tmpl.ts";
import router from "./Router.ts";
import loginPage from "./pages/loginPage/index.tmpl.ts";

router.use("/", loginPage);
router.use("/sing-up", registrationPage);
router.use("/messenger", new ChatPage());
router.use("/settings", profilePage);
router.use("/404", notFoundPage);
router.use("/505", noAccessPage);
router.start();

if (window.location.pathname === "/settings") {
  switchChangePasswordPopup();
  switchLoadFilePopup();
}
