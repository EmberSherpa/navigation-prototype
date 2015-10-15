import Ember from 'ember';

const {
  isPresent
} = Ember;

export default Ember.Route.extend({
  queryParams: {
    query: {
      refreshModel: true
    }
  },
  model(params, transition) {
    const { query } = params;
    const isResourceRoute = ['apps.index'].contains(transition.targetName);
    return {
      isSearchResultsVisible: isPresent(query) && !isResourceRoute
    }
  }
});
