import COMMON from './constants/common.js';
import { MENU, TYPE } from './constants/menu.js';
import ERROR from './constants/message/error.js';
import ORDER from './constants/order.js';
import CustomError from './errors/CustomError.js';
import { split } from './utils/format.js';
import { isPositiveInteger } from './utils/validate.js';

class Order {
  #order;

  constructor(order) {
    const parsedOrder = this.#parse(order);
    this.#validateAfterParsing(parsedOrder);
  }

  #parse(order) {
    const result = {};
    const eachOrder = split(order, COMMON.comma);

    eachOrder.forEach((menuWithNumber) => {
      const [menu, number] = split(menuWithNumber, COMMON.dash);
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

  #validateAfterParsing(order) {
    this.#validateInvalidOrder(order);
    this.#validateDrinkOnlyOrder(order);
    this.#validateMaxMenuLimit(order);
  }

  #validateInvalidOrder(order) {
    Object.entries(order).forEach(([menu, number]) => {
      if (!Object.hasOwn(MENU, menu) ||
        !isPositiveInteger(number)) {
        throw new CustomError(ERROR.invalidOrder);
      }
    });
  }

  #validateDrinkOnlyOrder(order) {
    const orderedMenus = Object.keys(order);
    const drinkOrders = orderedMenus.filter((menu) => MENU[menu].type === TYPE.drink);

    if (orderedMenus.length === drinkOrders.length) {
      throw new CustomError(ERROR.drinkOnlyOrder);
    }
  }

  #validateMaxMenuLimit(order) {
    const eachNumberOfMenus = Object.values(order);
    const sum = eachNumberOfMenus.reduce((acc, number) => acc + number, 0);

    if (sum > ORDER.maxMenuLimit) {
      throw new CustomError(ERROR.maxMenuLimit);
    }
  }
}

export default Order;
