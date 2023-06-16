import Handlebars from "handlebars";
// import getProps from "../../utils/getProps";

export default Handlebars.registerPartial("popup", (p, o: any) => {
  return `
<div class="popup ${p?.class || ""}">
    <div class="popup__dialog">
        <div class="popup__content">
            ${o.fn()}
        </div>
    </div>
</div>
`;
});
