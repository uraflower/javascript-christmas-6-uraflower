import OrderManager from '../src/Domain/OrderManager';

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
