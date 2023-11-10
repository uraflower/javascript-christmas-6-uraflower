import CustomError from './errors/CustomError.js';
import COMMON from './constants/common.js';
import EVENT_DATE from './constants/date/eventDate.js';
import ERROR from './constants/message/error.js';
import {
  isEmpty, isInRange, isInteger,
} from './utils/validate.js';

class VisitDate {
  #visitDate;

  constructor(date) {
    this.#validateDate(date);
    this.#visitDate = new Date(EVENT_DATE.year, EVENT_DATE.month, date);
  }

  #validateDate(date) {
    const { min, max } = EVENT_DATE.period.visitable;

    if (
      isEmpty(date) ||
      date.includes(COMMON.whitespace) ||
      date.includes(COMMON.dot) ||
      !isInteger(date) ||
      !isInRange(date, min, max)
    ) {
      throw new CustomError(ERROR.invalidDate);
    }
  }

  isInRange(min, max) {
    return isInRange(this.#visitDate.getDate(), min, max);
  }

  isStarredDate() {
    return EVENT_DATE.starred.includes(this.getDate());
  }
}

export default VisitDate;
