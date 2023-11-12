import COMMON from '../constants/common.js';
import { MENU, TYPE } from '../constants/menu.js';
import ERROR from '../constants/message/error.js';
import ORDER from '../constants/order.js';
import CustomError from '../errors/CustomError.js';
import { split } from '../utils/format.js';
import { isPositiveInteger } from '../utils/validate.js';

class OrderManager {
  #order;

  constructor(order) {
    const parsedOrder = this.#parse(order);
    this.#validateAfterParsing(parsedOrder);
    this.#order = parsedOrder;
  }

  get order() {
    return this.#order;
  }

  #parse(order) {
    const result = {};
    const eachOrder = split(order, COMMON.comma);

    eachOrder.forEach((menuWithNumber) => {
      const [menu, number] = split(menuWithNumber, COMMON.dash);
      this.#validateBeforeAssign(result, menu, number);
      result[menu] = Number(number);
    });

    return result;
  }

  #validateBeforeAssign(order, menu, number) {
    if (
      !isPositiveInteger(number) ||
      !Object.hasOwn(MENU, menu) ||
      Object.hasOwn(order, menu)
    ) {
      throw new CustomError(ERROR.invalidOrder);
    }
  }

  #validateAfterParsing(order) {
    this.#validateDrinkOnlyOrder(order);
    this.#validateMaxMenuLimit(order);
  }

  #validateDrinkOnlyOrder(order) {
    const orderedMenus = Object.keys(order);
    const drinkOrders = orderedMenus.filter(
      (menu) => MENU[menu].type === TYPE.drink,
    );

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

  countMenusTypeOf(type) {
    const cnt = Object.entries(this.#order).reduce((acc, [menu, number]) => {
      if (MENU[menu].type === type) {
        return acc + number;
      }
      return acc + 0;
    }, 0);
    return cnt;
  }

  getTotalAmountOfOrder() {
    const total = Object.entries(this.#order).reduce(
      (acc, [menu, number]) => acc + MENU[menu].price * number,
      0,
    );
    return total;
  }
}

export default OrderManager;
