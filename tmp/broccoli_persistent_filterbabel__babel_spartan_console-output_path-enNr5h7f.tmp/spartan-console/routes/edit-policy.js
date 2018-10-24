define('spartan-console/routes/edit-policy', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set statistic hooks and properties
    ajax: Ember.inject.service(),

    model() {
      var id = sessionStorage.getItem('currentPolicy');

      var data = this.get('ajax').request('/policy?id=' + id, { method: 'GET' });

      return data;
    },

    actions: {
      willTransition() {}
    }

  });
});