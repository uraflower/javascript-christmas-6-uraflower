import EVENT_DATE from './constants/date/eventDate.js';

class VisitDate extends Date {
  constructor(date) {
    super(EVENT_DATE.year, EVENT_DATE.month, date);
  }
}

export default VisitDate;
