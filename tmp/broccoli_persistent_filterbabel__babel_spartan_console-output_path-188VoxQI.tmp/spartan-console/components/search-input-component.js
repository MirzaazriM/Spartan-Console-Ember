define('spartan-console/components/search-input-component', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({

    id: 'searcher',
    currentState: "All",

    actions: {
      search() {
        this.callSearch();
      },

      toggleStatefilter() {

        var display = window.getComputedStyle(document.querySelector('#statefilterDropdown')).display;

        if (display === "none") {
          document.getElementById("statefilterDropdown").style = "display: block";
        } else {
          document.getElementById("statefilterDropdown").style = "display: none";
        }
      },

      filter() {
        document.getElementById("searcher").value = "";
        this.callFilterStates();
      }
    }

  });
});