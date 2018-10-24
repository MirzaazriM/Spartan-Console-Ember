import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { hash } from 'rsvp';

export default Route.extend({


  // ajax service
  ajax: inject(),

  model(){

    var packageList = this.get('ajax').request("/packages/list?from=0&limit=1000", { method: 'GET' });

    // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
    return hash({
      packagesList: packageList,
    });
  }

});
