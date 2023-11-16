import COMMON from '../constants/common.js';
import UNIT from '../constants/unit.js';

function formatCount(number) {
  return number + UNIT.count;
}

function formatMoney(amount) {
  const formattedAmount = amount.toLocaleString('ko-kr');
  return formattedAmount + UNIT.money;
}

function formatMinusMoney(amount) {
  const formattedAmount = formatMoney(amount);
  return COMMON.dash + formattedAmount;
}

function split(string, parser) {
  const array = string.split(parser);
  return array.map((element) => element.trim());
}

export {
  formatCount, formatMoney, formatMinusMoney, split,
};
