import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  // set statistic hooks and properties
  ajax: inject(),

  model(){

    var data = this.get('ajax').request('/statistics', { method: 'GET' });

    return data;
  }

});
