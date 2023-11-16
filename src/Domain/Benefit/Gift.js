import GIFT_CONDITIONS from '../../constants/benefit/giftConditions.js';

class Gift {
  #giftInfo;

  constructor() {
    this.#giftInfo = null;
  }

  setGift(amount) {
    const matchedCondition = GIFT_CONDITIONS.find(
      (currentCondition) => amount >= currentCondition.minAmountOfOrder,
    );

    this.#giftInfo = matchedCondition ? matchedCondition.gift : null;
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
