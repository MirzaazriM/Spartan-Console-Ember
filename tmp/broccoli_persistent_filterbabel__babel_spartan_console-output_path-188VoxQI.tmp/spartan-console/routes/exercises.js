define('spartan-console/routes/exercises', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {

      var data = this.get('ajax').request('/exercises/list?from=0&limit=1000', { method: 'GET' });

      return data;
    }
  });
});