import Block from "../../Block.ts";

const tmp = `
  <p>Эта красивая страница 5** будет сделана потом. Подбираются
  стили</p>
  `;

class NoAccess extends Block {
  constructor() {
    super("div", {});
  }

  protected render() {
    return this.compile(tmp, this.props);
  }
}

const noAccessPage = new NoAccess();

export default noAccessPage;
