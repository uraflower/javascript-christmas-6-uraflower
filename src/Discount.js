import EVENT_DATE from './constants/date/eventDate.js';
import DISCOUNT from './constants/discount.js';

class Discount {
  discountChristmas(date) {
    const { min, max } = EVENT_DATE.period.christmasEvent;
    const { baseDiscount, offset, discountRatio } = DISCOUNT.christmas;

    if (date.isDateInRange(min, max)) {
      return baseDiscount + (date.date - offset) * discountRatio;
    }
    return DISCOUNT.zero;
  }

  discountSpecial(date) {
    const { min, max } = EVENT_DATE.period.otherEvent;

    if (date.isStarredDate() && date.isDateInRange(min, max)) {
      return DISCOUNT.special;
    }
    return DISCOUNT.zero;
  }
}

export default Discount;
