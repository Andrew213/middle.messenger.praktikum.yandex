import Handlebars from "handlebars";

export default Handlebars.registerPartial("modal", (p, o) => {
  return `
  <div class="modal">
    <div class="modal__inner">${o.fn()}</div>
</div>`;
});
