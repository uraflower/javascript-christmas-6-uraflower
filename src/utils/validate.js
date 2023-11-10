import COMMON from '../constants/common.js';

function isEmpty(string) {
  return string === COMMON.empty;
}

function isInteger(number) {
  return Number.isInteger(Number(number));
}

function isInRange(number, min, max) {
  const numericNumber = Number(number);
  return numericNumber >= min && numericNumber <= max;
}

export {
  isEmpty, isInteger, isInRange,
};
