define('spartan-console/routes/add-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({

    // ajax service
    ajax: Ember.inject.service(),

    model() {

      var packageList = this.get('ajax').request("/packages/list?from=0&limit=1000", { method: 'GET' });

      // return hashed promises - set all fetched data in one object so that all fetched data can be returned inside this route model
      return Ember.RSVP.hash({
        packagesList: packageList
      });
    }

  });
});