import Block from "../../Block.ts";
import { ButtonProps } from "../button/index.tmpl.ts";
import Input, { InputProps } from "../input/index.tmpl.ts";

const formTmp = `
<form class="{{class}}">
{{#each inputs}}
  {{{this}}}
{{/each}}
{{{btnSubmit}}}
</form>
`;

interface FormProps {
  class: string;
  inputs: InputProps[];
  btnSubmit?: Block<ButtonProps>;
  wrapperClassName: string;
  onSuccess?: () => void;
}

export default class FormClass extends Block {
  constructor(props: FormProps) {
    super("div", props);
  }

  init(): void {
    this.children.inputs = this.props.inputs.map((inp: InputProps) => new Input(inp));
    this.setProps({
      events: {
        submit: this.submit.bind(this),
      },
    });
  }

  submit(e: Event) {
    e.preventDefault();

    const element = e.target as HTMLFormElement;
    const data = new FormData(element);

    const inputsInForm = Array.from(element.elements).filter((el: any) => el.name);

    if (Array.isArray(this.children.inputs)) {
      const isInputsValidate = this.children.inputs.every((inputInstance) => {
        const currentInputEl = inputsInForm.find(
          (inputElement: any) => inputElement.name === inputInstance.props.name
        ) as HTMLInputElement;

        if (currentInputEl) {
          if (inputInstance.props.name === "passwordRepeat") {
            const password = inputsInForm.find(
              (inputElement: any) => inputElement.name === "password"
            ) as HTMLInputElement;
            if (password && password.value !== currentInputEl.value) {
              inputInstance.setProps({
                message: "Пароли не совпадают",
                value: currentInputEl.value,
              });
              return false;
            }
          }
          return inputInstance.validate(currentInputEl);
        }

        return true;
      });

      if (isInputsValidate) {
        data.forEach((value, key) => {
          console.log(`${key}: ${value}`);
        });
        this.props.onSuccess && this.props.onSuccess();
      }
    }
  }

  render() {
    return this.compile(formTmp, this.props);
  }
}
