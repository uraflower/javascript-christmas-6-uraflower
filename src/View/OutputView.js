import { Console } from '@woowacourse/mission-utils';
import OUTPUT from '../constants/message/output.js';
import COMMON from '../constants/common.js';
import { formatCount, formatMinusMoney, formatMoney } from '../utils/format.js';

const OutputView = {
  printGreeting() {
    Console.print(OUTPUT.guide.greeting);
  },

  printGuidePreview(date) {
    const { beforeDate, afterDate } = OUTPUT.guide.preview;
    Console.print(beforeDate + date + afterDate);
  },

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

  printGiftMenu(name, number) {
    Console.print(OUTPUT.title.giftMenu);

    if (!name || !number) {
      this.printNone();
      return;
    }
    const cnt = formatCount(number);
    Console.print(name + COMMON.whitespace + cnt);
  },

  printBenefitDetails(benefit) {
    Console.print(OUTPUT.title.benefitDetails);

    if (!benefit) {
      this.printNone();
      return;
    }

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

    const formattedAmount =
      amount === 0 ? formatMoney(amount) : formatMinusMoney(amount);
    Console.print(formattedAmount);
  },

  printTotalAmountToPay(amount) {
    Console.print(OUTPUT.title.totalAmountToPay);

    const formattedAmount = formatMoney(amount);
    Console.print(formattedAmount);
  },

  printBadge(badge) {
    Console.print(OUTPUT.title.badge);

    if (!badge) {
      this.printNone();
      return;
    }

    Console.print(badge);
  },

  printNone() {
    Console.print(OUTPUT.content.none);
  },

  printError(message) {
    Console.print(message);
  },
};

Object.freeze(OutputView);

export default OutputView;
