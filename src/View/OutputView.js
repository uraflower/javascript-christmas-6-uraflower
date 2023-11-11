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

  printBenefits(benefit) {
    Console.print(OUTPUT.title.benefit);
    Object.entries(benefit).forEach(([type, amount]) => {
      if (amount) {
        this.printEachBenefit(type, amount);
      }
    });
  },

  printEachBenefit(type, amount) {
    const { benefit } = OUTPUT.content;
    const formattedAmount = this.formatBenefitAmount(amount);

    Console.print(`${benefit[type]} ${formattedAmount}`);
  },

  formatBenefitAmount(amount) {
    const formattedAmount = formatNumber(amount);
    return COMMON.dash + formattedAmount + UNIT.amount;
  },

  printError(message) {
    Console.print(message);
  },
};

Object.freeze(OutputView);

export default OutputView;
