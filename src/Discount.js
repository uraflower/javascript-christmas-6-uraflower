import EVENT_DATE from './constants/date/eventDate.js';
import DISCOUNT from './constants/discount.js';
import { TYPE } from './constants/menu.js';

class Discount {
  discountChristmas(date) {
    const { start, end } = EVENT_DATE.period.christmasEvent;
    const { baseDiscount, offset, discountRatio } = DISCOUNT.christmas;

    if (date.isDateInPeriod(start, end)) {
      return baseDiscount + (date.date - offset) * discountRatio;
    }
    return DISCOUNT.zero;
  }

  discountWeekday(date, order) {
    const { start, end } = EVENT_DATE.period.otherEvent;
    const { dessert } = TYPE;

    if (!date.isWeekend() && date.isDateInPeriod(start, end)) {
      const cnt = order.countMenusTypeOf(dessert);
      return cnt * DISCOUNT.weekdayRatio;
    }
    return DISCOUNT.zero;
  }

  discountWeekend(date, order) {
    const { start, end } = EVENT_DATE.period.otherEvent;
    const { main } = TYPE;

    if (date.isWeekend() && date.isDateInPeriod(start, end)) {
      const cnt = order.countMenusTypeOf(main);
      return cnt * DISCOUNT.weekendRatio;
    }
    return DISCOUNT.zero;
  }

  discountSpecial(date) {
    const { start, end } = EVENT_DATE.period.otherEvent;

    if (date.isStarredDate() && date.isDateInPeriod(start, end)) {
      return DISCOUNT.special;
    }
    return DISCOUNT.zero;
  }
}

export default Discount;
