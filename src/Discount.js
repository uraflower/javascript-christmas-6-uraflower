class Discount {
  discountChristmas(day) {
    if (day >= 1 && day <= 25) {
      return 1000 + (day - 1) * 100;
    }
    return 0;
  }
}

export default Discount;
