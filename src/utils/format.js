function parse(string, parser) {
  const array = string.split(parser);
  return array.map((element) => element.trim());
}

export { parse };
