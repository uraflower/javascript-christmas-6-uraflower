import Discount from './Discount.js';
import InputView from './View/InputView.js';
import OutputView from './View/OutputView.js';

class App {
  async run() {
    const day = await InputView.readDate();
    const discount = new Discount();
    const christmasDiscountedAmount = discount.discountChristmas(day);
    OutputView.printBenefits(christmasDiscountedAmount);
  }
}

export default App;
