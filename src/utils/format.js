import UNIT from '../constants/unit.js';

function formatNumber(number) {
  return number.toLocaleString('ko-kr');
}

function formatMoney(number) {
  return formatNumber(number) + UNIT.amount;
}

function split(string, parser) {
  const array = string.split(parser);
  return array.map((element) => element.trim());
}

export { formatNumber, formatMoney, split };
