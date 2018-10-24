import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  // set statistic hooks and properties
  ajax: inject(),

  model(){
    var id = sessionStorage.getItem('currentPolicy');

    var data = this.get('ajax').request('/policy?id=' + id, { method: 'GET' });

    return data;
  },


  actions: {
    willTransition(){

    }
  }

});
