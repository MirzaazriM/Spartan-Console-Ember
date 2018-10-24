define('spartan-console/components/policy-body-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    didRender() {
      document.getElementById('policyBody').innerHTML = this.get('item');
    }
  });
});