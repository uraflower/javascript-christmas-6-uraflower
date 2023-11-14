import {
  formatCount,
  formatMinusMoney,
  formatMoney,
  split,
} from '../../src/utils/format';

describe('개수 포맷 테스트', () => {
  test('1을 개수로 포맷팅하면 "1개"이다', () => {
    const number = 1;
    const expected = '1개';

    const result = formatCount(number);

    expect(result).toBe(expected);
  });
});

describe('금액 포맷 테스트', () => {
  test('100000을 금액으로 포맷팅하면 "100,000원"이다', () => {
    const amount = 100_000;
    const expected = '100,000원';

    const result = formatMoney(amount);

    expect(result).toBe(expected);
  });

  test('100000을 마이너스 금액으로 포맷팅하면 "-100,000원"이다', () => {
    const amount = 100_000;
    const expected = '-100,000원';

    const result = formatMinusMoney(amount);

    expect(result).toBe(expected);
  });
});

describe('문자열 구분 테스트', () => {
  test.each([
    ['바비큐립-1,샴페인-1', ',', ['바비큐립-1', '샴페인-1']],
    ['바비큐립-1', '-', ['바비큐립', '1']],
  ])('"%s"을 "%s"로 구분한 결과는 %p이다', (string, parser, expected) => {
    const result = split(string, parser);

    expect(result).toStrictEqual(expected);
  });
});
