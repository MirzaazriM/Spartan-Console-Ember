define('spartan-console/components/admin-dialog-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    heading: 'Add admin',
    buttonText: 'Save',
    scopes: Ember.computed(function () {
      return [];
    }),

    headingObserver: Ember.observer('heading', function () {

      var heading = this.get('heading');

      if (heading === 'Add admin') {
        this.set('buttonText', 'Save');
      } else {
        this.set('buttonText', 'Edit');
      }
    }),

    actions: {

      closeDialog() {
        document.getElementById('dialogOverlay').style = "display: none;";
        document.getElementById('adminDialog').style = "display: none;";
      },

      do() {

        var email = document.getElementById('adminEmailInput').value;

        if (email.indexOf('@') === -1) {
          return;
        }

        var button = this.get('buttonText');

        if (button === 'Save') {
          this.callAddAdmin();
        } else {
          this.callEditAdmin();
        }

        document.getElementById('dialogOverlay').style = "display: none;";
        document.getElementById('adminDialog').style = "display: none;";
      }
    }

  });
});