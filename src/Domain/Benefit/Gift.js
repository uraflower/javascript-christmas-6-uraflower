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
}

export default Gift;
