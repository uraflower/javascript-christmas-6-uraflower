import InputView from '../View/InputView.js';
import OutputView from '../View/OutputView.js';
import tryUntilValid from '../utils/tryUntilValid.js';
import BenefitManager from './Benefit/BenefitManager.js';
import OrderManager from './OrderManager.js';
import VisitDate from './VisitDate.js';

class EventPlanner {
  #visitDate;

  #orderManager;

  #benefitManager;

  constructor() {
    this.#benefitManager = new BenefitManager();
  }

  async plan() {
    OutputView.printGreeting();

    await this.#takeReservation();
    this.#printReservationInfo();

    this.#benefitManager.applyBenefit(this.#visitDate, this.#orderManager);
    this.#benefitManager.printBenefit(this.#orderManager);
  }

  async #takeReservation() {
    await this.#setVisitDate();
    await this.#setOrderManager();
  }

  #printReservationInfo() {
    OutputView.printGuidePreview(this.#visitDate.date);
    OutputView.printOrderedMenu(this.#orderManager.order);
    OutputView.printTotalAmountOfOrder(
      this.#orderManager.getTotalAmountOfOrder(),
    );
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

export default EventPlanner;
