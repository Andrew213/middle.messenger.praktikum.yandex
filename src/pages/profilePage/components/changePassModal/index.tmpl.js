import Handlebars from "handlebars";
import "../../../../components/index";

export default Handlebars.registerPartial("changePassModal", () => {
  return `
{{#> modal}}
<div class="password">
    <form class="password__form">
        {{>input  placeholder="Старый пароль" name="oldPassword"}}
        {{>input  placeholder="Новый пароль" name="newPassword"}}
        <div class="password__buttons">
        {{#>btn class="primary password__btn password__btn_save" type="submit"}}
            Сохранить
        {{/btn}}
        {{#>btn class="link password__btn password__btn_back" type="submit"}}
            Назад
        {{/btn}}
        </div>
    </form>
</div>
{{/modal}}
`;
});
