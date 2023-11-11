const EVENT_DATE = Object.freeze({
  year: 2023,
  month: 11, // 0~11: 1월~12월
  period: Object.freeze({
    visitable: Object.freeze({
      start: 1,
      end: 31,
    }),
    christmasEvent: Object.freeze({
      start: 1,
      end: 25,
    }),
    otherEvent: Object.freeze({
      start: 1,
      end: 31,
    }),
  }),
  starred: Object.freeze([3, 10, 17, 24, 25, 31]),
});

export default EVENT_DATE;
