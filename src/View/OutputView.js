import { Console } from '@woowacourse/mission-utils';
import OUTPUT from '../constants/message/output.js';

const OutputView = {
  printMenu() {
    Console.print(OUTPUT.title.order);
  },

  printBenefits(christmasDiscountedAmount) {
    Console.print(OUTPUT.title.benefit);
    this.printChristmasDiscount(christmasDiscountedAmount);
  },

  printChristmasDiscount(christmasDiscountedAmount) {
    if (christmasDiscountedAmount) {
      Console.print(`크리스마스 디데이 할인: -${christmasDiscountedAmount}원`);
    }
  },

  printSpecialDiscount(specialDiscountedAmount) {
    if (specialDiscountedAmount) {
      Console.print(`특별 할인: -${specialDiscountedAmount}원`);
    }
  },
};

export default OutputView;
