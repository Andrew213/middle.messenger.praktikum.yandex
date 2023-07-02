import Block from "../../Block.ts";
import router from "../../Router.ts";
import Button from "../../components/button/index.tmpl.ts";
import FormClass from "../../components/form/index.tmpl.ts";
import "../../components/index.ts";
import Modal from "../../components/modal/index.tmpl.ts";
import getImageUrl from "../../utils/getImg.ts";

const tmp = `
   <div class="login">
    <img src=${getImageUrl("logo-mini.png")} alt="лого мессенджера">
    {{{form}}}
    <div class="login__footer">
        <span class="login__text">
            Нет аккаунта?
        </span>
        {{{btnCreate}}}
    </div>
</div>
`;

class LoginPage extends Block {
  constructor() {
    super("div", {});
  }

  protected init(): void {
    this.children.form = new FormClass({
      onSuccess() {
        router.go("/messenger");
      },
      wrapperClassName: "login__form",
      class: "login__form",
      inputs: [
        {
          wrapperClassName: "login__input",
          name: "login",
          inputProps: {
            placeholder: "Логин",
          },
          rules: [
            {
              message: "Длина: 3-20 символов",
              rule: /^.{3,20}$/,
            },
            {
              message: "Должна быть буква или цифра",
              rule: /^(?=.*[a-zA-Z])(?=.*\d).{3,20}$/,
            },
            {
              message: "Допустимые символы: _- и латиница",
              rule: /^[a-zA-Z0-9_-]+$/,
            },
          ],
        },
        {
          wrapperClassName: "login__input",
          name: "password",
          inputProps: {
            placeholder: "Пароль",
            type: "password",
          },
          rules: [
            {
              message: "Длина: 8-40 символов",
              rule: /^.{8,40}$/,
            },

            {
              message: "Хотя бы 1 заглавная буква и цифра",
              rule: /^(?=.*[A-Z])(?=.*\d).+$/,
            },
          ],
        },
      ],
      btnSubmit: new Button({
        type: "primary",
        text: "Войти",
        wrapperClassName: "login__btn",
        classNames: "login__btn_enter",
        arrow: true,
        buttonProps: {
          type: "submit",
        },
      }),
    });

    this.children.btnCreate = new Button({
      type: "link",
      text: "Создать",
      events: {
        click: () => {
          router.go("/sing-up");
        },
      },
      classNames: "login__btn login__btn_create",
    });
  }

  protected render() {
    return this.compile(tmp, this.props);
  }
}

const loginPage = new Modal({
  children: new LoginPage(),
});

export default loginPage;
