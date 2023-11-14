import BENEFIT_CONDITIONS from '../constants/benefit/benefitConditions.js';
import EVENT_DATE from '../constants/date/eventDate.js';

function isEventPeriod(visitDate) {
  const { start, end } = EVENT_DATE.period.otherEvent;
  return visitDate.isDateInPeriod(start, end);
}

function isSatisfiedOrderAmount(orderManager) {
  const orderAmount = orderManager.getTotalAmountOfOrder();
  return orderAmount >= BENEFIT_CONDITIONS.minAmountOfOrder;
}

function isSatisfiedBaseConditions(visitDate, orderManager) {
  return isEventPeriod(visitDate) && isSatisfiedOrderAmount(orderManager);
}

export default isSatisfiedBaseConditions;
