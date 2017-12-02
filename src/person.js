export default class Person {
  constructor(options = {}) {
    const { name, email, number, imageURL } = options;

    this.name = name;
    this.email = email;
    this.number = number;
    this.imageURL = imageURL;
  }
}
