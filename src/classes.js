/* eslint-disable class-methods-use-this */
function Someclass(from, to) {
  this.from = from;
  this.to = to;
}

Someclass.prototype = {
  constructor: Someclass,
  showFrom() {
    console.log(this.from);
  },
  plus() {
    return this.from + this.to;
  },
};

const s = new Someclass(2, 5);
// console.log(s.plus());

// ###################################################

const Range = class {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  plus() {
    return this.from + this.to;
  }

  includes(x) {
    return this.from <= x && x <= this.to;
  }

  *[Symbol.iterator]() {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield x;
  }

  toString() {
    return `(${this.from}...${this.to})`;
  }

  static parse() {
    console.log(123);
  }
};

const instanceRange = new Range(5, 8);

// console.log([...instanceRange]);

// ################################################

function allocate(size) {
  const memory = {};
  for (let i = 0; i < size; i++) {
    memory[i] = undefined;
  }
  //   console.log(`memory `, memory);
  return memory;
}

function checkFreeSpace(memory) {
  return Object.values(memory).findIndex((el) => el === undefined);
}

class MyArray {
  constructor(initialSize = 1) {
    if (Number(initialSize) !== initialSize || Math.round(initialSize) !== initialSize) {
      throw new Error("Длина массива должна быть целым числом");
    }

    if (!(initialSize > 0)) {
      throw new Error("Размер массива должен быть больше нуля");
    }

    this.size = initialSize;
    this.memory = { 0: "a", 1: "b", 2: undefined, 3: undefined, 4: "d", 5: "f" };
    // this.memory = allocate(initialSize);
    this.length = 0;
  }

  // Возвращает значение по индексу.
  // Если индекс за пределами — кидает ошибку.
  get(index) {
    console.log();
  }

  // Устанавливает значение по индексу.
  // Если индекс за пределами — кидает ошибку.
  set(index, value) {
    console.log();
  }

  // Добавляет новый элемент в массив.
  // Если index не определён — добавляет в конец массива.
  // В противном случае — добавляет по индексу со сдвигом
  // всех последующих элементов.
  // Если индекс за пределами - кидает ошибку.
  // Увеличивает выделенную память вдвое, если необходимо.
  // Возвращает новую длину массива.
  add(value, index) {
    const memoryValues = Object.values(this.memory);
    const freeSpaceIndex = checkFreeSpace(this.memory);

    if (this.memory[index] === undefined) {
      this.memory[index] = value;
      return this.size;
    }
    if (freeSpaceIndex >= 0) {
      // если есть свободное место
      // сдвигаю массив пока пустое место не станет нужным индексом
      console.log(`freeSpace `, freeSpaceIndex);
    }
    return this.size;
  }

  // Удаляет элемент по индексу со сдвигом всех последующих элементов.
  // Если индекс за пределами - кидает ошибку.
  // Возвращает новую длину массива.
  delete(index) {
    console.log();
  }
}

const array = new MyArray(8);

// поmyarrat.add("v", 4);
console.log("mem ", array.memory);

const ar = [1, 2, 3, 4, 5];
const newItem = 6;
const position = 2;

for (let i = ar.length - 1; i >= position; i--) {
  ar[i + 1] = ar[i];
}
ar[position] = newItem;

console.log(`aa`, ar); // [1, 2, 6, 3, 4, 5]
