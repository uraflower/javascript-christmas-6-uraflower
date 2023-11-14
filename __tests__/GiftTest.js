import Gift from '../src/Domain/Benefit/Gift';

describe('증정 메뉴 정보 전달 테스트', () => {
  test('120,000원 주문 시 증정 메뉴는 샴페인 1개이다', () => {
    const orderAmount = 120000;
    const expectedName = '샴페인';
    const expectedNumber = 1;
    const gift = new Gift();

    gift.setGift(orderAmount);

    expect(gift.name).toBe(expectedName);
    expect(gift.number).toBe(expectedNumber);
  });

  test('10,000원 주문 시 증정 메뉴는 없다', () => {
    const orderAmount = 10000;
    const gift = new Gift();

    gift.setGift(orderAmount);

    expect(gift.name).toBeNull();
    expect(gift.number).toBeNull();
  });
});

describe('증정 혜택 금액 계산 테스트', () => {
  test.each([
    [120000, 25000],
    [10000, 0],
  ])('%d원 주문 시 증정 혜택 금액은 %d원이다', (orderAmount, expected) => {
    const gift = new Gift();
    gift.setGift(orderAmount);

    const result = gift.getTotalAmountOfGift();

    expect(result).toBe(expected);
  });
});
