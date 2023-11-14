import { formatCount } from '../../src/utils/format';

describe('개수 포맷 테스트', () => {
  test('1을 개수로 포맷팅하면 "1개"이다', () => {
    const number = 1;
    const expected = '1개';

    const result = formatCount(number);

    expect(result).toBe(expected);
  });
});
