import Ember from 'ember';

export default Ember.Component.extend({
  didReceiveAttrs() {
    this.set('_query', this.get('query'));
  },
  actions: {
    changeQuery(query) {
      this.sendAction('on-change', query);
    }
  }
});
