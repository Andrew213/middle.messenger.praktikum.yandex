import Handlebars from "handlebars";
import getProps from "../../utils/getProps";

export default Handlebars.registerPartial("btn", (p, o) => {
  const props = getProps(p);

  if (p.class.indexOf("link") >= 0) {
    return `<a ${props}>${o.fn()}</a>`;
  }

  if (p.arrow) {
    delete p.arrow;
    return `
    <button ${props}>${o.fn()}
        <span class="icon">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 0.984375L17.0156 9L9 17.0156L7.59375 15.6094L13.1719 9.98438H0.984375V8.01562H13.1719L7.59375 2.39062L9 0.984375Z" fill="white"></path>
        </svg></span>
    </button>
    `;
  }
  return `<button ${props}>${o.fn()}</button>`;
});