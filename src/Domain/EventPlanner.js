import InputView from '../View/InputView';
import OutputView from '../View/OutputView';
import tryUntilValid from '../utils/tryUntilValid';
import BenefitManager from './Benefit/BenefitManager.js';
import OrderManager from './OrderManager';
import VisitDate from './VisitDate';

class EventPlanner {
  #visitDate;

  #orderManager;

  #benefitManager;

  constructor() {
    this.#benefitManager = new BenefitManager();
  }

  async plan() {
    await this.#takeReservation();
    this.#printReservationInfo();

    this.#benefitManager.applyBenefit(this.#visitDate, this.#orderManager);
    this.#benefitManager.printBenefit(this.#orderManager);
  }

  #printReservationInfo() {
    OutputView.printOrderedMenu(this.#orderManager.order);
    OutputView.printTotalAmountOfOrder(
      this.#orderManager.getTotalAmountOfOrder(),
    );
  }

  async #takeReservation() {
    OutputView.printGreeting();

    await this.#setVisitDate();
    await this.#setOrderManager();

    OutputView.printGuidePreview(this.#visitDate.date);
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
