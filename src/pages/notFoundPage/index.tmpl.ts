import Block from "../../Block.ts";

const tmp = `
  <p>Эта красивая страница 404 будет сделана потом. Подбираются
  стили</p>
  `;

class NotFound extends Block {
  constructor() {
    super("div", {});
  }

  protected render() {
    return this.compile(tmp, this.props);
  }
}

const notFoundPage = new NotFound();

export default notFoundPage;
