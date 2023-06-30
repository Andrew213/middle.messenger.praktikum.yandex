import Block from "../../Block.ts";
import Button from "../../components/button/index.tmpl.ts";
import { ButtonProps } from "../../components/index.ts";

const tmp = `
<nav class="navigation">
<ul class="navigation__list">
  {{#each items}}
            {{{this}}}
    {{/each}}
</ul>
</nav>
`;

const tmpBtn = `
    {{{btn}}}
`;

const itemList = [
  {
    text: "Авторизация",
    href: "/login",
  },
  {
    text: "Профиль",
    href: "/profile",
  },
  {
    text: "Регистрация",
    href: "/registration",
  },
  {
    text: "Чат",
    href: "/chat",
  },
  {
    text: "505",
    href: "/noAccess",
  },
  {
    text: "404",
    href: "/notFound",
  },
];

interface BtnProps {
  btn: Block;
  wrapperClassName?: string;
}
class BtnWrapper extends Block<BtnProps> {
  constructor(p: BtnProps) {
    super("li", { ...p, wrapperClassName: "navigation__item" });
  }

  protected render() {
    return this.compile(tmpBtn, this.props);
  }
}

class Navigation extends Block {
  constructor() {
    super("div", {});
  }

  protected init(): void {
    this.children.items = itemList.map(
      (item) =>
        new BtnWrapper({
          btn: new Button({
            wrapperClassName: "navigation__link",
            classNames: "navigation__link",
            type: "link",
            text: item.text,
            href: item.href,
          }),
        })
    );
  }

  protected render() {
    return this.compile(tmp, this.props);
  }
}

const navigation = new Navigation();

export default navigation;
