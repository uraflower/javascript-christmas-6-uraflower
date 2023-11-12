import { Console } from '@woowacourse/mission-utils';
import OUTPUT from '../constants/message/output.js';
import COMMON from '../constants/common.js';
import { formatCount, formatMinusMoney, formatMoney } from '../utils/format.js';

const OutputView = {
  printOrderedMenu(order) {
    Console.print(OUTPUT.title.orderedMenu);

    Object.entries(order).forEach(([menu, number]) => {
      const cnt = formatCount(number);
      Console.print(menu + COMMON.whitespace + cnt);
    });
  },

  printTotalAmountOfOrder(amount) {
    Console.print(OUTPUT.title.totalAmountOfOrder);

    const formattedAmount = formatMoney(amount);
    Console.print(formattedAmount);
  },

  printBenefitDetails(benefit) {
    Console.print(OUTPUT.title.benefitDetails);

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

  printTotalAmountOfBenefit(amount) {
    Console.print(OUTPUT.title.totalAmountOfBenefit);

    const formattedAmount = formatMinusMoney(amount);
    Console.print(formattedAmount);
  },

  printError(message) {
    Console.print(message);
  },
};

Object.freeze(OutputView);

export default OutputView;
