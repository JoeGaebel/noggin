import moment from 'moment';
import Event from './event';
import Day from './day';
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
    let events = eventFixtures.map(fixture => {
      return new Event(fixture);
    });

    events.sort((a, b) => { return a.date - b.date; });
    const today = moment();
    const tomorrow = moment().add(1,'days');

    let lastDate = moment("1970");

    events.forEach(event => {
      if (event.date > lastDate) {
        let day;

        if (event.date.isSame(today, 'day')) { day = new Day({ text: 'Today' }) }
        else if (event.date.isSame(tomorrow, 'day')) { day = new Day({ text: 'Tomorrow' }) }
        else { day = new Day({ text: event.date.format('dddd') }) }

        this.ui.timeline.append(day.render());
        lastDate = event.date;
      }
      this.ui.timeline.append(event.render());
    })
  }

  // Events

  onAddEventClick() {
    console.log("button clicked!");
  }
}


module.exports = new Application();
