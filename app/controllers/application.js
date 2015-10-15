import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['query'],
  query: '',
  actions: {
    changeQuery(query) {
      this.set('query', query);
    }
  }
});
