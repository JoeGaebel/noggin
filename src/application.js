import Event from './event';
import { events as eventFixtures } from './fixtures';

class Application {
  constructor() {
    $(this.onReady.bind(this));
  }

  onReady() {
    this.initializeUI();
    this.bindUI();
    this.populateEvents();
  }

  initializeUI() {
    this.ui = {
      addEvent: $('#add-event'),
      lightbox: $('.lightbox'),
      timeline: $('.timeline')
    };
  }

  bindUI() {
    this.ui.addEvent.click(this.onAddEventClick);
  }

  populateEvents(){
    eventFixtures.forEach(event => {
      let model = new Event(event);
      this.ui.timeline.append(model.render());
    });
  }

  // Events

  onAddEventClick() {
    console.log("button clicked!");
  }
}


module.exports = new Application();
