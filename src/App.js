import OrderManager from './Domain/OrderManager.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import VisitDate from './Domain/VisitDate.js';
import tryUntilValid from './utils/tryUntilValid.js';
import Gift from './Domain/Benefit/Gift.js';
import Discount from './Domain/Benefit/Discount.js';
import ORDER from './constants/order.js';

class App {
  #visitDate;

  #orderManager;

  #discount;

  #gift;

  #totalAmountOfOrder;

  #totalAmountOfBenefit;

  async run() {
    // 방문 날짜 및 메뉴 주문 받기
    await this.#doBeforeCalculateBenefit();

    // 혜택 적용
    this.#applyBenefit();
  }

  async #doBeforeCalculateBenefit() {
    await this.#setVisitDate();
    await this.#setOrderManager();
    this.#setTotalAmountOfOrder();
    this.#printBeforeCalculateBenefit();
  }

  #printBeforeCalculateBenefit() {
    OutputView.printOrderedMenu(this.#orderManager.order);
    OutputView.printTotalAmountOfOrder(this.#totalAmountOfOrder);
  }

  #setTotalAmountOfOrder() {
    this.#totalAmountOfOrder = this.#orderManager.getTotalAmountOfOrder();
  }

  #isEligibleForBenefit() {
    return this.#totalAmountOfOrder >= ORDER.minAmountForBenefit;
  }

  #applyBenefit() {
    const isEligibleForBenefit = this.#isEligibleForBenefit();
    this.#discount = new Discount(isEligibleForBenefit, this.#visitDate, this.#orderManager);
    this.#gift = new Gift(this.#totalAmountOfOrder);
    this.#setTotalAmountOfBenefit();
  }

  #setTotalAmountOfBenefit() {
    const totalAmountOfDiscount = this.#discount.getTotalAmountOfDiscount();
    const totalAmountOfGift = this.#gift.getTotalAmountOfGift();
    this.#totalAmountOfBenefit = totalAmountOfDiscount + totalAmountOfGift;
  }

  async #setVisitDate() {
    await tryUntilValid(async () => {
      const dateInput = await InputView.readDate();
      this.#visitDate = new VisitDate(dateInput);
    });
  }

  async #setOrderManager() {
    await tryUntilValid(async () => {
      const orderInput = await InputView.readOrder();
      this.#orderManager = new OrderManager(orderInput);
    });
  }
}

export default App;
