import Discount from '../src/Domain/Benefit/Discount';
import OrderManager from '../src/Domain/OrderManager';
import VisitDate from '../src/Domain/VisitDate.js';
import BENEFIT from '../src/constants/benefit/benefit';

const NO_AVAILABLE_ORDER = '타파스-1';
const AVAILABLE_ORDER = '타파스-1,바비큐립-2,초코케이크-3,샴페인-4';

describe('크리스마스 디데이 할인 테스트', () => {
  test.each([
    ['31', AVAILABLE_ORDER, 0],
    ['25', AVAILABLE_ORDER, 3400],
  ])(
    '방문 날짜가 %s이고 "%s" 주문 시 %d원 할인한다',
    (date, order, expected) => {
      const visitDate = new VisitDate(date);
      const orderManager = new OrderManager(order);

      const discount = new Discount(visitDate, orderManager);
      const result = discount.detail[BENEFIT.christmas];

      expect(result).toBe(expected);
    },
  );
});

describe('평일 할인 테스트', () => {
  test.each([
    ['1', AVAILABLE_ORDER, 0],
    ['25', AVAILABLE_ORDER, 2023 * 3],
  ])(
    '방문 날짜가 %s이고 "%s" 주문 시 %d원 할인한다',
    (date, order, expected) => {
      const visitDate = new VisitDate(date);
      const orderManager = new OrderManager(order);

      const discount = new Discount(visitDate, orderManager);
      const result = discount.detail[BENEFIT.weekday];

      expect(result).toBe(expected);
    },
  );
});
