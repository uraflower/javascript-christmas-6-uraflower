import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printMenu() {
    Console.print('<주문 메뉴>');
  },

  printBenefits(christmasDiscountedAmount) {
    Console.print('\n<혜택 내역>');
    this.printChristmasDiscount(christmasDiscountedAmount);
  },

  printChristmasDiscount(christmasDiscountedAmount) {
    if (christmasDiscountedAmount) {
      Console.print(`크리스마스 디데이 할인: -${christmasDiscountedAmount}원`);
    }
  },
};

export default OutputView;
