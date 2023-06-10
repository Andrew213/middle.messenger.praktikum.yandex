import Handlebars from "handlebars";
import getProps from "../../utils/getProps";

export default Handlebars.registerPartial("input", (p, o) => {
  const props = getProps(p);
  let inputEl = `<input  class="input ${p.class || ""}" ${props}/>`;
  if (p?.title) {
    inputEl = `
        <div  class="inputWrapper">
            <div class="text">
                ${p.title}
            </div>
            <input  class="input ${p.class || ""}" ${props}/>
        </div>
        `;
  }

  return inputEl;
});
