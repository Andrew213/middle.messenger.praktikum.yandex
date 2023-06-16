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
  const a = "a";
  for (let i = 0; i < size; i++) {
    memory[i] = undefined;
  }
  //   console.log(`memory `, memory);
  return memory;
}

class MyArray {
  constructor(initialSize = 1) {
    if (
      Number(initialSize) !== initialSize ||
      Math.round(initialSize) !== initialSize
    ) {
      throw new Error("Длина массива должна быть целым числом");
    }

    if (!(initialSize > 0)) {
      throw new Error("Размер массива должен быть больше нуля");
    }

    this.size = initialSize;
    this.memory = allocate(initialSize);
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
    for (let i = 0; i < this.size - 3; i++) {
      this.memory[i] = i;
      this.length += 1;
    }
    return this.length;
    // for (let i = array.length - 1; i >= position; i--) {
    //   array[i + 1] = array[i];
    // }
    // const result = {};
    // if (index) {
    //   this.memory();
    // }
    // this.memory[this.size] = value;
    // this.memory = allocate(this.size + 1);
    // return this.size;
  }

  // Удаляет элемент по индексу со сдвигом всех последующих элементов.
  // Если индекс за пределами - кидает ошибку.
  // Возвращает новую длину массива.
  delete(index) {
    console.log();
  }
}

const array = new MyArray(8);

console.log("add", array.add());
console.log("mem ", array.memory);
