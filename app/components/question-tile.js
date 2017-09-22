import Ember from 'ember';

export default Ember.Component.extend({
  isAnswerShowing: false,
  actions: {
    showAns: function() {
      this.set('isAnswerShowing', true);
    }
  }

});
