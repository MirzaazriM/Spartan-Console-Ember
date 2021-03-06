define('spartan-console/components/add-edit-workouts-tab-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentTab: 'basicTab',

    tabs: Ember.computed(function () {
      return ['basicTab', 'tagsTab', 'roundsTab'];
    }),

    actions: {

      changeTab(name) {

        var tabs = this.get('tabs');
        // update current tab value
        this.set('currentTab', name);

        for (var i = 0; i < tabs.length; i++) {

          if (tabs[i] === name) {
            document.getElementById(tabs[i]).classList.add('underlined');

            if (name === 'roundsTab') {
              document.getElementById('addNewRound').style = "display: block;";
            } else {
              document.getElementById('addNewRound').style = "display: none;";
            }
          } else {
            document.getElementById(tabs[i]).classList.remove('underlined');
          }
        }

        var containers = ['bas', 'tag', 'round'];

        var tab = this.get('currentTab');

        for (var i = 0; i < containers.length; i++) {
          if (tab.indexOf(containers[i]) !== -1) {
            document.getElementById(containers[i]).classList.add('tabDisplayed');
          } else {
            document.getElementById(containers[i]).classList.remove('tabDisplayed');
          }
        }
      },

      save() {
        this.callSave();
      }

    }

  });
});