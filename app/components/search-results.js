import Ember from 'ember';
import range from 'lodash/utility/range';

export default Ember.Component.extend({
  didReceiveAttrs() {
    const query = this.get('query');
    Ember.RSVP.hash({
      apps: this.search('apps', query, 5),
      users: this.search('users', query, 5)
    }).then(data => this.set('model', data))
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
