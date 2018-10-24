define('spartan-console/routes/index', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    // set route hooks

    // at start of the application default route is index, but with this hook we redirect application to the statistic route
    beforeModel() {

      // on opening of the app set current page
      sessionStorage.setItem('currentPage', 'statistic');

      // redirect to the statistic page
      this.replaceWith('/statistic');
    }

  });
});