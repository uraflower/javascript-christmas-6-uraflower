import COMMON from './constants/common.js';
import { MENU, TYPE } from './constants/menu.js';
import ERROR from './constants/message/error.js';
import CustomError from './errors/CustomError.js';
import { parse } from './utils/format.js';
import { isPositiveInteger } from './utils/validate.js';

class Order {
  #order;

  constructor(order) {
    const parsedOrder = this.#parseOrder(order);
    console.log(parsedOrder);
    this.#validate(parsedOrder);
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

  #validate(order) {
    this.#validateInvalidOrder(order);
    this.#validateDrinkOnlyOrder(order);
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
}

export default Order;
