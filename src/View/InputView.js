import { Console } from '@woowacourse/mission-utils';
import INPUT from '../constants/message/input.js';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(INPUT.date);
    return input;
  },

  async readOrder() {
    const input = await Console.readLineAsync(INPUT.order);
    return input;
  },
};

Object.freeze(InputView);

export default InputView;
