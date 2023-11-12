import BENEFIT from '../../constants/benefit.js';
import EVENT_DATE from '../../constants/date/eventDate.js';
import DISCOUNT from '../../constants/discount.js';
import { TYPE } from '../../constants/menu.js';

class Discount {
  #detail;

  constructor(isEligibleForDiscount, visitDate, orderManager) {
    this.#detail = this.#setDiscount(isEligibleForDiscount, visitDate, orderManager);
  }

  get detail() {
    return this.#detail;
  }

  #setDiscount(isEligibleForDiscount, visitDate, orderManager) {
    const detail = {};

    if (isEligibleForDiscount) {
      detail[BENEFIT.christmas] = this.#discountChristmas(visitDate);
      detail[BENEFIT.weekday] = this.#discountWeekday(visitDate, orderManager);
      detail[BENEFIT.weekend] = this.#discountWeekend(visitDate, orderManager);
      detail[BENEFIT.special] = this.#discountSpecial(visitDate);
    }

    return detail;
  }

  #discountChristmas(date) {
    const { start, end } = EVENT_DATE.period.christmasEvent;
    const { baseDiscount, offset, discountRatio } = DISCOUNT.christmas;

    if (date.isDateInPeriod(start, end)) {
      return baseDiscount + (date.date - offset) * discountRatio;
    }
    return DISCOUNT.zero;
  }

  discountWeekday(date, orderManager) {
    const { start, end } = EVENT_DATE.period.otherEvent;
    const { dessert } = TYPE;

    if (!date.isWeekend() && date.isDateInPeriod(start, end)) {
      const cnt = orderManager.countMenusTypeOf(dessert);
      return cnt * DISCOUNT.weekdayRatio;
    }
    return DISCOUNT.zero;
  }

  discountWeekend(date, orderManager) {
    const { start, end } = EVENT_DATE.period.otherEvent;
    const { main } = TYPE;

    if (date.isWeekend() && date.isDateInPeriod(start, end)) {
      const cnt = orderManager.countMenusTypeOf(main);
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
