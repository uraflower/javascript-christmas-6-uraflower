import COMMON from './constants/common.js';
import { parse } from './utils/format.js';

class Order {
  #order;

  constructor(order) {
    const parsedOrder = this.#parseOrder(order);
  }

  #parseOrder(order) {
    const result = {};
    const eachOrder = parse(order, COMMON.comma);

    eachOrder.forEach((menuWithNumber) => {
      const [menu, number] = parse(menuWithNumber, COMMON.dash);
      result[menu] = number;
    });

    return result;
  }
}

export default Order;
