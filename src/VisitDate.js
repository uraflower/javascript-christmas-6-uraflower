import CustomError from './errors/CustomError.js';
import COMMON from './constants/common.js';
import EVENT_DATE from './constants/date/eventDate.js';
import ERROR from './constants/message/error.js';
import {
  isEmpty, isInRange, isInteger,
} from './utils/validate.js';
import DAY from './constants/date/day.js';

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

  get date() {
    return this.#visitDate.getDate();
  }

  isDateInRange(min, max) {
    return isInRange(this.date, min, max);
  }

  isWeekend() {
    const day = this.#visitDate.getDay();
    return day === DAY.friday || day === DAY.saturday;
  }

  isStarredDate() {
    return EVENT_DATE.starred.includes(this.date);
  }
}

export default VisitDate;
