import CustomError from '../errors/CustomError.js';
import EVENT_DATE from '../constants/date/eventDate.js';
import ERROR from '../constants/message/error.js';
import { isInRange, isPositiveInteger } from '../utils/validate.js';
import DAY from '../constants/date/day.js';

class VisitDate {
  #visitDate;

  constructor(date) {
    this.#validateDate(date);
    this.#visitDate = new Date(EVENT_DATE.year, EVENT_DATE.month, date);
  }

  #validateDate(date) {
    const { start, end } = EVENT_DATE.period.visitable;

    if (!isPositiveInteger(date) || !isInRange(date, start, end)) {
      throw new CustomError(ERROR.invalidDate);
    }
  }

  get date() {
    return this.#visitDate.getDate();
  }

  isDateInPeriod(start, end) {
    return isInRange(this.date, start, end);
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
