import GIFT_CONDITIONS from '../../constants/benefit/giftConditions.js';

class Gift {
  #giftInfo;

  constructor(totalAmountOfOrder) {
    this.#giftInfo = this.#getGift(totalAmountOfOrder);
  }

  #getGift(amount) {
    const matchedCondition = GIFT_CONDITIONS.find(
      (currentCondition) => amount >= currentCondition.minAmountForGift,
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
