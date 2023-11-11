import { Console } from '@woowacourse/mission-utils';
import OUTPUT from '../constants/message/output.js';
import UNIT from '../constants/unit.js';
import COMMON from '../constants/common.js';
import { formatNumber } from '../utils/format.js';

const OutputView = {
  printOrder(order) {
    Console.print(OUTPUT.title.order);
    Object.entries(order).forEach(([menu, number]) => {
      Console.print(`${menu} ${number}${UNIT.orderNumber}`);
    });
  },

  printBenefits(christmasDiscountedAmount) {
    Console.print(OUTPUT.title.benefit);
    this.printChristmasDiscount(christmasDiscountedAmount);
  },

  printChristmasDiscount(christmasDiscountedAmount) {
    const { benefit } = OUTPUT.content;
    const formattedAmount = this.formatBenefitAmount(christmasDiscountedAmount);

    if (christmasDiscountedAmount) {
      Console.print(`${benefit.christmas} ${formattedAmount}`);
    }
  },

  printSpecialDiscount(specialDiscountedAmount) {
    const { benefit } = OUTPUT.content;
    const formattedAmount = this.formatBenefitAmount(specialDiscountedAmount);

    if (specialDiscountedAmount) {
      Console.print(`${benefit.special} ${formattedAmount}`);
    }
  },

  formatBenefitAmount(amount) {
    const formattedAmount = formatNumber(amount);
    return COMMON.dash + formattedAmount + UNIT.amount;
  },
};

Object.freeze(OutputView);

export default OutputView;
