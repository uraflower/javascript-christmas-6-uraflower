import Discount from '../src/Domain/Benefit/Discount';
import OrderManager from '../src/Domain/OrderManager';
import VisitDate from '../src/Domain/VisitDate.js';
import BENEFIT from '../src/constants/benefit/benefit';

const ORDER = '타파스-1,바비큐립-2,초코케이크-3,샴페인-4';

describe('크리스마스 디데이 할인 테스트', () => {
  test.each([
    ['31', ORDER, 0],
    ['25', ORDER, 3400],
  ])(
    '방문 날짜가 %s일이고 "%s" 주문 시 크리스마스 디데인 할인 금액은 %d원이다',
    (date, order, expected) => {
      const visitDate = new VisitDate(date);
      const orderManager = new OrderManager(order);
      const discount = new Discount();

      discount.setDiscount(visitDate, orderManager);
      const result = discount.detail[BENEFIT.christmas];

      expect(result).toBe(expected);
    },
  );
});

describe('평일 할인 테스트', () => {
  test.each([
    ['1', ORDER, 0],
    ['25', ORDER, 2023 * 3],
  ])(
    '방문 날짜가 %s일이고 "%s" 주문 시 평일 할인 금액은 %d원이다',
    (date, order, expected) => {
      const visitDate = new VisitDate(date);
      const orderManager = new OrderManager(order);
      const discount = new Discount();

      discount.setDiscount(visitDate, orderManager);
      const result = discount.detail[BENEFIT.weekday];

      expect(result).toBe(expected);
    },
  );
});

describe('주말 할인 테스트', () => {
  test.each([
    ['25', ORDER, 0],
    ['1', ORDER, 2023 * 2],
  ])(
    '방문 날짜가 %s일이고 "%s" 주문 시 주말 할인 금액은 %d원이다',
    (date, order, expected) => {
      const visitDate = new VisitDate(date);
      const orderManager = new OrderManager(order);
      const discount = new Discount();

      discount.setDiscount(visitDate, orderManager);
      const result = discount.detail[BENEFIT.weekend];

      expect(result).toBe(expected);
    },
  );
});

describe('특별 할인 테스트', () => {
  test.each([
    ['1', ORDER, 0],
    ['25', ORDER, 1000],
  ])(
    '방문 날짜가 %s일이고 "%s" 주문 시 특별 할인 금액은 %d원이다',
    (date, order, expected) => {
      const visitDate = new VisitDate(date);
      const orderManager = new OrderManager(order);
      const discount = new Discount();

      discount.setDiscount(visitDate, orderManager);
      const result = discount.detail[BENEFIT.special];

      expect(result).toBe(expected);
    },
  );
});

describe('총 할인 금액 계산 테스트', () => {
  test(`방문 날짜가 25일이고 "${ORDER}" 주문 시 총 할인 금액은 10469원이다`, () => {
    const date = '25';
    const visitDate = new VisitDate(date);
    const orderManager = new OrderManager(ORDER);
    const expected = 10469;
    const discount = new Discount();

    discount.setDiscount(visitDate, orderManager);
    const result = discount.getTotalAmountOfDiscount();

    expect(result).toBe(expected);
  });
});
