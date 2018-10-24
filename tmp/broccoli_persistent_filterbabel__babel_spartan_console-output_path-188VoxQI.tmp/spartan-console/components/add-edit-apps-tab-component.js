define('spartan-console/components/add-edit-apps-tab-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    currentTab: 'basicTab',

    tabs: Ember.computed(function () {
      return ['basicTab', 'packagesTab', 'nutplansTab', 'worplansTab', "exercisesTab", "tagsTab"];
    }),

    actions: {

      changeTab(name) {

        var tabs = this.get('tabs');
        // update current tab value
        this.set('currentTab', name);

        for (var i = 0; i < tabs.length; i++) {

          if (tabs[i] === name) {
            document.getElementById(tabs[i]).classList.add('underlined');
          } else {
            document.getElementById(tabs[i]).classList.remove('underlined');
          }
        }

        var containers = ['bas', 'pack', 'nut', 'wor', "exer", "tag"];

        var tab = this.get('currentTab');

        for (var i = 0; i < containers.length; i++) {
          if (tab.indexOf(containers[i]) !== -1) {
            document.getElementById(containers[i]).classList.add('tabDisplayed');

            if (containers[i] === 'nut' || containers[i] === 'wor') {
              document.getElementById('plans').style = "display: block;";
            } else {
              document.getElementById('plans').style = "display: none;";
            }
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