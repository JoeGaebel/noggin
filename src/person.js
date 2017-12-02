import './person.less';

export default class Person {
  constructor(options = {}) {
    const { name, email, number, imageURL } = options;

    this.name = name;
    this.email = email;
    this.number = number;
    this.imageURL = imageURL;
  }

  render() {
    return `
      <div class="person">
        <div class="picture">
         <img src="${this.imageURL}"/>
        </div>
        <div class="name-email-number">
           <div class="name">${this.name}</div>
           <div class="email">${this.email}</div>
           <div class="number">${this.number}</div>
        </div>
      </div>
    `
  }
}

