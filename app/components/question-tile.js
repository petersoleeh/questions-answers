import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(question) {
      if (confirm('Delete this Quetion?')) {
        this.sendAction('destroyQuestion',
          question);
      }
    }
  }

});
