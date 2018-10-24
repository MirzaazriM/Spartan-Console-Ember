define('spartan-console/components/user-dropdown-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    // set component properties and actions

    actions: {
      logout() {
        document.getElementById('userProfileDropdown').style = "display: none;";

        document.getElementById('loginBoxDialogOverlay').style = "display: block;";
        document.getElementById('loginBox').style = "display: block;";

        sessionStorage.setItem('logged', false);

        location.href = '/#/statistic';
      },

      stopEventPropagation() {}

    }
  });
});