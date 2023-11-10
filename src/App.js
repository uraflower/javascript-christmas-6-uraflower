import InputView from './View/InputView.js';

class App {
  async run() {
    await InputView.readDate();
  }
}

export default App;
