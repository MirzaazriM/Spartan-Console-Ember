define('spartan-console/components/exercise-difficulty-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    // action value
    action: '',

    // old hardness value
    oldHardness: '',

    didRender() {
      this._super(...arguments);

      if (this.get('action') === 'edit') {

        if (this.get('oldHardness') === 'E') {
          document.getElementById('difficultyFilterDefaultValue').innerHTML = 'Easy';
        } else if (this.get('oldHardness') === 'M') {
          document.getElementById('difficultyFilterDefaultValue').innerHTML = 'Medium';
        } else if (this.get('oldHardness') === 'H') {
          document.getElementById('difficultyFilterDefaultValue').innerHTML = 'Hard';
        }
      }
    },

    // set filter values
    filterValues: Ember.computed(function () {
      return ['Easy', 'Medium', 'Hard'];
    }),

    actions: {
      changeFilter(index) {
        document.getElementById('difficultyFilterDefaultValue').innerHTML = this.get('filterValues')[index];
        document.getElementById('difficultyFilterDropdown').style = "display: none";
      },

      toggleDropdown() {

        var display = window.getComputedStyle(document.querySelector('#difficultyFilterDropdown')).display;

        if (document.getElementById('languageFilterDropdown') !== null) {
          document.getElementById('languageFilterDropdown').style = "display: none;";
        }

        if (display === 'none') {
          document.getElementById('difficultyFilterDropdown').style = "display: block";
        } else {
          document.getElementById('difficultyFilterDropdown').style = "display: none";
        }
      }
    }
  });
});