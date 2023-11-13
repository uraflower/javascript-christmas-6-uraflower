import OrderManager from '../src/Domain/OrderManager';

describe('기능 테스트', () => {
  test('주문을 입력하면 주문한 메뉴와 메뉴 개수를 구분한다', () => {
    const input = '티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1';
    const expected = {
      티본스테이크: 1,
      바비큐립: 1,
      초코케이크: 2,
      제로콜라: 1,
    };

    const orderManager = new OrderManager(input);
    const result = orderManager.order;

    expect(result).toStrictEqual(expected);
  });

  describe('특정 타입 메뉴 개수 세기 테스트', () => {
    test.each([
      ['타파스-1,바비큐립-2,초코케이크-3,샴페인-4', 'appetizer', 1],
      ['타파스-1,바비큐립-2,초코케이크-3,샴페인-4', 'main', 2],
      ['타파스-1,바비큐립-2,초코케이크-3,샴페인-4', 'dessert', 3],
      ['타파스-1,바비큐립-2,초코케이크-3,샴페인-4', 'drink', 4],
    ])('"%s"을 주문하면 "%s"의 개수는 %d개이다', (input, type, expected) => {
      const orderManager = new OrderManager(input);

      const result = orderManager.countMenusTypeOf(type);

      expect(result).toBe(expected);
    });
  });

  describe('할인 전 총주문 금액 계산 테스트', () => {
    test.each([
      ['타파스-1,제로콜라-1', 8500],
      ['티본스테이크-1,바비큐립-1,초코케이크-2,제로콜라-1', 142000],
    ])('"%s" 주문 시 할인 전 총주문 금액은 %d원이다', (input, expected) => {
      const orderManager = new OrderManager(input);
      const result = orderManager.getTotalAmountOfOrder();

      expect(result).toStrictEqual(expected);
    });
  });
});

describe('예외 테스트', () => {
  describe('입력 받은 주문이 유효하지 않음을 알린다', () => {
    test.each([
      ['메뉴가 없는 메뉴인 경우', ['없는메뉴-1', '시저샐러드2개']],
      [
        '개수가 양의 정수가 아닌 경우',
        [
          '타파스',
          '타파스-',
          '타파스- ',
          '타파스-1개',
          '타파스-hi',
          '타파스-1.0',
          '타파스-0',
          '타파스--1',
        ],
      ],
      ['개수가 0으로 시작하는 경우', ['타파스-0001']],
      ['메뉴가 중복 입력된 경우', ['시저샐러드-1,시저샐러드-2']],
    ])('입력 값: (%s) %p', (_, inputs) => {
      const INVALID_ORDER_MESSAGE = '[ERROR] 유효하지 않은 주문입니다.';

      inputs.forEach((input) => {
        expect(() => {
          new OrderManager(input);
        }).toThrow(INVALID_ORDER_MESSAGE);
      });
    });
  });

  test('음료만 주문 시 주문할 수 없음을 알린다', () => {
    const DRINK_ONLY_MESSAGE = '[ERROR] 음료만 주문 시, 주문할 수 없습니다.';
    const input = '레드와인-1,샴페인-2';

    expect(() => {
      new OrderManager(input);
    }).toThrow(DRINK_ONLY_MESSAGE);
  });

  test('한 번에 20개 넘게 주문 시 최대 20개만 주문 가능함을 알린다', () => {
    const MAX_MENU_LIMIT_MESSAGE =
      '[ERROR] 메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다.';
    const input = '티본스테이크-20,샴페인-1';

    expect(() => {
      new OrderManager(input);
    }).toThrow(MAX_MENU_LIMIT_MESSAGE);
  });
});
