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
  return Number.isInteger(number);
}

function isInRange(number, min, max) {
  return number >= min && number <= max;
}

export {
  isEmpty, isIncludes, isInteger, isInRange,
};
