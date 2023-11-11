import { Console } from '@woowacourse/mission-utils';
import OUTPUT from '../constants/message/output.js';

const OutputView = {
  printOrder(order) {
    Console.print(OUTPUT.title.order);
    Object.entries(order).forEach(([menu, number]) => {
      Console.print(`${menu} ${number}개`);
    });
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

Object.freeze(OutputView);

export default OutputView;
