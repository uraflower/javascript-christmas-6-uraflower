import OutputView from '../../View/OutputView.js';
import BENEFIT from '../../constants/benefit/benefit.js';
import isSatisfiedBaseConditions from '../../utils/checkBaseConditions.js';
import Badge from './Badge.js';
import Discount from './Discount.js';
import Gift from './Gift.js';

class BenefitManager {
  #discount;

  #gift;

  #badge;

  constructor() {
    this.#discount = new Discount();
    this.#gift = new Gift();
  }

  applyBenefit(visitDate, orderManager) {
    if (isSatisfiedBaseConditions(visitDate, orderManager)) {
      this.#discount.setDiscount(visitDate, orderManager);
      this.#applyGift(orderManager);
      this.#applyBadge();
    }
  }

  #applyGift(orderManager) {
    const orderAmount = orderManager.getTotalAmountOfOrder();
    this.#gift.setGift(orderAmount);
  }

  #applyBadge() {
    const benefitAmount = this.#getTotalAmountOfBenefit();
    this.#badge = Badge.getBadge(benefitAmount);
  }

  #getBenefitDetails() {
    const eachBenefit = {
      ...this.#discount.detail,
      [BENEFIT.gift]: this.#gift.getTotalAmountOfGift(),
    };

    const eachAmount = Object.values(eachBenefit);
    if (eachAmount.every((amount) => amount === 0)) {
      return null;
    }

    return eachBenefit;
  }

  printBenefit(orderManager) {
    OutputView.printGiftMenu(this.#gift.name, this.#gift.number);
    OutputView.printBenefitDetails(this.#getBenefitDetails());
    OutputView.printTotalAmountOfBenefit(this.#getTotalAmountOfBenefit());
    OutputView.printTotalAmountToPay(this.#getTotalAmountToPay(orderManager));
    OutputView.printBadge(this.#badge);
  }

  #getTotalAmountOfBenefit() {
    const discountAmount = this.#discount.getTotalAmountOfDiscount();
    const giftAmount = this.#gift.getTotalAmountOfGift();

    const benefitAmount = discountAmount + giftAmount;
    return benefitAmount;
  }

  #getTotalAmountToPay(orderManager) {
    const orderAmount = orderManager.getTotalAmountOfOrder();

    const totalAmountToPay =
      orderAmount - this.#discount.getTotalAmountOfDiscount();
    return totalAmountToPay;
  }
}

export default BenefitManager;
