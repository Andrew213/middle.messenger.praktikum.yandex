import Handlebars from "handlebars";

export default Handlebars.registerPartial("modal", (_p, o: any) => {
  return `
  <div class="modal">
    <div class="modal__inner">${o.fn()}</div>
  </div>
`;
});
