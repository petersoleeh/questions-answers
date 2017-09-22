import Ember from 'ember';

var questions = [{
    id: 1,
    title: "What is your name?",
    author: "James",
    date: "today"
  }, {

    id: 2,
    title: "Would you sail or swim?",
    author: "Ingram",
    date: "today"

  },
  {
    id: 3,
    title: "Who is your favourite musician",
    author: "Riche",
    date: "two days ago"

  }, {

    id: 4,
    title: "Which day comes before today's tomorrow?",
    author: "Bonnie",
    date: "now"

  }, {

    id: 5,
    title: "How can you move Mt. Kenya to Nairobi?",
    author: "Petes",
    date: "today"
  }
];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  }
});
