/* eslint-disable no-param-reassign */
import Block from "../../Block.ts";

const popupTmp = `
    <div class="popup__dialog">
        <div class="popup__content">
            {{{children}}}
        </div>
    </div>
`;

interface PopupProps {
  children: Block;
  className?: string;
  wrapperClassName?: string;
}
export default class Popup extends Block {
  constructor(props: PopupProps) {
    props.wrapperClassName = `popup ${props.className}`;
    super("div", props);
  }

  protected render() {
    return this.compile(popupTmp, this.props);
  }
}
