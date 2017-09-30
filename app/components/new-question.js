import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    qformShow() {
      this.set('addNewQuestion', true)
    },
    saveQuestion1() {
      var params = {
        title: this.get('title') || "",
        author: this.get('author') || "",
        answer: this.get('answer') || "",
        date: this.get('date') || ""
      };
      this.set('addNewQuestion', false);
      this.sendAction('saveQuestion2', params);
    },
    cancelQuestion() {
      this.set('addNewQuestion', false);
    }
  }
});
