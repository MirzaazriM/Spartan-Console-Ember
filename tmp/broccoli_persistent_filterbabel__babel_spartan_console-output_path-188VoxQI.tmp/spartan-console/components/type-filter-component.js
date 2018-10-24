define('spartan-console/components/type-filter-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    // set filter values
    filterValues: Ember.computed(function () {
      return ['Muscle', 'Regular', 'Equipment'];
    }),

    actions: {
      changeFilter(index) {
        document.getElementById('typeFilterDefaultValue').innerHTML = this.get('filterValues')[index];
        document.getElementById('typeFilterDropdown').style = "display: none";
      },

      toggleDropdown() {

        var display = window.getComputedStyle(document.querySelector('#typeFilterDropdown')).display;

        if (display === 'none') {
          document.getElementById('typeFilterDropdown').style = "display: block";
        } else {
          document.getElementById('typeFilterDropdown').style = "display: none";
        }
      }
    }
  });
});