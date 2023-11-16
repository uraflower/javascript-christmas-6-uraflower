import OrderManager from '../../src/Domain/OrderManager.js';
import VisitDate from '../../src/Domain/VisitDate.js';
import isSatisfiedBaseConditions from '../../src/utils/checkBaseConditions';

describe('기본 혜택 조건 체크 테스트', () => {
  test.each([
    ['1', '바비큐립-1', '만족한다', true],
    ['1', '타파스-1', '만족하지 못한다', false],
  ])(
    '방문 날짜가 %s일이고 "%s" 주문 시 기본 혜택 조건을 %s',
    (date, order, _, expected) => {
      const visitDate = new VisitDate(date);
      const orderManager = new OrderManager(order);

      const result = isSatisfiedBaseConditions(visitDate, orderManager);

      expect(result).toBe(expected);
    },
  );
});
