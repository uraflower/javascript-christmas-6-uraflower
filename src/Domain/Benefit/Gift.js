import GIFT_CONDITIONS from '../../constants/giftConditions.js';

const Gift = {
  getGift(orderAmount) {
    let matchedGift = null;

    GIFT_CONDITIONS.forEach((currentCondition) => {
      if (orderAmount >= currentCondition.minAmountForGift) {
        const { gift, number } = currentCondition;
        matchedGift = [gift, number];
      }
    });

    return matchedGift;
  },
};

Object.freeze(Gift);
export default Gift;
