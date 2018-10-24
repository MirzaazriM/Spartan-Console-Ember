define('spartan-console/routes/monolog', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {

      var data = this.get('ajax').request('/monolog/logs?type=ADMIN', { method: 'GET' });

      return data;
    }
  });
});