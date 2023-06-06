import Handlebars from "handlebars";
import "../../../../components/index.js";

export default Handlebars.registerPartial("loadFileModal", (p, o) => {
  return `
{{#> modal}}
<div class="file">
    <button class="file__btn file__btn-close">X</button>
    <span class="file__title">Загрузите файл</span>
    <label for="upload-photo" class="file__text"> Выбрать файл на компьютере</label>
    <form class="file__form">
        {{>input  type="file" class="file__link" accept="image/jpeg, image/png" id="upload-photo" name="avatar" }}
        {{#>btn class="default file__btn" type="submit"}}
          Поменять
        {{/btn}}
    </form>
</div>
{{/modal}}
`;
});
