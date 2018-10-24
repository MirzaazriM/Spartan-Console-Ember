define('spartan-console/components/workout-behavior-filter-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    // set filter values
    filterValues: Ember.computed(function () {
      return ['Regular', 'Warmup', 'Stretching'];
    }),

    actions: {
      changeFilter(index) {
        var id = this.get('number');
        document.getElementById('workoutBehaviorFilterDefaultValue' + id).innerHTML = this.get('filterValues')[index];
        document.getElementById('workoutBehaviorFilterDropdown' + id).style = "display: none";
      },

      toggleDropdown() {

        var id = this.get('number');
        var display = window.getComputedStyle(document.querySelector('#workoutBehaviorFilterDropdown' + id)).display;
        if (display === 'none') {
          document.getElementById('workoutBehaviorFilterDropdown' + id).style = "display: block !important;";
        } else {
          document.getElementById('workoutBehaviorFilterDropdown' + id).style = "display: none;";
        }
      }
    }

  });
});