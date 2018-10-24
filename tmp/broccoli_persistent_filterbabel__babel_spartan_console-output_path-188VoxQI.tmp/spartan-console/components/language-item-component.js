define('spartan-console/components/language-item-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentId: 0,

    actions: {

      openDialog(id) {

        this.set('currentId', id);

        document.getElementById('confirmationDialog').style = "display: block;";
        document.getElementById('dialogOverlay').style = "display: block;";
      }
    }
  });
});