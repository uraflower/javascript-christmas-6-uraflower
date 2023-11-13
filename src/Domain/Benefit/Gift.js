import BENEFIT_CONDITIONS from '../../constants/benefit/benefitConditions.js';
import GIFT_CONDITIONS from '../../constants/benefit/giftConditions.js';
import EVENT_DATE from '../../constants/date/eventDate.js';

class Gift {
  #isGiftTarget = false;

  #giftInfo = null;

  constructor(visitDate, orderManager) {
    this.#checkEligibility(orderManager);
    if (this.#isGiftTarget) {
      this.#giftInfo = this.#getGift(visitDate, orderManager);
    }
  }

  #checkEligibility(orderManager) {
    const orderAmount = orderManager.getTotalAmountOfOrder();
    this.#isGiftTarget = orderAmount >= BENEFIT_CONDITIONS.minAmountOfOrder;
  }

  #isEventPeriod(visitDate) {
    const { start, end } = EVENT_DATE.period.otherEvent;
    return visitDate.isDateInPeriod(start, end);
  }

  #getGift(visitDate, orderManager) {
    if (!this.#isEventPeriod(visitDate)) {
      return null;
    }

    const amount = orderManager.getTotalAmountOfOrder();
    const matchedCondition = GIFT_CONDITIONS.find(
      (currentCondition) => amount >= currentCondition.minAmountOfOrder,
    );

    if (!matchedCondition) {
      return null;
    }

    const { gift, number } = matchedCondition;
    return { gift, number };
  }

  getGiftMenu() {
    if (!this.#giftInfo) {
      return null;
    }

    const { gift, number } = this.#giftInfo;
    return { menu: gift.name, number };
  }

  getTotalAmountOfGift() {
    if (!this.#giftInfo) {
      return 0;
    }

    const { gift, number } = this.#giftInfo;
    return gift.price * number;
  }
}

export default Gift;
