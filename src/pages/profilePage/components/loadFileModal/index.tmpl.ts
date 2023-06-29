import "../../../../components/index.ts";
import Block from "../../../../Block.ts";
import Input from "../../../../components/input/index.tmpl.ts";
import Button from "../../../../components/button/index.tmpl.ts";
import Modal from "../../../../components/modal/index.tmpl.ts";
import Popup from "../../../../components/popup/index.tmpl.ts";

const tmp = `
<div class="file">
    <button class="file__btn file__btn-close">X</button>
    <span class="file__title">Загрузите файл</span>
    <label for="upload-photo" class="file__text"> Выбрать файл на компьютере</label>
    <form class="file__form">
    {{{input}}}
    {{{button}}}
    </form>
</div>
`;

class LoadFileClass extends Block {
  constructor() {
    super("div", {
      wrapperClassName: "file",
    });
  }

  protected init(): void {
    this.children.input = new Input({
      wrapperClassName: "file__link",
      classNames: "file__link",
      inputProps: {
        type: "file",
        accept: "image/jpeg, image/png",
        id: "upload-photo",
        name: "avatar",
      },
    });

    this.children.button = new Button({
      wrapperClassName: "file__btn",
      classNames: "file__btn",
      text: "Поменять",
      type: "default",
      buttonProps: {
        type: "submit",
      },
    });
  }

  protected render() {
    return this.compile(tmp, this.props);
  }
}

const loadFileElement = new Modal({
  children: new LoadFileClass(),
});

const loadFilePopup = new Popup({
  children: loadFileElement,
  className: "loadFile",
});

export default loadFilePopup;
