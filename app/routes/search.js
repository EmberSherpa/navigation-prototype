import Ember from 'ember';
import range from 'lodash/utility/range';

export default Ember.Route.extend({
  model(params, transition) {
    const { query } = transition.queryParams;
    return Ember.RSVP.hash({
      apps: this.search('apps', query, 5),
      users: this.search('users', query, 5)
    });
  },
  search(resource, query, count=30) {
    return new Ember.RSVP.Promise(function(resolve){
      Ember.run.later(function(){
        const apps = range(count).map(function(i){
          return {
            id: `${resource}-${i}-${query}`,
            title: `${resource} ${i}-${query}`
          }
        });
        resolve(apps);
      }, 250)
    });
  }
});
