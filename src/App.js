import Discount from './Discount.js';
import InputView from './View/InputView.js';

class App {
  async run() {
    const day = await InputView.readDate();
    const discount = new Discount();
    const christmasDiscountedAmount = discount.discountChristmas(day);
  }
}

export default App;
