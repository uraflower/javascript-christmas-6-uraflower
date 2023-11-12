import BenefitCalculator from './Domain/Benefit/BenefitCalculator.js';
import OrderManager from './Domain/OrderManager.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import VisitDate from './Domain/VisitDate.js';
import tryUntilValid from './utils/tryUntilValid.js';

class App {
  #visitDate;

  #orderManager;

  async run() {
    await this.#setVisitDate();
    await this.#setOrderManager();

    OutputView.printOrder(this.#orderManager.order);

    const benefit = BenefitCalculator.applyDiscount(this.#visitDate, this.#orderManager);
    OutputView.printBenefits(benefit);

    const total = BenefitCalculator.getBenefitTotal(benefit);
    OutputView.printTotalBenefit(total);
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
