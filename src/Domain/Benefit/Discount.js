import BENEFIT from '../../constants/benefit/benefit.js';
import EVENT_DATE from '../../constants/date/eventDate.js';
import DISCOUNT from '../../constants/benefit/discount.js';
import TYPE from '../../constants/order/type.js';
import BENEFIT_CONDITIONS from '../../constants/benefit/benefitConditions.js';

class Discount {
  #detail = {};

  constructor(visitDate, orderManager) {
    if (this.#isDiscountTarget(orderManager)) {
      this.#setDiscount(visitDate, orderManager);
    }
  }

  get detail() {
    return this.#detail;
  }

  #isDiscountTarget(orderManager) {
    const orderAmount = orderManager.getTotalAmountOfOrder();
    return orderAmount >= BENEFIT_CONDITIONS.minAmountOfOrder;
  }

  #setDiscount(visitDate, orderManager) {
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
    const { start, end } = EVENT_DATE.period.otherEvent;
    const { dessert } = TYPE;

    if (!visitDate.isWeekend() && visitDate.isDateInPeriod(start, end)) {
      const cnt = orderManager.countMenusTypeOf(dessert);
      return cnt * DISCOUNT.weekdayRatio;
    }
    return DISCOUNT.zero;
  }

  #discountWeekend(visitDate, orderManager) {
    const { start, end } = EVENT_DATE.period.otherEvent;
    const { main } = TYPE;

    if (visitDate.isWeekend() && visitDate.isDateInPeriod(start, end)) {
      const cnt = orderManager.countMenusTypeOf(main);
      return cnt * DISCOUNT.weekendRatio;
    }
    return DISCOUNT.zero;
  }

  #discountSpecial(visitDate) {
    const { start, end } = EVENT_DATE.period.otherEvent;

    if (visitDate.isStarredDate() && visitDate.isDateInPeriod(start, end)) {
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
