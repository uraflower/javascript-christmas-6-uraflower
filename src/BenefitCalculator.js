import Discount from './Discount.js';
import BENEFIT from './constants/benefit.js';

const BenefitCalculator = {
  applyDiscount(visitDate, orderManager) {
    const benefit = {};
    const discount = new Discount();

    benefit[BENEFIT.christmas] = discount.discountChristmas(visitDate);
    benefit[BENEFIT.weekday] = discount.discountWeekday(visitDate, orderManager);
    benefit[BENEFIT.weekend] = discount.discountWeekend(visitDate, orderManager);
    benefit[BENEFIT.special] = discount.discountSpecial(visitDate);

    return benefit;
  },
};

Object.freeze(BenefitCalculator);
export default BenefitCalculator;
