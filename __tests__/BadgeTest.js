import Badge from '../src/Domain/Benefit/Badge.js';

describe('배지 전달 테스트', () => {
  test.each([
    [5000, '별'],
    [10000, '트리'],
    [20000, '산타'],
  ])(
    '총 혜택 금액이 %d원이면 증정 배지는 "%s"이다',
    (benefitAmount, expected) => {
      const result = Badge.getBadge(benefitAmount);

      expect(result).toBe(expected);
    },
  );

  test('총 혜택 금액이 3000원이면 증정 배지는 없다', () => {
    const benefitAmount = 3000;

    const result = Badge.getBadge(benefitAmount);

    expect(result).toBeNull();
  });
});
