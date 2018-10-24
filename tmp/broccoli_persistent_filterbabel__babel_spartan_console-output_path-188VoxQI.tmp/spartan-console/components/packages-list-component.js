define('spartan-console/components/packages-list-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({
    action: '',

    selectedPackages: Ember.computed(function () {
      return [];
    }),

    appPackages: Ember.computed(function () {
      return [];
    }),

    didRender() {
      this._super(...arguments);

      this.markSelected();
    },

    actions: {

      disableSelectingPackage() {},

      // select/unselect
      select(id) {
        var tagIn = false;

        var selected = this.get('selectedPackages');

        for (var i = 0; i < selected.length; i++) {
          if (selected[i] === parseInt(id)) {
            tagIn = true;
          }
        }

        if (tagIn === false) {
          document.getElementById(id).style = "background-color: #F44336; color: #fff;";
          this.get('selectedPackages').push(parseInt(id));
        } else {
          document.getElementById(id).style = "background-color: #fff; color: #333;";
          var index = this.get('selectedPackages').indexOf(parseInt(id));
          if (index > -1) {
            this.get('selectedPackages').splice(index, 1);
          }
        }
      }

    },

    markSelected() {

      var selected = [];
      var ids = this.get('appPackages');

      // check which tag names to select
      for (var i = 0; i < ids.length; i++) {
        var id = '' + ids[i].package_child;
        selected.push(parseInt(ids[i].package_child));

        if (document.getElementById(id) !== null) {
          document.getElementById(id).style = "background-color: #F44336; color: #fff;";
        }
      }

      this.set("selectedPackages", selected);
    }

  });
});