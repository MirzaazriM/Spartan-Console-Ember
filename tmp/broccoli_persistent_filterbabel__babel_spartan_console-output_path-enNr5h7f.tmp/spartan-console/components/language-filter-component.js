define('spartan-console/components/language-filter-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    // set filter values
    filterValues: Ember.computed(function () {
      return [];
    }),
    isoCode: 'en',

    defaultFilter: 'English',

    // check action and disable filter if needed
    didRender() {
      this._super(...arguments);
      if (this.get('action') === 'edit') {
        document.getElementById('languageFilterDefaultValue').style = "pointer-events: none; cursor: default; color: #aaa;";
        document.getElementById('languageFilterDefaultValue').innerHTML = sessionStorage.getItem('lang');
        document.getElementById('languageHiddenValue').innerHTML = sessionStorage.getItem('lang');
      }
    },

    actions: {

      changeFilter(index) {
        document.getElementById('languageFilterDefaultValue').innerHTML = this.get('filterValues')[index].name;
        //this.set('isoCode', this.get('filterValues')[index].iso);
        document.getElementById('languageHiddenValue').innerHTML = this.get('filterValues')[index].iso;
        document.getElementById('languageFilterDropdown').style = "display: none";

        // get data by language
        if (this.get('action') !== 'edit') {
          this.callLanguageData();
        }
      },

      toggleDropdown() {
        var display = window.getComputedStyle(document.querySelector('#languageFilterDropdown')).display;

        if (document.getElementById('difficultyFilterDropdown') !== null) {
          document.getElementById('difficultyFilterDropdown').style = "display: none;";
        }

        if (display === 'none') {
          document.getElementById('languageFilterDropdown').style = "display: block";
        } else {
          document.getElementById('languageFilterDropdown').style = "display: none";
        }
      }

    }
  });
});