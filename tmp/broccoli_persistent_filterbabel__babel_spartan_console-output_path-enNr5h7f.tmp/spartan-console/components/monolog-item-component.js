define('spartan-console/components/monolog-item-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentDate: '',

    actions: {

      openDialog(date) {

        this.set('currentDate', date);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      }
    }
  });
});