var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyaddElementToBeginningOfArray(array, element) {
  array = [element, ...array];
  return array;
}