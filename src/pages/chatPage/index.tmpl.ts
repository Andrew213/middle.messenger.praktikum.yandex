import Block from "../../Block.ts";
import Button from "../../components/button/index.tmpl.ts";
import "../../components/index.ts";
import Input from "../../components/input/index.tmpl.ts";
import Message from "../../components/message/index.tmpl.ts";
import getImageUrl from "../../utils/getImg.ts";

const tmp = `
   <div class="wrapper">
   <header class="header">
        <div class="header__logo">
            <img src=${getImageUrl("logo.png")} alt="салам логотип" />
        </div>
        <div class="header__content">
             {{{inputSearch}}}
             {{{btnProfile}}}
            <div class="header__avatar">
                <img src=${getImageUrl("ava.jpg")} alt="аватарка юзера" width="57">
            </div>
        </div>
</header>
    <main class="main">
        <ul class="main__list">
        {{#each chatsList}}
            {{{this}}}
        {{/each}}
        </ul>
        <div class="main__chat">
            <span class="main__date">19 июня</span>

            <div class="message message-from">
                <div class="message__inner message__inner-from">
                    <span class="message__text">
                        Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой
                        Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой
                        Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой
                        Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой
                        Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой
                        Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой
                        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    </span>
                    <span class="message__date message__date-from">11:54</span>
                </div>
            </div>

            <div class="message message-from">
                <div class="message__inner message__inner-from message-img ">
                    <img src=${getImageUrl("moon.jpg")} alt="картинка">
                    <span class="message__date message__date-from">11:55</span>
                </div>
            </div>

            <div class="message message-to">
                <div class="message__inner message__inner-to">
                    <span class="message__text">
                        Классно!
                    </span>
                    <span class="message__date message__date-to">11:56</span>
                 </div>
            </div>
            <div class="main__footer">
                {{{inputSend}}}
            </div>
        </div>
    </main>
   </div> 
`;

const chtatsList = [
  { id: 1, name: "Anton" },
  { id: 2, name: "Andrei" },
  { id: 3, name: "Igor" },
  { id: 4, name: "Yzbek" },
  { id: 1, name: "Anton" },
  { id: 2, name: "Andrei" },
  { id: 3, name: "Igor" },
  { id: 4, name: "Yzbek" },
  { id: 1, name: "Anton" },
  { id: 2, name: "Andrei" },
  { id: 3, name: "Igor" },
  { id: 4, name: "Yzbek" },
  { id: 1, name: "Anton" },
  { id: 2, name: "Andrei" },
  { id: 3, name: "Igor" },
  { id: 4, name: "Yzbek" },
];

export default class ChatPage extends Block {
  constructor() {
    super("div", {});
  }

  protected init(): void {
    this.children.chatsList = chtatsList.map((chat) => new Message({ name: chat.name }));
    this.children.inputSend = new Input({
      wrapperClassName: "main__input",
      classNames: "main__input",
      inputProps: {
        placeholder: "Сообщение",
      },
    });
    this.children.inputSearch = new Input({
      wrapperClassName: "header__input",
      classNames: "header__input",
      inputProps: {
        placeholder: "Поиск",
      },
    });
    this.children.btnProfile = new Button({
      wrapperClassName: "header__btn",
      text: "Профиль",
      classNames: "header__btn",
      href: "/profile",
      type: "link",
    });
  }

  protected render() {
    return this.compile(tmp, this.props);
  }
}
