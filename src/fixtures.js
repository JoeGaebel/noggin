import moment from 'moment';
const today = moment();
const tomorrow = moment().add(1,'days');
const nextDay = moment().add(2,'days');

export const people = {
  owen: {
    name: "Owen Prime",
    email: "oprime@noggin.io",
    number: "+61 123 456 7890",
    imageURL: "https://www.noggin.io/hubfs/Blog_images/Author_profile_photos/c0217_500px.png?t=1512124302942"
  }
};

export const events = [
  {
    date: today,
    type: "appointment",
    title: "Build a timeline application",
    description: "Spend some time to whip up a solid timeline app!",
    author: "Joe Gaebel",
  },
  {
    date: tomorrow.add(1, 'hour'),
    type: "meeting",
    title: "Talk with Owen",
    description: "I'll need to speak with Owen to learn more about Noggin and what kind of meaningful work I can contribute to",
    author: "Joe Gaebel",
    person: people.owen
  },
  {
    date: nextDay,
    type: "appointment",
    title: "Surfing",
    description: "Surfers Paradise is calling!",
    author: "Joe Gaebel",
  },
];
