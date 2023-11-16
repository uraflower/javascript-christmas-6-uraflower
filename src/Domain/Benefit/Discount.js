import BENEFIT from '../../constants/benefit/benefit.js';
import EVENT_DATE from '../../constants/date/eventDate.js';
import DISCOUNT from '../../constants/benefit/discount.js';
import TYPE from '../../constants/order/type.js';

class Discount {
  #detail = {};

  constructor() {
    this.#initializeDetail();
  }

  get detail() {
    return this.#detail;
  }

  #initializeDetail() {
    this.#detail[BENEFIT.christmas] = 0;
    this.#detail[BENEFIT.weekday] = 0;
    this.#detail[BENEFIT.weekend] = 0;
    this.#detail[BENEFIT.special] = 0;
  }

  setDiscount(visitDate, orderManager) {
    this.#detail[BENEFIT.christmas] = this.#discountChristmas(visitDate);
    this.#detail[BENEFIT.weekday] = this.#discountWeekday(
      visitDate,
      orderManager,
    );
    this.#detail[BENEFIT.weekend] = this.#discountWeekend(
      visitDate,
      orderManager,
    );
    this.#detail[BENEFIT.special] = this.#discountSpecial(visitDate);
  }

  #discountChristmas(visitDate) {
    const { start, end } = EVENT_DATE.period.christmasEvent;
    const { baseDiscount, offset, discountRatio } = DISCOUNT.christmas;

    if (visitDate.isDateInPeriod(start, end)) {
      return baseDiscount + (visitDate.date - offset) * discountRatio;
    }
    return DISCOUNT.zero;
  }

  #discountWeekday(visitDate, orderManager) {
    if (!visitDate.isWeekend()) {
      const cnt = orderManager.countMenusTypeOf(TYPE.dessert);
      return cnt * DISCOUNT.weekdayRatio;
    }

    return DISCOUNT.zero;
  }

  #discountWeekend(visitDate, orderManager) {
    if (visitDate.isWeekend()) {
      const cnt = orderManager.countMenusTypeOf(TYPE.main);
      return cnt * DISCOUNT.weekendRatio;
    }

    return DISCOUNT.zero;
  }

  #discountSpecial(visitDate) {
    if (visitDate.isStarredDate()) {
      return DISCOUNT.special;
    }

    return DISCOUNT.zero;
  }

  getTotalAmountOfDiscount() {
    const total = Object.values(this.#detail).reduce(
      (acc, amount) => acc + amount,
      0,
    );
    return total;
  }
}

export default Discount;
