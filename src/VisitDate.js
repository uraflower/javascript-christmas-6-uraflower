import EVENT_DATE from './constants/date/eventDate.js';

class VisitDate extends Date {
  constructor(date) {
    super(EVENT_DATE.year, EVENT_DATE.month);
    this.#validateDate(date);
    this.setDate(date);
  }

  #validateDate(date) {
    if (this.isIncludeDot(date)) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }

    if (!Number.isInteger(Number(date))) {
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  }

  isIncludeDot(date) {
    if (date.constructor === String) {
      return date.includes('.');
    }
    return false;
  }
}

export default VisitDate;
