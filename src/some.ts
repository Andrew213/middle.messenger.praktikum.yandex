/* eslint-disable no-param-reassign */
function addShape<T>(shapes: T[], obj: object) {
  if (obj instanceof Object) {
    shapes.push(obj as T);
    return;
  }

  throw new TypeError("Argument is not instanceof Shape");
}

type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : T extends () => void
  ? "function"
  : "object";

// ###############################################################

// Conditional types

// SomeType extends OtherType ? TrueType : FalseType;

interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;

type Example2 = RegExp extends Animal ? number : string;

// ################################################################

// const enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }

// let directions = [
//   Direction.Up,
//   Direction.Down,
//   Direction.Left,
//   Direction.Right,
// ];

// ############################################################################

const enum EDirection {
  Up,
  Down,
  Left,
  Right,
}

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 1,
  Right: 3,
} as const;

EDirection.Up;

ODirection.Up;

// Using the enum as a parameter
function walk(dir: EDirection) {
  console.log();
}

// It requires an extra line to pull out the values
type Direction = (typeof ODirection)[keyof typeof ODirection];
function run(dir: Direction) {
  console.log();
}
walk(EDirection.Left);
run(ODirection.Right);

// ############################################################

const namespace = (value: string): Record<string, any> => {
  const result: Record<string, any> = {};
  value
    .split(".")
    .reduce((obj: Record<string, any>, key: string) => (obj[key] = obj[key] || {}), result);

  return result;
};

namespace("a.b.c.d.e"); // {a:{b:{c:{d:{e:{}}}}}}

// ############################################################

type Nullable<T> = T | null;
const a = "a";
const text: Nullable<HTMLDivElement> = document.getElementById("text") as HTMLDivElement;
// const input: Nullable<HTMLInputElement> = document.getElementById(
//   "input"
// ) as HTMLInputElement;

const data = {
  title: "",
};

const keyupFunc = (event: Event): void => {
  const currentElement = event.target as HTMLInputElement;

  console.log(currentElement.value);

  Object.defineProperty(data, "title", {
    value: currentElement.value,
  });

  text.textContent = data.title;
};

// input.addEventListener("keyup", keyupFunc);

// if (!text || !input) {
//   throw new Error("нет полей");
// }

// export default Nullable;

// ##################################################################

// interface TTestComponentState {
//   title: string;
// }

// class TestComponent extends TTestComponentState {
//   constructor(element: HTMLElement) {
//     super("TestComponent", element);
//   }

//   handleClick(): void {
//     this.state.title = "change from js!";
//   }
// }

// ###############################################
