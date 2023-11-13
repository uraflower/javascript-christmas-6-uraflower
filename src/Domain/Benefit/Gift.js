import GIFT_CONDITIONS from '../../constants/giftConditions.js';

class Gift {
  #gift;

  constructor(totalAmountOfOrder) {
    this.#gift = this.#getGift(totalAmountOfOrder);
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
    if (!this.#gift) {
      return null;
    }

    const { gift, number } = this.#gift;
    return { menu: gift.name, number };
  }

  getTotalAmountOfGift() {
    if (!this.#gift) {
      return 0;
    }

    const { gift, number } = this.#gift;
    return gift.price * number;
  }
}

export default Gift;
