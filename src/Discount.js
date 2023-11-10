import EVENT_DATE from './constants/date/eventDate.js';
import { isInRange } from './utils/validate.js';

class Discount {
  discountChristmas(date) {
    const { min, max } = EVENT_DATE.period.christmasEvent;
    if (isInRange(date, min, max)) {
      return 1000 + (date - 1) * 100;
    }
    return 0;
  }
}

export default Discount;
