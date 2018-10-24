define('spartan-console/components/monolog-filter-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    // set filter values
    filterValues: Ember.computed(function () {
      return ['Admin', 'Mobile', 'Tags', 'Exercises', 'Recepies', 'Workouts', 'Workoutplans', 'Nutritionplans', 'Packages', 'Apps'];
    }),

    defaultFilter: 'Admin',

    actions: {
      changeFilter(index) {
        this.set('defaultFilter', this.get('filterValues')[index]);

        document.getElementById('monologFilterDropdown').style = "display: none";
      },

      toggleDropdown() {

        var display = window.getComputedStyle(document.querySelector('#monologFilterDropdown')).display;

        if (display === 'none') {
          document.getElementById('monologFilterDropdown').style = "display: block";
        } else {
          document.getElementById('monologFilterDropdown').style = "display: none";
        }
      }
    }
  });
});