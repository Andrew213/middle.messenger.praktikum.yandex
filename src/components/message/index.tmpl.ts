import Handlebars from "handlebars";
import getProps from "../../utils/getProps.ts";
import getImageUrl from "../../utils/getImg.ts";

export default Handlebars.registerPartial("chat", (p) => {
  const props = getProps(p);
  return `
<button class="chat">
    <div class="chat__body">
        <img src=${getImageUrl("ava.jpg")} alt="аватарка юзера" width="57">
    <div class="chat__bodyText">
        <span class="chat__name">
            Вадим
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
});
