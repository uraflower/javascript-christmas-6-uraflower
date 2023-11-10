const DISCOUNT = Object.freeze({
  zero: 0,
  christmas: Object.freeze({
    baseDiscount: 1000,
    offset: 1,
    discountRatio: 100,
  }),
  special: 1000,
});

export default DISCOUNT;
