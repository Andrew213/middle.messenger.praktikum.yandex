import Block from "../../Block.ts";

const modalTmp = `
    <div class="modal">
    <div class="modal__inner">{{{children}}}</div>
  </div>
  {{{loadfileModal}}}
  {{{changePassModal}}}
`;

interface ModalProps {
  children: Block;
  loadfileModal?: Block;
  changePassModal?: Block;
}
export default class Modal extends Block {
  constructor(props: ModalProps) {
    super("div", props);
  }

  protected render() {
    return this.compile(modalTmp, this.props);
  }
}
