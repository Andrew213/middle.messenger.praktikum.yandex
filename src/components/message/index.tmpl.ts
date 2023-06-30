import getImageUrl from "../../utils/getImg.ts";
import Block from "../../Block.ts";

const messageTmp = `

<button class="chat">
    <div class="chat__body">
        <img src=${getImageUrl("ava.jpg")} alt="аватарка юзера" width="57">
    <div class="chat__bodyText">
        <span class="chat__name">
            {{name}}
        </span>
        <div class="chat__innerText">
            <span class="chat__me">Вы:</span>
            <span class="chat__text">Круто!</span>
        </div>
    </div>
    </div>
    <span class="chat__day">Пт</span>
    <div class="chat__newCount" >5</div>
</button>

`;

interface MessageProps {
  name: string;
}

export default class Message extends Block {
  constructor(props: MessageProps) {
    super("li", props);
  }

  protected render() {
    return this.compile(messageTmp, this.props);
  }
}
