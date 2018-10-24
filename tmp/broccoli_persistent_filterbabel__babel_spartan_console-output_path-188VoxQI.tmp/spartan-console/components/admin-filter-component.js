define('spartan-console/components/admin-filter-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    // set filter values
    filterValues: Ember.computed(function () {
      return ['Admin', 'Developer', 'Worker'];
    }),

    actions: {

      changeFilter(index) {
        document.getElementById('adminFilterDefaultValue').innerHTML = this.get('filterValues')[index];
        document.getElementById('adminFilterDropdown').style = "display: none";
      },

      toggleDropdown() {

        var display = window.getComputedStyle(document.querySelector('#adminFilterDropdown')).display;

        if (display === 'none') {
          document.getElementById('adminFilterDropdown').style = "display: block";
        } else {
          document.getElementById('adminFilterDropdown').style = "display: none";
        }
      }

    }
  });
});