import COMMON from '../constants/common.js';

function isUndefined(target) {
  return target === undefined;
}

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

function isPositiveInteger(number) {
  return (
    !isUndefined(number) &&
    !isEmpty(number) &&
    !number.includes(COMMON.whitespace) &&
    !number.includes(COMMON.dot) &&
    Number(number) > 0 &&
    Number(number) <= Number.MAX_SAFE_INTEGER &&
    isInteger(number)
  );
}

export { isUndefined, isEmpty, isInteger, isPositiveInteger, isInRange };
