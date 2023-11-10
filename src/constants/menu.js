const TYPE = Object.freeze({
  appetizer: 'appetizer',
  main: 'main',
  dessert: 'dessert',
  drink: 'drink',
});

const MENU = Object.freeze({
  양송이수프: Object.freeze({ type: TYPE.appetizer, price: 6000 }),
  타파스: Object.freeze({ type: TYPE.appetizer, price: 5500 }),
  시저샐러드: Object.freeze({ type: TYPE.appetizer, price: 8000 }),

  티본스테이크: Object.freeze({ type: TYPE.main, price: 55000 }),
  바비큐립: Object.freeze({ type: TYPE.main, price: 54000 }),
  해산물파스타: Object.freeze({ type: TYPE.main, price: 35000 }),
  크리스마스파스타: Object.freeze({ type: TYPE.main, price: 25000 }),

  초코케이크: Object.freeze({ type: TYPE.dessert, price: 15000 }),
  아이스크림: Object.freeze({ type: TYPE.dessert, price: 5000 }),

  제로콜라: Object.freeze({ type: TYPE.drink, price: 3000 }),
  레드와인: Object.freeze({ type: TYPE.drink, price: 60000 }),
  샴페인: Object.freeze({ type: TYPE.drink, price: 25000 }),
});

export { TYPE, MENU };
