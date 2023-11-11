import OutputView from '../View/OutputView.js';

async function tryUntilValid(callback) {
  while (true) {
    try {
      await callback();
      break;
    } catch (error) {
      OutputView.printError(error.message);
    }
  }
}

export default tryUntilValid;
