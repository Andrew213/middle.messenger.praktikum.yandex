import Block from "../../Block.ts";
import getImageUrl from "../../utils/getImg.ts";
import Button from "../../components/button/index.tmpl.ts";
import Modal from "../../components/modal/index.tmpl.ts";

import loadFilePopup from "./components/loadFileModal/index.tmpl.ts";
import changePassPopup from "./components/changePassModal/index.tmpl.ts";
import FormClass from "../../components/form/index.tmpl.ts";

const tmp = `
 <div class="profile">
    <div class="profile__avatar">
        <img src=${getImageUrl(
          "ava.jpg"
        )} alt="user avatar", width="130" class="profile__avatar-img"/>
        <span class="profile__avatar-text">
            Изменить фото
        </span>
    </div>
    <span class="profile__title">
        {{display_name}}
    </span>
    {{{form}}}
    {{{buttonChangePass}}}
    {{{buttonBack}}}
 </div>
`;

interface ProfileProps {
  loadfileModal?: Block;
  wrapperClassName?: string;
  display_name: string;
}

class ProfilePageClass extends Block<ProfileProps> {
  constructor(props: ProfileProps) {
    super("div", props);
  }

  init(): void {
    this.children.form = new FormClass({
      wrapperClassName: "profile__form",
      class: "profile__form",
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
      ],
      btnSubmit: new Button({
        type: "primary",
        text: "Зарегистрироваться",
        wrapperClassName: "profile__btnWrapper",
        classNames: "profile__btn profile_data",
        buttonProps: {
          type: "submit",
        },
      }),
    });

    this.children.buttonChangePass = new Button({
      type: "default",
      text: "Изменить пароль",
      wrapperClassName: "profile__btnWrapper",
      classNames: "profile__btn profile__btn_password",
    });
    this.children.buttonBack = new Button({
      type: "link",
      text: "Назад",
      href: "/chat",
      wrapperClassName: "profile__btnWrapper",
      classNames: "profile__btn",
    });
  }

  protected render() {
    return this.compile(tmp, this.props);
  }
}

const ProfilePage = new Modal({
  children: new ProfilePageClass({ display_name: "NickName" }),
  loadfileModal: loadFilePopup,
  changePassModal: changePassPopup,
});

export default ProfilePage;
