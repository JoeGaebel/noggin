import moment from 'moment';
import Event from './event';
import Day from './day';
import './style.less'
import { events as eventFixtures } from './fixtures';

class Application {
  constructor() {
    $(this.onReady.bind(this));
  }

  onReady() {
    this.initializeUI();
    this.bindUI();

    this.events = eventFixtures.map(fixture => {
      return new Event(fixture);
    });

    this.renderEvents();
    this.resetInputs();
  }

  initializeUI() {
    this.ui = {
      addEvent: $('#add-event'),
      lightbox: $('.lightbox'),
      timeline: $('.timeline'),
      createEvent: $('#create-event'),
      dateInput: $('.date-input'),
      titleInput: $('.title-input'),
      typeInput: $('.type-input'),
      descriptionInput: $('.description-input'),
      closeLightbox: $('#close-lightbox'),
      hidable: $('.hidable'),
    };

    this.textInputs = [
      this.ui.titleInput, this.ui.descriptionInput,
    ]
  }

  bindUI() {
    this.ui.addEvent.click(this.onAddEventClick.bind(this));
    this.ui.createEvent.click(this.onCreateEventClick.bind(this));
    this.ui.closeLightbox.click(this.onCloseLightboxClick.bind(this));
  }

  renderEvents(){
    this.events.sort((a, b) => { return a.date - b.date; });
    const today = moment();
    const tomorrow = moment().add(1,'days');

    let lastDate = moment("1970");

    this.events.forEach(event => {
      if (event.date.isAfter(lastDate, 'day')) {
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

  resetInputs() {
    this.textInputs.forEach(input => {
      input.val('');
    });

    this.ui.typeInput.prop('selectedIndex', 0);

    const today = moment().format("YYYY-MM-DDTHH:mm").toString();
    this.ui.dateInput.attr('value', today);
  }

  addEvent(event) {
    this.events.push(event);
    this.ui.timeline.empty();
    this.renderEvents();
  }

  openLightbox() {
    this.ui.lightbox.css('display', 'flex');
    this.ui.hidable.css('opacity', 0.2);
  }

  closeLightbox() {
    this.ui.lightbox.css('display', 'none');
    this.ui.hidable.css('opacity', 1);
  }

  // Events

  onAddEventClick() {
    this.resetInputs();
    this.openLightbox();
  }

  onCreateEventClick() {
    const options = {
      date: this.ui.dateInput.val(),
      type: this.ui.typeInput.val(),
      title: this.ui.titleInput.val(),
      description: this.ui.descriptionInput.val(),
      author: 'Joe Gaebel'
    };

    const event = new Event(options);
    this.addEvent(event);
    this.closeLightbox()
  }

  onCloseLightboxClick() {
    this.closeLightbox();
  }
}


module.exports = new Application();
