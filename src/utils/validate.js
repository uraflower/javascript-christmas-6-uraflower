import COMMON from '../constants/common.js';

function isEmpty(string) {
  return string === COMMON.empty;
}

function isIncludes(string, target) {
  if (string.constructor === String) {
    return string.includes(target);
  }
  return false;
}

function isInteger(number) {
  return Number.isInteger(Number(number));
}

function isInRange(number, min, max) {
  const numericNumber = Number(number);
  return numericNumber >= min && numericNumber <= max;
}

export {
  isEmpty, isIncludes, isInteger, isInRange,
};
