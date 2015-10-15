import Ember from 'ember';
import range from 'lodash/utility/range';

export default Ember.Route.extend({
  model(params, transition) {
    const { query } = transition.queryParams;
    return this.search(query);
  },
  search(query) {
    return new Ember.RSVP.Promise(function(resolve){
      Ember.run.later(function(){
        const apps = range(30).map(function(i){
          return {
            id: `app-${i}-${query}`,
            title: `App ${i}-${query}`
          }
        });
        resolve(apps);
      }, 250)
    });
  }
});
