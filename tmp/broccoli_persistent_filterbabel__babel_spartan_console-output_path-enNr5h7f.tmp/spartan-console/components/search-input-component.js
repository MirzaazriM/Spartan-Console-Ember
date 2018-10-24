define('spartan-console/components/search-input-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    id: 'searcher',

    actions: {
      search() {
        this.callSearch();
      }
    }

  });
});