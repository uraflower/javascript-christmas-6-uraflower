function formatNumber(number) {
  return number.toLocaleString('ko-kr');
}

function split(string, parser) {
  const array = string.split(parser);
  return array.map((element) => element.trim());
}

export { formatNumber, split };
