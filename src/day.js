import './day.less';

export default class Day {
  constructor(options = {}) {
    this.text = options.text;
  }

  render() {
    return `
      <div class="day">
        <div class="day-text">${this.text}</div>
      </div>
    `
  }
}

