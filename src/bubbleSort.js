/* eslint-disable no-param-reassign */
function swap(arr, i, j) {
  const tmp = arr[i];

  arr[i] = arr[j];
  arr[j] = tmp;
}

function bubbleSort(arr) {
  const listLength = arr.length - 1;

  for (let i = 0; i < listLength; i++) {
    for (let j = 0; j < listLength; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

const test = [31, 1, 9, 6];

console.log(bubbleSort(test));
