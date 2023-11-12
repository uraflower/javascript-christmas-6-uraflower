import OrderManager from './Domain/OrderManager.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';
import VisitDate from './Domain/VisitDate.js';
import tryUntilValid from './utils/tryUntilValid.js';

class App {
  #visitDate;

  #orderManager;

  #totalAmountOfOrder;

  async run() {
    // 방문 날짜 및 메뉴 주문 받기
    await this.#doBeforeCalculateBenefit();
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
