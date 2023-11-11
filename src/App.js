import BenefitCalculator from './BenefitCalculator.js';
import OrderManager from './OrderManager.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import VisitDate from './VisitDate.js';

class App {
  #visitDate;

  #orderManager;

  async run() {
    this.#visitDate = await this.#getVisitDate();
    this.#orderManager = await this.#getOrderManager();

    OutputView.printOrder(this.#orderManager.order);

    const benefit = BenefitCalculator(this.#visitDate, this.#orderManager);
    OutputView.printBenefits(benefit);
  }

  async #getVisitDate() {
    const dateInput = await InputView.readDate();
    const visitDate = new VisitDate(dateInput);
    return visitDate;
  }

  async #getOrderManager() {
    const orderInput = await InputView.readOrder();
    const orderManager = new OrderManager(orderInput);
    return orderManager;
  }
}

export default App;
