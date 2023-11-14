import { formatCount, formatMoney } from '../../src/utils/format';

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
});
