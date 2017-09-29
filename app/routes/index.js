import Ember from 'ember';

var questions = [{
    id: 1,
    title: "What is your name?",
    author: "James",
    date: "23/9/2017",
    answer: "My name is Peter"
  }, {

    id: 2,
    title: "Would you sail or swim?",
    author: "Ingram",
    date: "21/8/2017",
    answer: "If its in the ocean i would love to sail"

  },
  {
    id: 3,
    title: "Who is your favourite musician",
    author: "Riche",
    date: "20/9/2017",
    answer: "Have many favourite but for now i would go with Pyotr Ilyich Tchaikovsky, yeah that's right you don't know him."

  }, {

    id: 4,
    title: "If today is Monday, what is the day after the day before the day before tomorrow?",
    author: "Bonnie",
    date: "12/7/2017",
    answer: "Am Guessing this is not a serious questionand i decline to answer"

  }, {

    id: 5,
    title: "How would you move Mt. Kenya to Nairobi?",
    author: "Petes",
    date: "24/9/2017",
    answer: "Piece by Piece my friend, piece by piece"
  }
];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    destroyQuestion(question) {
      question.destroyRecord();
      this.transitionTo('index');
    }

  }
});
