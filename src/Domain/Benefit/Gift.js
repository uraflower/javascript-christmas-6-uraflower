import BENEFIT_CONDITIONS from '../../constants/benefit/benefitConditions.js';
import GIFT_CONDITIONS from '../../constants/benefit/giftConditions.js';
import EVENT_DATE from '../../constants/date/eventDate.js';

class Gift {
  #giftInfo = null;

  constructor(visitDate, orderManager) {
    if (this.#isGiftTarget(orderManager)) {
      this.#giftInfo = this.#getGift(visitDate, orderManager);
    }
  }

  #isGiftTarget(orderManager) {
    const orderAmount = orderManager.getTotalAmountOfOrder();
    return orderAmount >= BENEFIT_CONDITIONS.minAmountOfOrder;
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

    return matchedCondition ? matchedCondition.gift : null;
  }

  get name() {
    if (!this.#giftInfo) {
      return null;
    }

    return this.#giftInfo.name;
  }

  get number() {
    if (!this.#giftInfo) {
      return null;
    }

    return this.#giftInfo.number;
  }

  getTotalAmountOfGift() {
    if (!this.#giftInfo) {
      return 0;
    }

    const { price, number } = this.#giftInfo;
    return price * number;
  }
}

export default Gift;
