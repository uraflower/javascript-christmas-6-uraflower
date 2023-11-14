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
