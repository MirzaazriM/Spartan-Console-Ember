define('spartan-console/components/admin-item-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentId: 0,
    editText: '',

    actions: {

      openDialog(id) {

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      },

      openEditAdminDialog(id) {

        // first set text to edit
        this.set('editText', this.get('item').email);
        this.set('currentId', id);

        // open dialog window
        this.callEditAdmin();
      }
    }
  });
});