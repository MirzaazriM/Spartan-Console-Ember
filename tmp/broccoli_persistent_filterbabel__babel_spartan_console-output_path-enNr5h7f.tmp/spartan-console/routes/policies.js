define('spartan-console/routes/policies', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {

      var data = this.get('ajax').request('/policy', { method: 'GET' });

      data.then(function (result) {
        var id = result.data[0].id;
        sessionStorage.setItem('currentPolicy', id);
      });

      return data;
    }

  });
});