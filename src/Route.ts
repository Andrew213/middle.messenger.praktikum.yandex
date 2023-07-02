import Block from "./Block.ts";
import Button from "./components/button/index.tmpl.ts";

// class Button extends Block {
//   getContent() {
//     return "Button";
//   }
// }

function isEqual(lhs: string, rhs: string) {
  return lhs === rhs;
}

function render(query: string, block: Block) {
  const root = document.querySelector(query) as any;
  root?.appendChild(block.getContent());
  // return root;
}

export default class Route {
  public _pathname = "";

  public _blockClass: Block;

  public _block: any | null;

  public _props: any;

  constructor(pathname: string, view: Block, props?: any) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  public navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave(): void {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string): boolean {
    return isEqual(pathname, this._pathname);
  }

  render(): void {
    if (!this._block) {
      this._block = this._blockClass;
      render(this._props.rootQuery, this._block);
      return;
    }

    this._block.show();
  }
}

// route.navigate("/buttons");
// route.navigate("/trash");
// route.leave();
