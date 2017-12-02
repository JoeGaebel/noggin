import moment from 'moment';
import Person from './person';
import './event.less';

export default class Event {
  constructor(options = {}) {
    const { date, type, title, description, author, personOptions } = options;

    this.date = moment(date);
    this.type = type || 'appointment';
    this.title = title || type;
    this.description = description || '';
    this.author = author;
    this.person = new Person(personOptions);
  }

  getIcon() {
    if (this.type === 'meeting') {
      return `<i class="fa fa-home" aria-hidden="true"></i>`;
    } else {
      return `<i class="fa fa-calendar" aria-hidden="true"></i>`;
    }
  }

  getTime() { return this.date.format("HH:mm"); }
  getDate() { return this.date.format("DD"); }
  getDay() { return this.date.format("dddd"); }
  getMonthYear() { return this.date.format("MMMM YYYY"); }
  getType() {
    return this.type.charAt(0).toUpperCase() + this.type.slice(1);
  }

  render() {
    return `
      <div class="event">
        <div class="left-panel">
          <div class="type">${this.getType()}</div>
          <div class="icon-time">
            <div class="event-icon">${this.getIcon()}</div>
            <div class="time">${this.getTime()}</div>
          </div>
        </div>
        
        <div class="dot">
          <i class="fa fa-circle" aria-hidden="true"></i> 
        </div>
        
        <div class="right-panel">
          <div class="container">
            <div class="date-display">
              <div class="date">${this.getDate()}</div>
              <div class="day-month-year">
                <div class="day">${this.getDay()}</div>
                <div class="month-year">${this.getMonthYear()}</div>
              </div>
            </div>
          
            <div class="title">
               <i class="title-icon fa fa-info-circle" aria-hidden="true"></i>
              <div class="title-text">${this.title}</div>
            </div>
            <div class="description">
              <i class="description-icon fa fa-pencil" aria-hidden="true"></i>
              <div class="description-text">${this.description}</div>
            </div>
          </div>
          <div class="author">by ${this.author}</div>
        </div>
      </div> 
    `
  }
};
