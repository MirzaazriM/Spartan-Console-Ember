import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  // set statistic hooks and properties
  ajax: inject(),

  model(){

    var data = this.get('ajax').request('/policy', { method: 'GET' });

    data.then(function(result){
      var id = result.data[0].id;
      sessionStorage.setItem('currentPolicy', id);
    });

    return data;
  }

});
