import Ember from 'ember';

const {
  isEmpty
} = Ember;

export default Ember.Route.extend({
  queryParams: {
    query: {
      refreshModel: true
    }
  },
  beforeModel(transition) {
    const { query } = transition.queryParams;
    const isResourceRoute = ['apps.index'].contains(transition.targetName);
    if (!isResourceRoute && !isEmpty(query)) {
      this.transitionTo('search', {queryParams: { query }});
    }
  }
});
