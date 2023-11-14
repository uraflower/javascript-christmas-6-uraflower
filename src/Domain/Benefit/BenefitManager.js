import isSatisfiedBaseConditions from '../../utils/checkBaseConditions.js';
import Discount from './Discount.js';

class BenefitManager {
  #discount;

  constructor() {
    this.#discount = new Discount();
  }

  apply(visitDate, orderManager) {
    if (isSatisfiedBaseConditions(visitDate, orderManager)) {
      this.#discount.setDiscount(visitDate, orderManager);
    }
  }
}

export default BenefitManager;
