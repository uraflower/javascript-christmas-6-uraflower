import GIFT_CONDITIONS from '../../constants/giftConditions.js';

class Gift {
  #gift;

  constructor(totalAmountOfOrder) {
    this.#gift = this.#getGift(totalAmountOfOrder);
  }

  #getGift(amount) {
    let matchedGift = null;

    GIFT_CONDITIONS.forEach((currentCondition) => {
      if (amount >= currentCondition.minAmountForGift) {
        const { gift, number } = currentCondition;
        matchedGift = { gift, number };
      }
    });

    return matchedGift;
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
