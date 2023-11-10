import COMMON from './constants/common.js';
import ERROR from './constants/message/error.js';
import CustomError from './errors/CustomError.js';
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
      this.#validateDuplication(result, menu);
      result[menu] = number;
    });

    return result;
  }

  #validateDuplication(order, menu) {
    if (Object.hasOwn(order, menu)) {
      throw new CustomError(ERROR.invalidOrder);
    }
  }

}

export default Order;
