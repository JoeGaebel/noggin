import moment from 'moment';
const today = moment();
const tomorrow = moment().add(1,'days');
const nextDay = moment().add(2,'days');

export const people = {
  andrew: {
    name: "Andrew Huth",
    email: "ahuth@gmail.com",
    number: "(415) 657-1111",
    imageURL: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAQPAAAAJGFiNjQ5ODNiLTQyNmQtNGVhZS1iODlkLTdiZDA5YzNjZWJlOA.jpg"
  }
};

export const events = [
  {
    date: today,
    type: "appointment",
    title: "My birthday",
    description: "A few friends and I are heading to the bar to celebrate. El Rio!",
    author: "Joe Gaebel",
  },
  {
    date: today.add(1, 'hour'),
    type: "appointment",
    title: "Code like crazy",
    description: "Lets go!",
    author: "Joe Gaebel",
  },
  {
    date: tomorrow.add(1, 'hour'),
    type: "meeting",
    title: "The Grove w/ Andrew",
    description: "Andrew and I are going to go the grove, as per usual",
    author: "Joe Gaebel",
    person: people.andrew
  },
  {
    date: nextDay,
    type: "appointment",
    title: "Work",
    description: "Back to work!",
    author: "Joe Gaebel",
  },
];
