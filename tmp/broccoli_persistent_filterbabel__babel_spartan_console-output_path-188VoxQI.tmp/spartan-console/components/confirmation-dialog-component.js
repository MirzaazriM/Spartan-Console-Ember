define('spartan-console/components/confirmation-dialog-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    // set component properties and actions

    // set actions
    actions: {
      // close dialog when clicked 'No' button
      closeDialog() {
        document.getElementById('dialogOverlay').style = "display: none;";
        document.getElementById('confirmationDialog').style = "display: none;";
      },
      // make appropriate action when clicked 'Yes' button
      do() {
        // trigger closure action so that appropriate controller function can make request
        this.call();
        document.getElementById('dialogOverlay').style = "display: none;";
        document.getElementById('confirmationDialog').style = "display: none;";
      }
    }
  });
});