import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  // set statistic hooks and properties
  ajax: inject(),

  model(){

    var data = this.get('ajax').request('/workouts/list?from=0&limit=1000', { method: 'GET' });

    return data;
  }
});
