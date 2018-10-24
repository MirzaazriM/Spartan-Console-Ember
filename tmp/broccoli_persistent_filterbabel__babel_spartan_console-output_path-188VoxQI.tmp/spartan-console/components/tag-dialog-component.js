define('spartan-console/components/tag-dialog-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    heading: 'Add tag',
    buttonText: 'Save',
    languages: Ember.computed(function () {
      return [];
    }),

    headingObserver: Ember.observer('heading', function () {

      var heading = this.get('heading');

      if (heading === 'Add tag') {
        this.set('buttonText', 'Save');
      } else {
        this.set('buttonText', 'Edit');
      }
    }),

    didRender() {
      this._super(...arguments);
      //document.getElementById('tagsLanguageDropdown').style = "opacity: 0.24";
    },

    actions: {

      closeDialog() {
        document.getElementById('dialogOverlay').style = "display: none;";
        document.getElementById('tagDialog').style = "display: none;";
      },

      do() {

        var text = document.getElementById('tagText').value;
        if (text.length === 0) {
          return;
        }

        var button = this.get('buttonText');

        if (button === 'Save') {
          this.callAddTag();
        } else {
          this.callEditTag();
        }

        document.getElementById('dialogOverlay').style = "display: none;";
        document.getElementById('tagDialog').style = "display: none;";
      }
    }

  });
});