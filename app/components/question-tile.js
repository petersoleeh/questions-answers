import Ember from 'ember';

export default Ember.Component.extend({
  isAnswerShowing: false,
  actions: {
    ansShow: function() {
      this.set('isAnswerShowing', true);
    },
    ansHide: function() {
      this.set('isAnswerShowing', false);
    }
  }

});
