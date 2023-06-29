import Block from "../../Block.ts";
import Button from "../../components/button/index.tmpl.ts";
import FormClass from "../../components/form/index.tmpl.ts";
import "../../components/index.ts";
import Modal from "../../components/modal/index.tmpl.ts";

const tmp = `
<div class="registration">
 <span class="registration__title">
        Регистрация аккаунта
    </span>
    {{{form}}}
    <div class="registration__footer">
        <span class="registration__text">
            Есть аккаунт?
        </span>
       {{{btnEnter}}}
    </div>
</div>
`;

const foo = `
{{#>modal}}
<div class="registration">
    <span class="registration__title">
        Регистрация аккаунта
    </span>
    <form action="#" class="registration__form">
        {{>input placeholder="Email" title="Email" name="email" }}
        {{>input placeholder="Логин" title="Логин" name="login" }}
        {{>input placeholder="Имя" name="first_name" title="Имя" }}
        {{>input placeholder="Фамилия"  name="second_name" title="Фамилия" }}
        {{>input placeholder="Имя в чате" name="display_name" title="Имя в чате" }} 
        {{>input placeholder="Телефон" name="phone" type="tel" title="Телефон" }}
        {{>input placeholder="Пароль" name="password" type="password" title="Пароль" }}
        {{>input placeholder="Повторите пароль" name="password" type="password" title="Повторите пароль" }}
        {{#>btn arrow=true type='submit' class="primary registration__btn registration__btn_login"}}
        Зарегистрироваться
        {{/btn}}
    </form>
    <div class="registration__footer">
        <span class="registration__text">
            Есть аккаунт?
        </span>
        {{#>btn href="/" class="link registration__btn registration__btn_enter"}}
            Войти
        {{/btn}}
    </div>
</div>
{{/modal}}
`;

interface RegistrationIntarface {
  wrapperClassName?: string;
}

class RegistrationPage extends Block<RegistrationIntarface> {
  constructor(p: RegistrationIntarface) {
    super("div", p);
  }

  protected init(): void {
    this.children.form = new FormClass({
      wrapperClassName: "registration registration__form",
      class: "registration registration__form",
      inputs: [
        {
          wrapperClassName: "inputWrapper",
          name: "email",
          inputProps: {
            placeholder: "Email",
            type: "email",
          },
          label: "Email",
          rules: [
            {
              rule: /^[a-zA-Z0-9_.-]+@[a-zA-Z]+(\.[a-zA-Z]+)+$/,
              message: "Невалидный email",
            },
          ],
        },
        {
          wrapperClassName: "inputWrapper",
          name: "login",
          inputProps: {
            placeholder: "Логин",
          },
          label: "Логин",
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
          name: "first_name",
          wrapperClassName: "inputWrapper",
          inputProps: {
            placeholder: "Имя",
          },
          label: "Имя",
          rules: [
            {
              rule: /^[А-ЯЁа-яёA-Za-z]+$/,
              message: "Латиница или кириллица и без символов",
            },
            {
              rule: /^[А-ЯЁA-Z][А-ЯЁа-яёa-z]*$/,
              message: "Первая буква должна быть заглавной",
            },
          ],
        },
        {
          name: "second_name",
          wrapperClassName: "inputWrapper",
          inputProps: {
            placeholder: "Фамилия",
          },
          label: "Фамилия",
          rules: [
            {
              rule: /^[А-ЯЁа-яёA-Za-z]+$/,
              message: "Латиница или кириллица и без символов",
            },
            {
              rule: /^[А-ЯЁA-Z][А-ЯЁа-яёa-z]*$/,
              message: "Первая буква должна быть заглавной",
            },
          ],
        },
        {
          name: "display_name",
          wrapperClassName: "inputWrapper",
          inputProps: {
            placeholder: "Имя в чате",
          },
          label: "Имя в чате",
        },
        {
          name: "phone",
          wrapperClassName: "inputWrapper",
          inputProps: {
            placeholder: "Телефон",
            type: "tel",
          },
          label: "Телефон",
          rules: [
            {
              rule: /^\+?\d{10,15}$/,
              message: "10-15 цифр",
            },
          ],
        },
        {
          name: "password",
          wrapperClassName: "inputWrapper",
          inputProps: {
            placeholder: "Пароль",
            type: "password",
          },
          label: "Пароль",
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
        {
          name: "passwordRepeat",
          wrapperClassName: "inputWrapper",
          inputProps: {
            placeholder: "Повторите пароль",
            type: "password",
          },
          label: "Повторите пароль",
        },
      ],
      btnSubmit: new Button({
        type: "primary",
        text: "Зарегистрироваться",
        wrapperClassName: "registration__btn_login",
        classNames: "registration__btn registration__btn_login",
        arrow: true,
        buttonProps: {
          type: "submit",
        },
      }),
    });

    this.children.btnEnter = new Button({
      type: "link",
      text: "Войти",
      wrapperClassName: "registration__btn",
      classNames: "registration__btn registration__btn_enter",
      href: "/login",
      buttonProps: {
        type: "submit",
      },
    });
  }

  protected render() {
    return this.compile(tmp, this.props);
  }
}

const registrationPage = new Modal({
  children: new RegistrationPage({
    wrapperClassName: "registration",
  }),
});

export default registrationPage;
