define('spartan-console/components/workout-type-filter-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    // set filter values
    filterValues: Ember.computed(function () {
      return ['Reps', 'Timer'];
    }),

    actions: {
      changeFilter(index) {
        var id = this.get('number');
        document.getElementById('workoutTypeFilterDefaultValue' + id).innerHTML = this.get('filterValues')[index];
        document.getElementById('workoutTypeFilterDropdown' + id).style = "display: none";
      },

      toggleDropdown() {

        var id = this.get('number');
        var display = window.getComputedStyle(document.querySelector('#workoutTypeFilterDropdown' + id)).display;

        if (display === 'none') {
          document.getElementById('workoutTypeFilterDropdown' + id).style = "display: block !important;";
        } else {
          document.getElementById('workoutTypeFilterDropdown' + id).style = "display: none;";
        }
      }
    }

  });
});