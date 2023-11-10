import CustomError from './errors/CustomError.js';
import COMMON from './constants/common.js';
import EVENT_DATE from './constants/date/eventDate.js';
import ERROR from './constants/message/error.js';
import {
  isEmpty, isInRange, isInteger, isIncludes,
} from './utils/validate.js';

class VisitDate extends Date {
  constructor(date) {
    super(EVENT_DATE.year, EVENT_DATE.month);
    this.#validateDate(date);
    this.setDate(date);
  }

  #validateDate(date) {
    if (
      isEmpty(date) ||
      isIncludes(date, COMMON.whitespace) ||
      isIncludes(date, COMMON.dot) ||
      !isInteger(Number(date)) ||
      !isInRange(Number(date), EVENT_DATE.minDate, EVENT_DATE.maxDate)
    ) {
      throw new CustomError(ERROR.invalidDate);
    }
  }
}

export default VisitDate;
