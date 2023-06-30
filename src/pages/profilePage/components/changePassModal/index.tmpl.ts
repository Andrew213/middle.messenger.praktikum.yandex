import Block from "../../../../Block.ts";
import Button from "../../../../components/button/index.tmpl.ts";
import FormClass from "../../../../components/form/index.tmpl.ts";
import "../../../../components/index.ts";
import Input from "../../../../components/input/index.tmpl.ts";
import Modal from "../../../../components/modal/index.tmpl.ts";
import Popup from "../../../../components/popup/index.tmpl.ts";

const tmp = `
<div class="password">
  {{{form}}}
  {{{btnBack}}}
</div>
`;

const btn = `

        <div class="password__buttons">
        {{{btnBack}}}
        {{{btnSave}}}
        </div>

`;

class SomeBlock extends Block {
  constructor() {
    super("div", {});
  }

  protected init(): void {
    this.children.btnSave = new Button({
      text: "Сохранить",
      classNames: "password__btn password__btn_save",
      wrapperClassName: "password__btn",
      type: "primary",
      buttonProps: {
        type: "submit",
      },
    });
    this.children.btnBack = new Button({
      type: "link",
      text: "Назад",
      classNames: "password__btn password__btn_back",
      wrapperClassName: "password__btn",
    });
  }

  protected render() {
    return this.compile(btn, this.props);
  }
}

// const tmp = `
// <div class="password">
//     <form class="password__form">
//     {{{inputOldPass}}}
//     {{{inputNewPass}}}

//     </form>
// </div>
// `;

class ChangePassword extends Block {
  constructor() {
    super("div", {
      wrapperClassName: "changePass",
    });
  }

  protected init(): void {
    this.children.form = new FormClass({
      wrapperClassName: "password",
      class: "password__form",
      inputs: [
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
      btnSubmit: new SomeBlock(),
    });
  }

  protected render() {
    return this.compile(tmp, this.props);
  }
}

const changePassEl = new Modal({
  children: new ChangePassword(),
});

const changePassPopup = new Popup({
  children: changePassEl,
  className: "changePass",
});

export default changePassPopup;
