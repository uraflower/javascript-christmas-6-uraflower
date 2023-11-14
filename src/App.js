import EventPlanner from './Domain/EventPlanner.js';

class App {
  async run() {
    const eventPlanner = new EventPlanner();
    await eventPlanner.plan();
  }
}

export default App;
