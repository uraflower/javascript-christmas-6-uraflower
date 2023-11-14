import { isPositiveInteger } from '../../src/utils/validate';

describe('양의 정수 판별 테스트', () => {
  const TRUE_STRING = '맞다';
  const FALSE_STRING = '아니다';

  test.each([
    ['1234', TRUE_STRING, true],
    ['1.0', FALSE_STRING, false],
    ['5.0000000000000001', FALSE_STRING, false],
    ['1일', FALSE_STRING, false],
    ['hi', FALSE_STRING, false],
    ['1+1', FALSE_STRING, false],
    ['-1', FALSE_STRING, false],
    ['0', FALSE_STRING, false],
    ['0001', FALSE_STRING, false],
  ])('"%s"는 양의 정수가 %s', (number, _, expected) => {
    const result = isPositiveInteger(number);

    expect(result).toBe(expected);
  });
});
