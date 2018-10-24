define('spartan-console/routes/statistic', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {

      var data = this.get('ajax').request('/statistics', { method: 'GET' });

      return data;
    }

  });
});