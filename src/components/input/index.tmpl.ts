/* eslint-disable no-param-reassign */
import Block from "../../Block.ts";
import { AttributesMap } from "../../utils/AttributesMap.ts";
import getProps from "../../utils/getProps.ts";

const inputTmp = `
{{#if label}}
  <div class="inputWrapper">
    <div class="text">
      {{label}}
    </div>
    <div class="container">
     <input name="{{name}}" {{{inputProps}}} value="{{value}}" class="input {{classNames}}"/>
     {{#if message}}
        <span class="input__errorMessage">{{message}}</span>
     {{/if}}
    </div>
  </div>
  {{else}}
   <div class="container">
      <input {{{inputProps}}} name="{{name}}"  autocomplete="off"  value="{{value}}" class="input {{classNames}}"/>
     {{#if message}}
        <span class="input__errorMessage">{{message}}</span>
     {{/if}}
     </div>
{{/if}}
`;

export interface InputProps {
  wrapperClassName?: string;
  classNames?: string;
  label?: string;
  value?: string;
  inputProps?: AttributesMap<HTMLInputElement>;
  rules?: { rule: RegExp; message: string }[];
  message?: string;
  events?: Record<string, (e: Event) => void>;
  validate?: (element: HTMLInputElement) => void;
  name?: string;
}

export default class Input extends Block<InputProps> {
  validate: (element: HTMLInputElement) => void;

  constructor(props: InputProps) {
    if (props.inputProps) {
      const attributes = getProps(props.inputProps);

      props.inputProps = attributes.trim();
    }
    props.value = props.value || "";
    super("div", props);

    this.validate = function (element: HTMLInputElement): boolean {
      if (!element.value) {
        this.setProps({
          message: "Поле не может быть пустым",
          value: element.value,
        });
        this.element.classList.add("input-error");
        return false;
      }
      if (this.props.rules?.length) {
        return this.props.rules.every(({ rule, message }) => {
          if (!rule.test(element.value)) {
            this.setProps({
              message,
              value: element.value,
            });
            this.element.classList.add("input-error");
            return false;
          }

          this.setProps({
            message: "",
            value: element.value,
          });
          this.element.classList.remove("input-error");
          return true;
        });
      }
      this.setProps({
        message: "",
        value: element.value,
      });
      this.element.classList.remove("input-error");
      return true;
    };
  }

  init(): void {
    this.setProps({
      events: {
        focusout: this.focusout.bind(this),
      },
    });
  }

  focusout(e: Event) {
    const element = e.target as HTMLInputElement;
    this.validate(element);
  }

  protected render() {
    return this.compile(inputTmp, this.props);
  }
}
