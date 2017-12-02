import './day.less';

export default class Day {
  constructor(options = {}) {
    this.text = options.text;
  }

  render() {
    return `
      <div class="day-marker">
        <div class="container">
          <div class="text">${this.text}</div>
        </div>
      </div>
    `
  }
}

