import { Console } from '@woowacourse/mission-utils';
import OUTPUT from '../constants/message/output.js';
import COMMON from '../constants/common.js';
import { formatCount, formatMinusMoney, formatMoney } from '../utils/format.js';

const OutputView = {
  printOrder(order) {
    Console.print(OUTPUT.title.order);

    Object.entries(order).forEach(([menu, number]) => {
      const cnt = formatCount(number);
      Console.print(menu + COMMON.whitespace + cnt);
    });
  },

  printOrderTotal(amount) {
    Console.print(OUTPUT.title.totalOrder);

    const formattedAmount = formatMoney(amount);
    Console.print(formattedAmount);
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
    const formattedAmount = formatMinusMoney(amount);

    Console.print(benefit[type] + COMMON.whitespace + formattedAmount);
  },

  printTotalBenefit(amount) {
    Console.print(OUTPUT.title.totalBenefit);

    const formattedAmount = formatMinusMoney(amount);
    Console.print(formattedAmount);
  },

  printError(message) {
    Console.print(message);
  },
};

Object.freeze(OutputView);

export default OutputView;
